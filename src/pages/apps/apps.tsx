import React from 'react'
import { apps } from './link-libs'
import { File } from 'lucide-react'

export default function Apps() {
    return (
        // create a stylish Apps page listing the other apps available in the app
        <div className="flex flex-col items-start h-screen text-gray-800">
            <div className="py-2 mb-2">
                <h1 className="text-4xl font-bold">Apps</h1>
                <p className="text-lg mb-4">Available Apps</p>
            </div>
            <div>
                <ul className="list-none">
                    <li>
                        {
                            apps.map((items, i) => (
                                <a key={i} href={`/apps/${items}`} className="capitalize rounded-xs pl-1  text-sm hover:bg-blue-500 hover:text-white px-3 py-1 mb-1 flex flex-row items-center gap-1 text-blue-500  max-w-[250px]">
                                    <File size="16" />
                                    <span>
                                        {items?.toString().replaceAll("-", " ")}
                                    </span>
                                </a>
                            ))
                        }
                    </li>
                    {/* Add more apps here */}
                </ul>
            </div>


        </div>
    )
}
