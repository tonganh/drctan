import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoShowcaseProps {
  onNavigate?: (page: string) => void;
}

const videos = [
  {
    id: '2aNF-zhWrI4',
    title: 'Creating a Better World with Exponential Mindsets',
    label: null,
    featured: true,
  },
  {
    id: '_a175DEtW6M',
    title: 'Impacting a Billion People with Exponential Technology',
    label: 'TEDxYouth@KL',
    featured: false,
  },
  {
    id: 'WV-uT_r7EKw',
    title: 'The Exponential Growth of Technological Disruption',
    label: 'Keynote',
    featured: false,
  },
];

export default function VideoShowcase({ onNavigate }: VideoShowcaseProps) {
  const [playing, setPlaying] = useState<string | null>(null);

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const featured = videos[0];
  const side = videos.slice(1);

  return (
    <div id="video-showcase" className="bg-gray-50 py-16 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Clarence in Action
          </h2>
          <p className="text-xl text-gray-600">
            Experience the energy and impact of a transformative keynote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Featured video */}
          <div className="lg:col-span-2">
            <div className="group rounded-2xl overflow-hidden bg-navy-800 shadow-xl">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${featured.id}?autoplay=1`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-white font-medium text-sm leading-snug">{featured.title}</p>
              </div>
            </div>
          </div>

          {/* Side videos */}
          <div className="flex flex-col gap-5">
            {side.map((video) => (
              <div key={video.id} className="group rounded-2xl overflow-hidden bg-navy-800 shadow-xl">
                <div
                  className="relative cursor-pointer overflow-hidden aspect-video"
                  onClick={() => setPlaying(video.id)}
                >
                  {playing === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy-950/55 group-hover:bg-navy-950/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-400 group-hover:scale-110 transition-all duration-300 shadow-xl">
                          <Play className="text-white ml-1" size={20} fill="white" />
                        </div>
                      </div>
                      {video.label && (
                        <div className="absolute top-4 left-4">
                          <span className="text-[11px] font-semibold uppercase tracking-widest bg-accent-500/80 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                            {video.label}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="px-5 py-4">
                  <p className="text-white font-medium text-sm leading-snug">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to bring this level of impact to your next event?
          </p>
          <button
            onClick={handleNavigate}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Clarence for Your Event
          </button>
        </div>
      </div>
    </div>
  );
}
