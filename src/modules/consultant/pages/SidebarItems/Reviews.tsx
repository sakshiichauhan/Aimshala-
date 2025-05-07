import { StarIcon } from '@heroicons/react/solid';

// Types
type RatingSummaryItem = {
    stars: number;
    percent: number;
};

type Review = {
    id: number;
    author: string;
    avatarUrl: string;
    rating: number;
    date: string;
    text: string;
};

// Dummy data
const summaryData: RatingSummaryItem[] = [
    { stars: 5, percent: 38 },
    { stars: 4, percent: 24 },
    { stars: 3, percent: 45 },
    { stars: 2, percent: 65 },
    { stars: 1, percent: 28 },
];

const reviews: Review[] = [
    {
        id: 1,
        author: 'Somia Adeel',
        avatarUrl: 'https://i.pravatar.cc/40?img=1',
        rating: 4.5,
        date: '18 Jul 24, 05:07 PM IST',
        text:
            'The best time to post on Dribbble and Behance can vary based on your specific audience and their online habits. However, in general',
    },
    // Add more reviews as needed
];

export default function Reviews() {
    // Calculate average rating
    const averageRating = 4.0;
    const totalReviews = 5;

    return (
        <div className='mt-20 font-poppins'>
            <div className="flex bg-white rounded-lg shadow p-6 space-x-6">
                {/* Left: Summary */}
                <div className="w-1/3">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="text-6xl font-semibold">{averageRating.toFixed(1)}</h2>
                        <div className="flex items-center mt-2">
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                            <span className="ml-1 text-lg">Rating</span>
                        </div>
                        <p className="text-gray-500 mt-1">{totalReviews} Total Reviews</p>

                    </div>
                    <div className="mt-4 space-y-1">
                        {summaryData.map((item) => (
                            <div key={item.stars} className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">{item.stars} <StarIcon className="inline h-4 w-4 text-yellow-400" /></span>
                                <div className="flex-1 bg-gray-200 h-2 rounded overflow-hidden">
                                    <div
                                        className="h-2 rounded bg-[#94278F]"
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium text-[#94278F]">{item.percent}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Reviews */}
                <div className="flex-1 space-y-4">
                    {/* Review card */}
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

function ReviewCard() {
    return (
        <div className='bg-white'>
            {reviews.map((rev) => (
                <div
                    key={rev.id}
                    className="border rounded-lg p-4 space-y-2"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img
                                src={rev.avatarUrl}
                                alt={rev.author}
                                className="h-10 w-10 rounded-full"
                            />
                            <div>
                                <div className="flex items-center space-x-1">
                                    <span className="font-medium text-gray-900">{rev.author}</span>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <StarIcon
                                                key={i}
                                                className={
                                                    `h-4 w-4 ${i <= Math.floor(rev.rating) ? 'text-yellow-400' : 'text-gray-300'}`
                                                }
                                            />
                                        ))}
                                        {rev.rating % 1 !== 0 && (
                                            <StarIcon className="h-4 w-4 text-yellow-400 text-opacity-50" />
                                        )}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">{rev.date}</p>
                            </div>
                        </div>

                    </div>

                    <p className="text-gray-700 text-sm">{rev.text}</p>

                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Add a Reply..."
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button className="bg-[#94278F] text-white px-4 py-2 rounded-[8px]">Reply</button>
                    </div>
                </div>
            ))}
        </div>
    );
}