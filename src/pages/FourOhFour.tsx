export default function FourOhFour() {
    return (
        // create a stylish 404 page with a message and a button to go back home
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page Not Found</p>
            <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go Home</a>
            <p className="text-sm mt-4">If you think this is a mistake, please contact support.</p>
            <p className="text-sm">Or check our <a href="/apps" className="text-blue-500 hover:underline">Apps</a> page for more options.</p>
        </div>
    )
}
