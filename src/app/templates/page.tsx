export default function Templates() {
  return (
    <div className="min-h-screen bg-background py-20 px-6 text-center">
      <h1 className="text-4xl font-heading mb-4">Templates Gallery</h1>
      <p className="text-xl text-muted-foreground mb-10">Coming soon in Phase 2.</p>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-card h-64 rounded-xl border border-border flex items-center justify-center opacity-50">
            Template {i}
          </div>
        ))}
      </div>
    </div>
  );
}