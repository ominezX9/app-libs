// filepath: c:\Users\david.agu\Downloads\React Reff\htmltopdf\src\types\pdfkit-html-simple.d.ts
declare module '@shipper/pdfkit-html-simple' {
    export function htmlToPDF(
        html: string,
        doc: any,
        options?: {
            prepareHeader?: () => void;
            prepareFooter?: () => void;
        }
    ): void;
}

declare module 'html2pdf.js' {
    const html2pdf: any;
    export default html2pdf;
}