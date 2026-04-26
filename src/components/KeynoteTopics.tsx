import { Briefcase, TrendingUp, Zap, Target } from 'lucide-react';

interface KeynoteTopicsProps {
  isFullPage?: boolean;
  onNavigate?: (page: string) => void;
}

export default function KeynoteTopics({ isFullPage = false, onNavigate }: KeynoteTopicsProps) {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const topics = [
    {
      icon: Target,
      title: 'Entrepreneurship',
      description: 'Shaping the leaders and innovators of tomorrow',
      details:
        'Inspire your audience to think like entrepreneurs, embrace risk-taking, and develop the mindset needed to create breakthrough innovations in any field.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Business Transformation',
      description: 'Empower your people to adopt change for transformative results',
      details:
        'Navigate the complexities of organizational change with proven strategies that help teams embrace transformation and achieve sustainable competitive advantages.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: TrendingUp,
      title: 'Exponential Organizations',
      description: 'Certified ExO Consultant using Salim Ismail\'s methodology',
      details:
        'Learn how to leverage exponential technologies and organizational structures to scale your impact 10x faster than traditional competitors using the proven ExO framework.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Disruptive Innovation',
      description: 'Innovate or die – why complacency is the enemy',
      details:
        'Understand the patterns of disruption, identify opportunities for breakthrough innovation, and build a culture that thrives on continuous reinvention.',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div id="keynote-topics" className={`bg-gray-50 ${isFullPage ? 'py-20' : 'py-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Keynote Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipping people to solve grand challenges with relevant, powerful, and transformative keynotes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${topic.color} flex-shrink-0`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{topic.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleNavigate}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Request More Information
          </button>
        </div>
      </div>
    </div>
  );
}
