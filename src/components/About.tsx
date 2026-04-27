import { Globe, Users, Lightbulb, Rocket } from 'lucide-react';

interface AboutProps {
  isFullPage?: boolean;
}

export default function About({ isFullPage = false }: AboutProps) {
  return (
    <div className={`bg-white ${isFullPage ? 'py-20' : 'py-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dr. Clarence Tan
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Keynote Speaker, Futurist, Technologist, and Thought Leader
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Clarence Tan's mission is to{' '}
              <span className="font-semibold text-blue-600">
                empower and equip people and institutions to solve the grand challenges
                facing the world today
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With extensive international speaking experience, Clarence has presented for
              prestigious organizations including the United Nations, World Bank, South
              Korean government, and numerous TEDx events across the globe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              His unique approach combines cutting-edge technological insights with
              practical strategies for transformation, delivering keynotes that inspire
              action and drive meaningful change.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
            <img
              src="https://allphd-griffith-aus.s3.ap-southeast-2.amazonaws.com/standard/d0555daa-72b2-4e64-a0dd-8bcffb0f7ce4.png"
              alt="Dr. Clarence Tan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
            <Globe className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
            <p className="text-gray-600">
              Speaking engagements spanning continents, reaching thousands of leaders
              and changemakers worldwide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
            <Lightbulb className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Thinking</h3>
            <p className="text-gray-600">
              Bridging exponential technologies with practical business applications
              and societal transformation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
            <Rocket className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Action-Oriented</h3>
            <p className="text-gray-600">
              Every keynote is designed to inspire immediate action and lasting
              organizational change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
