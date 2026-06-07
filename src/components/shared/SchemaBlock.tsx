export function SchemaBlock({ schemaJSON }: { schemaJSON: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSON) }}
    />
  );
}
