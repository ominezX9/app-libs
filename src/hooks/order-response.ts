type Ticket = {
    ticketId: string;
    qrCode: string; // URL to QR code image
};

type TicketType = {
    name: string; // e.g., "Regular", "VIP"
    tickets: Ticket[];
};

export type OrderDetails = {
    eventTitle: string;
    buyerName: string;
    eventStartDate: string; // ISO or formatted date string
    eventStartTime: string; // e.g., "7:00 PM"
    venue: string;
    ticketTypes: TicketType[];
};


export const orderDetails = {
    eventTitle: "App Launch Party",
    buyerName: "Jane Doe",
    eventStartDate: "2025-04-20",
    eventStartTime: "7:00 PM",
    venue: "Lagos City Hall",
    ticketTypes: [
        {
            name: "Regular",
            tickets: [
                {
                    ticketId: "REG12345",
                    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=REG12345"
                },
                {
                    ticketId: "REG12346",
                    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=REG12346"
                }
            ]
        },
        {
            name: "VIP",
            tickets: [
                {
                    ticketId: "VIP67890",
                    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=VIP67890"
                }
            ]
        }
    ]
};

export const mockOrderDetails: OrderDetails = {
    eventTitle: 'App Launch Party',
    eventStartDate: '2025-04-25',
    eventStartTime: '7:00 PM',
    buyerName: 'Jane Doe',
    venue: 'City Arena',
    ticketTypes: [
        {
            name: 'VIP',
            tickets: [
                { ticketId: 'ABC123', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=ABC123' },
                { ticketId: 'DEF456', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=DEF456' },
            ],
        },
        {
            name: 'General',
            tickets: [
                { ticketId: 'GHI789', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?data=GHI789' },
            ],
        },
    ],
};
