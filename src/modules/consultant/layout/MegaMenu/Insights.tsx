
import Story1 from '@/assets/MegaMenu/Story1.png';
import Story2 from '@/assets/MegaMenu/Story2.png';
import Story3 from '@/assets/MegaMenu/Story3.png';
import Story4 from '@/assets/MegaMenu/Story4.png';
import Insight1 from '@/assets/MegaMenu/Insight1.png';
import Insight2 from '@/assets/MegaMenu/Insight2.png';
import Insight3 from '@/assets/MegaMenu/Insight3.png';

const Insights = () => {
  const stories = [
    { image: Story1, title: 'Success Stories', path: '/stories/success' },
    { image: Story2, title: 'Meet-up Stories', path: '/stories/meet-up' },
    { image: Story3, title: 'AIM Stories', path: '/stories/aim' },
    { image: Story4, title: 'Career Stories', path: '/stories/career' },
  ];

  const insights = [
    {
      image: Insight1, 
      title: 'Are you Choosing Streams That Matches your Strengths?',
      path: '/survey/stream-match'
    },
    {
      image: Insight2,
      title: 'Passion Vs. Practicality: What\'s Driving Your Career Choice?',
      path: '/survey/passion-vs-practical'
    },
    {
      image: Insight3,
      title: 'The Future Of Work: Are You Ready?',
      path: '/survey/future-ready'
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 absolute w-[1200px] left-1/2 -translate-x-1/2 z-50">
      <div className="grid grid-cols-12 gap-6">
        {/* Stories Section - 4 columns */}
        <div className="col-span-4">
          <h3 className="text-[#94278F] text-2xl font-medium mb-6 flex items-center justify-between">
            Stories
            <a href="/stories" className="text-[14px] text-[#94278F] hover:underline">View All</a>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {stories.map((story, index) => (
              <a 
                key={index} 
                href={story.path}
                className="group relative overflow-hidden rounded-lg hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <h4 className="absolute bottom-3 left-3 text-white text-sm font-medium">
                  {story.title}
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* Trending Careers Section - 4 columns */}
        <div className="col-span-4">
          <h3 className="text-[#94278F] text-2xl font-medium mb-6">Trending Careers</h3>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="bg-[#94278F] text-white px-2 py-1 rounded group-hover:bg-[#94278F]/90">1</span>
              <span className="text-gray-700 group-hover:text-[#94278F]">Artificial Intelligence Engineer</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="bg-[#94278F] text-white px-2 py-1 rounded group-hover:bg-[#94278F]/90">2</span>
              <span className="text-gray-700 group-hover:text-[#94278F]">Machine Learning Engineer</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="bg-[#94278F] text-white px-2 py-1 rounded group-hover:bg-[#94278F]/90">3</span>
              <span className="text-gray-700 group-hover:text-[#94278F]">Cybersecurity Analyst</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="bg-[#94278F] text-white px-2 py-1 rounded group-hover:bg-[#94278F]/90">4</span>
              <span className="text-gray-700 group-hover:text-[#94278F]">Data Scientist</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="bg-[#94278F] text-white px-2 py-1 rounded group-hover:bg-[#94278F]/90">5</span>
              <span className="text-gray-700 group-hover:text-[#94278F]">Product Manager</span>
            </div>
          </div>
        </div>

        {/* New Research Survey Section - 4 columns */}
        <div className="col-span-4">
          <h3 className="text-[#94278F] text-2xl font-medium mb-6 flex items-center justify-between">
            New Research Survey
            <a href="/research" className="text-[14px] text-[#94278F] hover:underline">View All</a>
          </h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <a 
                key={index}
                href={insight.path}
                className="flex items-center gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-12 h-12 rounded object-cover flex-shrink-0"
                />
                <p className="text-gray-700 text-sm group-hover:text-[#94278F] line-clamp-2">
                  {insight.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
