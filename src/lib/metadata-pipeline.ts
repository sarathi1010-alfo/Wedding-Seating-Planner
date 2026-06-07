import { constructMetadata } from "./seo";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export interface ToolData {
  tool_name: string;
  cluster: string;
  primary_action: string;
  input_type: string;
  output_type: string;
  key_benefit: string;
  slug: string;
}

/**
 * Automatically generates highly optimized, multi-variant metadata for programmatic tool pages.
 * Integrates with the existing `constructMetadata` function.
 */
export function generateToolMetadata(tool: ToolData): Metadata {
  const { tool_name, cluster, primary_action, input_type, output_type, key_benefit, slug } = tool;

  // Title Tag Generation (Select shortest to avoid truncation, max 60 chars)
  const titleVariants = [
    `${tool_name} | Free Online Tool`,
    `${primary_action} ${input_type} to ${output_type} Free`,
    `${tool_name} — ${key_benefit}`,
  ];

  const optimizedTitle = titleVariants
    .filter(t => t.length <= 60)
    .sort((a, b) => a.length - b.length)[0] || titleVariants[0];

  // Meta Description Generation (Select most compelling under 155 chars)
  const descriptionVariants = [
    `Instantly ${primary_action.toLowerCase()} your ${input_type.toLowerCase()} to ${output_type.toLowerCase()} with our free ${tool_name}. ${key_benefit}.`,
    `Looking to ${primary_action.toLowerCase()} ${input_type.toLowerCase()}? Use our fast, free online ${tool_name}. ${key_benefit}. No signup needed.`,
  ];

  const optimizedDescription = descriptionVariants
    .filter(d => d.length <= 155)
    .sort((a, b) => b.length - a.length)[0] || descriptionVariants[0];

  // Canonical URL
  const canonicalUrl = `${siteConfig.url}/tools/${cluster.toLowerCase()}/${slug.toLowerCase()}`;

  // OG Data
  const ogTitle = `${tool_name} - Free Online Tool`;
  const ogDescription = `Free online tool to ${primary_action.toLowerCase()} ${input_type.toLowerCase()}. ${key_benefit}.`;

  return constructMetadata({
    title: optimizedTitle,
    description: optimizedDescription,
    canonicalUrl: canonicalUrl,
  });
}
