export default function Scholarship() {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-6">Scholarship Opportunities</h2>
            <div className="space-y-4">
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium">National Merit Scholarship</h3>
                    <p className="text-gray-600 mt-2">Eligibility: 12th Grade Students</p>
                    <p className="text-gray-600">Amount: ₹50,000</p>
                    <p className="text-gray-600">Deadline: 15th December 2023</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium">STEM Excellence Scholarship</h3>
                    <p className="text-gray-600 mt-2">Eligibility: Engineering Students</p>
                    <p className="text-gray-600">Amount: ₹1,00,000</p>
                    <p className="text-gray-600">Deadline: 30th November 2023</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium">Women in Technology Scholarship</h3>
                    <p className="text-gray-600 mt-2">Eligibility: Female Students in STEM</p>
                    <p className="text-gray-600">Amount: ₹75,000</p>
                    <p className="text-gray-600">Deadline: 10th January 2024</p>
                </div>
            </div>
        </div>
    );
}