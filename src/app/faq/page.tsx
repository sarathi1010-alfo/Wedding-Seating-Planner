export default function FAQ() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading mb-10 text-center">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {[
            { q: "Is this free to use?", a: "Yes, the core planner is completely free to use directly in your browser." },
            { q: "Do I need to create an account?", a: "No! Your seating chart is saved automatically to your browser's local storage." },
            { q: "Can I export my plan?", a: "Yes, you can export your plan as a high-resolution PNG image or a formatted PDF for printing." }
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-medium mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}