import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import QRCode from 'qrcode';

const generateTicketHTML = async (qrDataURL:string) => {
    const ticketHTML = `
    <div id="ticket" style="
      width: 350px;
      height: 500px;
      padding: 20px;
      background: #fff;
      border: 2px solid #000;
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    ">
      <div>
        <h2 style="text-align:center;">🎫 Event Ticket</h2>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Event:</strong> Code Summit 2025</p>
        <p><strong>Date:</strong> April 30, 2025</p>
        <p><strong>Location:</strong> Tech Arena</p>
      </div>
      <div style="text-align:center;">
        <img src="${qrDataURL}" style="width:150px; height:150px;" />
        <p style="font-size: 0.8em;">Scan this QR for entry</p>
      </div>
    </div>
  `;
    const container = document.createElement('div');
    container.innerHTML = ticketHTML;
    document.body.appendChild(container);
    return container.querySelector('#ticket');
};

export const downloadTicketPDF = async () => {
    const qrData = 'https://event.com/entry/XYZ789';
    const qrDataURL = await QRCode.toDataURL(qrData);
    const ticketElement = await generateTicketHTML(qrDataURL);

    // Use dom-to-image instead of html2canvas
    if (!ticketElement) {
        throw new Error('Failed to generate ticket element.');
    }
    const dataUrl = await domtoimage.toPng(ticketElement);

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [350, 500],
    });

    pdf.addImage(dataUrl, 'PNG', 0, 0, 350, 500);
    pdf.save('ticket.pdf');

    // Clean up
    ticketElement?.parentElement?.remove();
};


