export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-stone">
        <h1 className="text-4xl font-heading mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="text-foreground space-y-4">
          <p>By using the Wedding Seating Planner, you agree to these terms.</p>
          <h2 className="text-2xl font-heading mt-8 mb-4">Use of Service</h2>
          <p>This tool is provided "as is" for personal use. We are not responsible for any data loss, so please be sure to export your charts regularly.</p>
          <h2 className="text-2xl font-heading mt-8 mb-4">Intellectual Property</h2>
          <p>The templates and UI designs are property of Wedding Seating Planner.</p>
        </div>
      </div>
    </div>
  );
}