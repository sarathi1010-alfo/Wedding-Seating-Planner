import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  faqs: FAQ[];
}

export function FAQBlock({ faqs }: FAQBlockProps) {
  // Generate JSON-LD for FAQPage schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl font-heading mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-card border border-border p-6 rounded-lg">
            {/* Answer-first semantic formatting for AI extraction */}
            <h3 className="text-lg font-medium mb-3 text-foreground">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed m-0">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
