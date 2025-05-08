export default function Colleges() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* College Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Harvard University</h3>
                    <p className="text-gray-600 mb-2">Cambridge, Massachusetts</p>
                    <p className="text-sm text-gray-500">Founded: 1636</p>
                    <p className="text-sm text-gray-500">Rank: #1</p>
                </div>

                {/* College Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Stanford University</h3>
                    <p className="text-gray-600 mb-2">Stanford, California</p>
                    <p className="text-sm text-gray-500">Founded: 1885</p>
                    <p className="text-sm text-gray-500">Rank: #2</p>
                </div>

                {/* College Card 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">MIT</h3>
                    <p className="text-gray-600 mb-2">Cambridge, Massachusetts</p>
                    <p className="text-sm text-gray-500">Founded: 1861</p>
                    <p className="text-sm text-gray-500">Rank: #3</p>
                </div>
            </div>
        </div>
    );
}