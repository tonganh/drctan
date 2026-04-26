import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import About from './components/About';
import KeynoteTopics from './components/KeynoteTopics';
import Testimonials from './components/Testimonials';
import VideoShowcase from './components/VideoShowcase';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <Hero onNavigate={setCurrentPage} />
          <BrandLogos />
          <About />
          <KeynoteTopics onNavigate={setCurrentPage} />
          <Testimonials />
          <VideoShowcase onNavigate={setCurrentPage} />
        </>
      )}

      {currentPage === 'about' && <About isFullPage />}
      {currentPage === 'keynotes' && <KeynoteTopics isFullPage />}
      {currentPage === 'press' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Press</h1>
          <p className="text-lg text-gray-600">Press information and media kit coming soon.</p>
        </div>
      )}
      {currentPage === 'blog' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-lg text-gray-600">Visit <a href="https://drctan.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dr. Clarence Tan's WordPress blog</a> for articles and insights.</p>
        </div>
      )}
      {currentPage === 'contact' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">Interested in having Dr. Clarence Tan speak at your event? Let's connect!</p>
              <div className="space-y-4">
                <a href="https://www.facebook.com/drctan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">Facebook</a>
                <a href="https://twitter.com/drctan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
