"use client";

import { usePlannerStore } from "@/store/plannerStore";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export function TopToolbar() {
  const { tables, guests, assignments } = usePlannerStore();

  const handleExportPNG = async () => {
    const node = document.getElementById("canvas-container");
    if (!node) return;

    try {
      // Small timeout to ensure any immediate UI states settle
      await new Promise(resolve => setTimeout(resolve, 100));

      const dataUrl = await toPng(node, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#F8F5F0', // Ivory background
      });

      const link = document.createElement('a');
      link.download = 'wedding-seating-chart.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export PNG", err);
    }
  };

  const handleExportPDF = () => {
    // A4 paper is 210 x 297 mm
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const primaryColor = '#3A3532'; // Charcoal
    const secondaryColor = '#B8A89A'; // Taupe

    doc.setFont("helvetica", "bold");
    doc.setTextColor(primaryColor);
    doc.setFontSize(24);
    doc.text("Emma & James Wedding", 105, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setTextColor(secondaryColor);
    doc.setFontSize(14);
    doc.text("Seating Arrangement", 105, 30, { align: "center" });

    doc.setDrawColor(214, 195, 165); // Champagne
    doc.line(20, 35, 190, 35);

    let yPos = 45;
    const colWidth = 85;
    let xPos = 20;

    tables.forEach((table, index) => {
      // Check if we need to start a new page
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }

      // Draw Table Name
      doc.setFont("helvetica", "bold");
      doc.setTextColor(primaryColor);
      doc.setFontSize(12);
      doc.text(table.name, xPos, yPos);
      yPos += 6;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      let seatedCount = 0;

      for (let i = 0; i < table.seats; i++) {
        const seatId = `${table.id}-${i}`;
        const guestId = assignments[seatId];
        if (guestId) {
          const guest = guests.find(g => g.id === guestId);
          if (guest) {
            doc.text(`- ${guest.name}`, xPos, yPos);
            yPos += 5;
            seatedCount++;
          }
        }
      }

      if (seatedCount === 0) {
        doc.setTextColor(secondaryColor);
        doc.setFont("helvetica", "italic");
        doc.text("No guests seated", xPos, yPos);
        doc.setFont("helvetica", "normal");
        yPos += 5;
      }

      yPos += 10; // Space between tables

      // Handle columns (2 columns layout)
      if (index % 2 === 0) {
        xPos = 110;
        yPos -= (seatedCount === 0 ? 21 : (seatedCount * 5) + 16); // Reset Y to top of this row
      } else {
        xPos = 20;
        // Keep Y position as it progressed down the highest column
      }
    });

    doc.save("wedding-seating-list.pdf");
  };

  return (
    <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4 z-10 relative">
      <div className="flex items-center gap-4">
        <h2 className="font-heading font-medium text-lg text-foreground hidden sm:block">Emma & James Wedding</h2>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="text-muted-foreground hidden md:inline-flex">Undo</Button>
        <Button variant="outline" size="sm" className="text-muted-foreground hidden md:inline-flex">Redo</Button>
        <div className="w-px h-6 bg-border mx-2 hidden md:block"></div>
        <Button variant="outline" size="sm" onClick={handleExportPDF} className="hidden sm:inline-flex border-primary text-primary-foreground">Export PDF</Button>
        <Button variant="default" size="sm" onClick={handleExportPNG} className="bg-foreground text-background hover:bg-foreground/90">Export Map</Button>
      </div>
    </div>
  );
}