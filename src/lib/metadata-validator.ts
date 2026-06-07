import { ToolData } from "./metadata-pipeline";

export interface ValidationReport {
  tool_name: string;
  score: number;
  warnings: string[];
  errors: string[];
}

export function validateMetadata(tool: ToolData, generatedTitle: string, generatedDescription: string, allTitles: string[]): ValidationReport {
  let score = 100;
  const warnings: string[] = [];
  const errors: string[] = [];

  // 1. Technical SEO (40%)
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

  // Duplicate title check
  const duplicateTitles = allTitles.filter(t => t === generatedTitle);
  if (duplicateTitles.length > 1) {
    score -= 20;
    errors.push(`Duplicate title found: "${generatedTitle}"`);
  }

  // 2. Semantic Quality (30%)
  if (!generatedTitle.toLowerCase().includes(tool.tool_name.toLowerCase())) {
    score -= 15;
    errors.push("Primary keyword (tool name) missing from title.");
  }
  if (!generatedDescription.toLowerCase().includes(tool.primary_action.toLowerCase())) {
    score -= 10;
    warnings.push("Primary action missing from description.");
  }

  // 3. CTR Optimization (10%)
  // Looking for strong CTR modifiers (Free, Instant, Online, Calculator, etc)
  const ctrModifiers = ['free', 'online', 'instant', 'fast', 'no signup', 'tool', 'calculator', 'converter'];
  const hasCtrModifier = ctrModifiers.some(mod => generatedTitle.toLowerCase().includes(mod));
  if (!hasCtrModifier) {
    score -= 10;
    warnings.push("Missing CTR modifiers (e.g., 'Free', 'Online') in title.");
  }

  // 4. Entity Coverage (20%) - While we can't fully validate schema here without running the component,
  // we can ensure the data feeds provide what schema needs.
  if (!tool.cluster || !tool.slug) {
    score -= 20;
    errors.push("Missing routing data (cluster/slug) essential for canonicals and breadcrumb schema.");
  }

  return {
    tool_name: tool.tool_name,
    score: Math.max(0, score),
    warnings,
    errors
  };
}
