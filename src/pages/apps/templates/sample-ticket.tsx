import React from 'react'

import { mockOrderDetails } from '@/hooks/order-response'
import InfoBox from '@/components/shared/info-box'

export default function
    SampleTicket() {

    return (
        <div className=''>
            <InfoBox
                header="Sample Ticket"
                description="Sample ticket templates"
            />
            <div className="">
                <code >
                    <pre className='text-xs p-1 px-3 my-2 bg-gray-900 text-green-400 rounded-sm'>
                        /* sample response */
                        <br />
                        {JSON.stringify(mockOrderDetails, null, 2)}
                    </pre>
                </code>
            </div>
            <div className="flex mt-4 flex-wrap gap-x-40">
                <div className="basis-1/2 bg-white shadow-md p-2">
                    {/*  Ticket One */}
                    <div className="relative ticket w-[350px] h-[700px] p-[20px] bg-amber-600" id="ticket">
                        <div className="flex flex-row justify-between items-center mb-4">
                            <h2 className="text-center text-sm font-bold">{mockOrderDetails.eventTitle}</h2>
                            <code className="text-center text-sm">Ticket #{mockOrderDetails.ticketTypes[0].tickets[0].ticketId}</code>
                        </div>
                        <div className="w-full p-4 bg-white rounded-lg overflow-hidden">
                            <img className="w-full" src={mockOrderDetails.ticketTypes[0].tickets[0].qrCode} alt="" />
                        </div>
                        <div className='text-xl font-bold my-4'>
                            {mockOrderDetails.venue}
                        </div>

                        <div>

                            <div className="flex flex-row justify-between bg-white rounded-lg py-3 px-4">
                                <p className="text-xs flex flex-col gap-[0.5px] basis-1/2">
                                    Ticket Type:
                                    <strong className="text-base">{mockOrderDetails.ticketTypes[0].name}</strong>
                                </p>
                                <p className="text-xs flex flex-col gap-[0.5px] basis-1/2">
                                    Buyer:
                                    <strong className="text-base">{mockOrderDetails.buyerName}</strong>
                                </p>

                            </div>

                            <div className="flex flex-row justify-between bg-white rounded-lg py-3 px-4 mt-2">
                                <p className="text-xs flex flex-col gap-[0.5px]  basis-1/2">
                                    Date:
                                    <strong className="text-base">{mockOrderDetails.eventStartDate}</strong>
                                </p>
                                <p className="text-xs flex flex-col gap-[0.5px] basis-1/2">
                                    Time:
                                    <strong className="text-base">{mockOrderDetails.eventStartTime}</strong>
                                </p>
                            </div>

                            <div className="footer flex flex-row p-3 justify-between items-center bg-black absolute bottom-0 left-0 right-0">
                                <div className="flex">
                                    <p className="text-xs text-amber-600 flex flex-col gap-[1px]">
                                        Powered by:
                                        <strong className="text-base -mt-1">KyloEngine</strong>
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="text-xs text-amber-600">
                                        2025
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="basis-1/2 bg-white shadow-md p-2">
                </div>
            </div>
        </div>
    )
}
