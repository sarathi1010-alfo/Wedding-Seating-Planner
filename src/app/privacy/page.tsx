export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-stone">
        <h1 className="text-4xl font-heading mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="text-foreground space-y-4">
          <p>Your privacy is important to us. This policy outlines how we handle your data.</p>
          <h2 className="text-2xl font-heading mt-8 mb-4">Local Storage</h2>
          <p>We do not store your seating charts, guest lists, or personal information on our servers. All data is saved locally in your browser using localStorage.</p>
          <h2 className="text-2xl font-heading mt-8 mb-4">Data Collection</h2>
          <p>We may use basic analytics to understand how our tool is used to improve the experience, but we do not track individual users or sell any data.</p>
        </div>
      </div>
    </div>
  );
}