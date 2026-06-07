import fs from 'fs';
import path from 'path';

function generateToolMetadata(tool) {
  // Using the actual data structure found in tools-data.json
  const tool_name = tool.name;
  const primary_action = tool.action || 'Create';
  const input_type = tool.input || 'data';
  const output_type = tool.output || 'results';
  const key_benefit = tool.description || 'Fast and reliable';

  const titleVariants = [
    `${tool_name} | Free Online Tool`,
    `Free ${tool_name} Online`,
    `${tool_name} — ${key_benefit.split('.')[0]}`,
  ];

  const optimizedTitle = titleVariants
    .filter(t => t.length <= 60)
    .sort((a, b) => b.length - a.length)[0] || titleVariants[0];

  const descriptionVariants = [
    `${key_benefit} Use our fast, free online ${tool_name} today. No signup needed.`,
    `Instantly ${primary_action.toLowerCase()} your ${input_type.toLowerCase()} to ${output_type.toLowerCase()} with our free ${tool_name}. ${key_benefit}.`,
  ];

  const optimizedDescription = descriptionVariants
    .filter(d => d.length <= 155 && d.length >= 50)
    .sort((a, b) => b.length - a.length)[0] || descriptionVariants[0];

  return { title: optimizedTitle, description: optimizedDescription };
}

function validateMetadata(tool, generatedTitle, generatedDescription, allTitles) {
  let score = 100;
  const warnings = [];
  const errors = [];

  if (generatedTitle.length > 60) {
    score -= 10;
    warnings.push(`Title exceeds 60 chars (${generatedTitle.length})`);
  }
  if (generatedDescription.length > 155) {
    score -= 10;
    warnings.push(`Description exceeds 155 chars (${generatedDescription.length})`);
  }
  if (generatedDescription.length < 50) {
    score -= 10;
    warnings.push(`Description is too short (${generatedDescription.length}), might be considered thin.`);
  }

  const duplicateTitles = allTitles.filter(t => t === generatedTitle);
  if (duplicateTitles.length > 1) {
    score -= 20;
    errors.push(`Duplicate title found: "${generatedTitle}"`);
  }

  if (tool.name && !generatedTitle.toLowerCase().includes(tool.name.toLowerCase())) {
    score -= 15;
    errors.push(`Primary keyword (tool name) missing from title: expected "${tool.name}" in "${generatedTitle}"`);
  }

  const ctrModifiers = ['free', 'online', 'instant', 'fast', 'no signup', 'tool', 'calculator', 'converter'];
  const hasCtrModifier = ctrModifiers.some(mod => generatedTitle.toLowerCase().includes(mod));
  if (!hasCtrModifier) {
    score -= 10;
    warnings.push("Missing CTR modifiers (e.g., 'Free', 'Online') in title.");
  }

  if (!tool.cluster && !tool.tag) {
    score -= 20;
    errors.push("Missing routing data (cluster/tag) essential for canonicals and breadcrumb schema.");
  }

  return {
    tool_name: tool.name || tool.tool || 'Unknown Tool',
    score: Math.max(0, score),
    warnings,
    errors
  };
}

function runAudit() {
  console.log(`\n🔍 Starting Metadata Validation Audit...`);
  console.log('--------------------------------------------------\n');

  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  if (!fs.existsSync(filePath)) {
      console.log("⚠️ No tools-data.json found. Skipping audit.");
      process.exit(0);
  }

  const rawData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const allGeneratedTitles = [];
  const generatedData = rawData.map(tool => {
      const meta = generateToolMetadata(tool);
      allGeneratedTitles.push(meta.title);
      return { tool, meta };
  });

  let hasFailures = false;
  let totalScore = 0;

  generatedData.forEach(({ tool, meta }) => {
      const report = validateMetadata(tool, meta.title, meta.description, allGeneratedTitles);
      totalScore += report.score;

      console.log(`\n📄 Auditing: ${report.tool_name}`);
      console.log(`   Title: ${meta.title}`);
      console.log(`   Desc: ${meta.description}`);
      console.log(`   Score: ${report.score}/100`);

      if (report.warnings.length > 0) {
          report.warnings.forEach(w => console.log(`   ⚠️ Warning: ${w}`));
      }
      if (report.errors.length > 0) {
          report.errors.forEach(e => console.log(`   ❌ Error: ${e}`));
      }

      if (report.score < 85) {
          console.log(`   🚨 STATUS: FAILED (Score below 85 threshold)`);
          hasFailures = true;
      } else {
          console.log(`   ✅ STATUS: PASSED`);
      }
  });

  const avgScore = (totalScore / rawData.length).toFixed(1);
  console.log('\n--------------------------------------------------');
  console.log(`📊 Final Average Metadata Quality Score: ${avgScore}/100`);

  if (hasFailures) {
      console.log('\n❌ AUDIT FAILED. One or more tools fell below the 85 quality threshold.');
      process.exit(1);
  } else {
      console.log('\n🚀 AUDIT PASSED. All metadata meets quality standards.');
      process.exit(0);
  }
}

runAudit();