import { jsPDF } from "jspdf";
import QRCode from "qrcode";

export const generatePDF_JSPDF = async (orderDetails: any, isForEmail = false) => {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [350, 700],
    });

    let pageIndex = 0;

    for (const ticketType of orderDetails.ticketTypes) {
        for (const ticket of ticketType.tickets) {
            const qrCodeUrl = ticket.qrCode;
            const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl);

            if (pageIndex > 0) doc.addPage();

            // Background
            doc.setFillColor("#d97706"); // amber-600
            doc.rect(0, 0, 350, 700, "F");

            // Header Texts
            doc.setTextColor(0);
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(orderDetails.eventTitle, 20, 30);

            doc.setFont("courier", "normal");
            doc.text(`Ticket #${ticket.ticketId}`, 330, 30, { align: "right" });

            // QR Code Box
            doc.setFillColor("#ffffff");
            doc.roundedRect(20, 50, 310, 320, 10, 10, "F");
            doc.addImage(qrCodeDataUrl, "PNG", 25, 55, 300, 310);

            // Venue
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(0);
            doc.text("Venue: " + orderDetails.venue, 20, 390);

            // Ticket Details
            const labelFont = () => {
                doc.setFontSize(10);
                doc.setFont("helvetica", "normal");
            };
            const valueFont = () => {
                doc.setFontSize(13);
                doc.setFont("helvetica", "bold");
            };

            const renderInfoBox = (y: number, label1: string, value1: string, label2: string, value2: string) => {
                doc.setFillColor("#ffffff");
                doc.roundedRect(20, y, 310, 60, 8, 8, "F");

                labelFont();
                doc.setTextColor(80);
                doc.text(label1, 30, y + 18);
                doc.text(label2, 185, y + 18);

                valueFont();
                doc.setTextColor(0);
                doc.text(value1, 30, y + 38);
                doc.text(value2, 185, y + 38);
            };

            renderInfoBox(400, "Ticket Type:", ticketType.name, "Buyer:", orderDetails.buyerName);
            renderInfoBox(480, "Date:", orderDetails.eventStartDate, "Time:", orderDetails.eventStartTime);

            // Footer
            doc.setFillColor("#000000");
            doc.rect(0, 670, 350, 30, "F");

            doc.setTextColor("#d97706");
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("Powered by:", 20, 685);
            doc.setFont("helvetica", "bold");
            doc.text("KyloEngine", 65, 685);
            doc.setFont("helvetica", "normal");
            doc.text("2025", 300, 685, { align: "right" });

            pageIndex++;
        }
    }

    if (isForEmail) {
        return doc.output("blob");
    } else {
        doc.save(`${orderDetails.eventTitle}-tickets.pdf`);
    }
};
