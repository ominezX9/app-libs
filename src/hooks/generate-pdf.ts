import { jsPDF } from "jspdf";
// import domtoimage from "dom-to-image";
import domtoimage from 'dom-to-image-more';
import QRCode from 'qrcode';


// Helper to convert image blob to Data URL
// const convertImageToDataURL = (blob: Blob): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = reject;
//     reader.readAsDataURL(blob);
//   });
// };

// Helper to create a ticket element styled with HTML/CSS
const createTicketElement = (orderDetails: any, ticketType: any, ticket: any, qrCodeDataUrl: any): HTMLElement => {
  const container = document.createElement("div");

  // container.innerHTML = `
	// 	<div style="
	// 		width: 350px;
	// 		height: 500px;
	// 		padding: 20px;
	// 		font-family: sans-serif;
	// 		display: flex;
	// 		flex-direction: column;
	// 	">
	// 		<div>
	// 			<h2 style="text-align:center;">🎫 ${orderDetails.eventTitle}</h2>
	// 			<p><strong>Ticket ID:</strong> ${ticket.ticketId}</p>
	// 			<p><strong>Buyer:</strong> ${orderDetails.buyerName}</p>
	// 			<p><strong>Date:</strong> ${orderDetails.eventStartDate}</p>
	// 			<p><strong>Time:</strong> ${orderDetails.eventStartTime}</p>
	// 			<p><strong>Venue:</strong> ${orderDetails.venue}</p>
	// 			<p><strong>Ticket Type:</strong> ${ticketType.name}</p>
	// 		</div>
	// 		<div style="text-align:center;">
	// 			<img src="${qrCodeDataUrl}" style="width:150px; height:150px;" />
	// 			<p style="font-size: 0.8em;">Scan for entry</p>
	// 		</div>
	// 	</div>
	// `;

  const ticketHtml = `
<div
  style="position: relative; width: 350px; height: 700px; padding: 20px; background-color: #d97706;"
  id="ticket"
>
  <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
    <h2 style="text-align: center; font-size: 0.875rem; font-weight: bold;">
      ${orderDetails.eventTitle}
    </h2>
    <code style="text-align: center; font-size: 0.875rem;">
      Ticket #${ticket.ticketId}
    </code>
  </div>

  <div style="width: 100%; padding: 1rem; background-color: white; border-radius: 0.5rem; overflow: hidden;">
    <img style="width: 100%;" src="${qrCodeDataUrl}" alt="" />
  </div>

  <div style="font-size: 1.25rem; font-weight: bold; margin-top: 1rem; margin-bottom: 1rem;">
    ${orderDetails.venue}
  </div>

  <div>
    <div style="display: flex; flex-direction: row; justify-content: space-between; background-color: white; border-radius: 0.5rem; padding: 0.75rem 1rem;">
      <p style="font-size: 0.75rem; display: flex; flex-direction: column; gap: 0.5px; flex-basis: 50%;">
        Ticket Type:
        <strong style="font-size: 1rem;">${ticketType.name}</strong>
      </p>
      <p style="font-size: 0.75rem; display: flex; flex-direction: column; gap: 0.5px; flex-basis: 50%;">
        Buyer:
        <strong style="font-size: 1rem;">${orderDetails.buyerName}</strong>
      </p>
    </div>

    <div style="display: flex; flex-direction: row; justify-content: space-between; background-color: white; border-radius: 0.5rem; padding: 0.75rem 1rem; margin-top: 0.5rem;">
      <p style="font-size: 0.75rem; display: flex; flex-direction: column; gap: 0.5px; flex-basis: 50%;">
        Date:
        <strong style="font-size: 1rem;">${orderDetails.eventStartDate}</strong>
      </p>
      <p style="font-size: 0.75rem; display: flex; flex-direction: column; gap: 0.5px; flex-basis: 50%;">
        Time:
        <strong style="font-size: 1rem;">${orderDetails.eventStartTime}</strong>
      </p>
    </div>

    <div style="display: flex; flex-direction: row; padding: 0.75rem; justify-content: space-between; align-items: center; background-color: black; position: absolute; bottom: 0; left: 0; right: 0;">
      <div style="display: flex;">
        <p style="font-size: 0.75rem; color: #d97706; display: flex; flex-direction: column; gap: 1px;">
          Powered by:
          <strong style="font-size: 1rem; margin-top: -0.25rem;">KyloEngine</strong>
        </p>
      </div>
      <div style="display: flex;">
        <p style="font-size: 0.75rem; color: #d97706;">2025</p>
      </div>
    </div>
  </div>
</div>
`;


  container.innerHTML = ticketHtml;

  document.body.appendChild(container); // Needed for rendering
  return container.children[0] as HTMLElement;
};

// Main function
export const generatePDF = async (orderDetails: any, isForEmail = false) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [350, 700],
  });

  let pageIndex = 0;

  for (const ticketType of orderDetails.ticketTypes) {
    for (const ticket of ticketType.tickets) {
      // Get QR code as data URL
      // const qrCodeBlob = await fetch(ticket.qrCode).then(res => res.blob());
      // const qrCodeDataUrl = await convertImageToDataURL(qrCodeBlob);
      const qrCodeUrl = ticket.qrCode; // Assuming it's already a data URL
      const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl);
      console.log(qrCodeDataUrl, "qrCodeDataUrl")

      // Build styled HTML ticket
      const ticketElement = await createTicketElement(orderDetails, ticketType, ticket, qrCodeDataUrl);

      // Convert to image
      const dataUrl = await domtoimage.toPng(ticketElement, {
        width: 350 * 2,       // Double the resolution
        height: 700 * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
        },
      });

      // Add to PDF
      if (pageIndex > 0) doc.addPage();
      doc.addImage(dataUrl, 'PNG', 0, 0, 350, 700);
      pageIndex++;

      // Cleanup
      ticketElement.parentElement?.remove();
    }
  }

  if (isForEmail) {
    return doc.output("blob");
  } else {
    doc.save(`${orderDetails.eventTitle}-tickets.pdf`);
  }
};