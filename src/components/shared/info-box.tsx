import React from 'react'

export default function InfoBox(
    {
        header,
        description
    }:
        {
            header: string,
            description: string,

        }
) {
    return (
        <div className="bg-white shadow-lg p-5 pl-3 rounded-sm text-gray-800">
            <h1 className="text-4xl font-extrabold mb-1">
                {header}
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}
