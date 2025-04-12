import React from 'react'
import InfoBox from '@/components/shared/info-box';
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/hooks/generate-pdf';
import { orderDetails, mockOrderDetails } from '@/hooks/order-response';
import { downloadTicketPDF } from '@/lib/utils/pdf-tools/pdf-generator';
import { generatePDF_JSPDF } from '@/hooks/generate-pdf-jsPdf';

export default function GeneratePdf() {
    return (
        <div>
            <InfoBox
                header="Generate PDF"
                description="Page to test pdf"
            />
            <div className="flex flex-row flex-wrap gap-2">
                <div className="flex flex-col basis-[48%]  items-center justify-center mt-4 bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-4xl font-extrabold">Save PDF</h1>
                    <code className="text-xs p-1 px-3 my-2 bg-gray-300 rounded-sm">
                        generatePDF(orderDetails)
                    </code>
                    <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => { generatePDF(mockOrderDetails) }}
                    >Generate PDF</Button>
                    <p className="text-xs mt-2">Click the button to generate a PDF</p>
                </div>
                <div className="flex flex-col basis-[48%] items-center justify-center mt-4 bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-4xl font-extrabold">Save PDF</h1>
                    <code className="text-xs p-1 px-3 my-2 bg-gray-300 rounded-sm">
                        downloadTicketPDF(orderDetails)
                    </code>
                    <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => { downloadTicketPDF() }}
                    >Generate PDF</Button>
                    <p className="text-xs mt-2">Click the button to generate a PDF</p>
                </div>
                <div className="flex flex-col basis-[48%] items-center justify-center mt-4 bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-4xl font-extrabold">Save PDF</h1>
                    <code className="text-xs p-1 px-3 my-2 bg-gray-300 rounded-sm">
                        generatePDF_JSPDF(orderDetails)
                    </code>
                    <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => { generatePDF_JSPDF(orderDetails) }}
                    >Generate PDF</Button>
                    <p className="text-xs mt-2">Click the button to generate a PDF</p>
                </div>
            </div>


        </div>
    )
}
