import { FAQBlock } from "@/components/seo/FAQBlock";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I create a wedding seating chart?",
      answer: "The easiest way to create a wedding seating chart is to use an interactive drag-and-drop tool like SeatingPlanner. First, gather your finalized guest list and RSVPs. Next, determine your venue's table sizes and shapes (e.g., 60-inch round tables seat 8 guests). Finally, use the visual canvas to group guests by relationships and dietary needs, dragging them into specific seats."
    },
    {
      question: "How much space do you need between wedding tables?",
      answer: "You need a minimum of 60 inches (5 feet) between round wedding tables. This provides 18 inches for each chair (when pulled out) and 24 inches of walking space for guests and catering staff to move comfortably between tables."
    },
    {
      question: "Is this seating chart maker free to use?",
      answer: "Yes, SeatingPlanner is a 100% free frontend utility. You can create tables, add guests, assign seats, and export your layout to PDF or PNG directly in your browser without creating an account or paying a subscription fee."
    },
    {
      question: "Where should the bride and groom sit at a wedding reception?",
      answer: "The bride and groom traditionally sit either at a sweetheart table (just the couple) positioned centrally for full room visibility, or at a head table with the wedding party. A modern alternative is the 'King's Table' where the couple sits with their wedding party and their respective dates."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-stone">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 text-center">Expert Answers to Wedding Seating Questions</h1>
        <p className="lead text-center text-muted-foreground mb-12">
          Clear, concise answers to help you navigate the logistics and etiquette of arranging your reception.
        </p>

        {/* Semantic component that injects schema and renders AI-friendly chunks */}
        <FAQBlock faqs={faqs} />
      </div>
    </div>
  );
}