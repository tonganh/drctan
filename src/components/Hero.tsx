import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://drctan.com/wp-content/uploads/2021/12/Clarence-hero-b-roll.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Exponential technology & mindset
            <br />
            <span className="text-white">for a better world</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Relevant topics. Powerful insights. Transformative ideas.
            <br />
            High-impact, memorable keynotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('keynote-topics')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              View Keynote Topics
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('video-showcase')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md border-2 border-blue-600 flex items-center gap-2"
            >
              See Clarence in Action
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-colors flex items-center gap-2"
            >
              Connect
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
