import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Clarence Tan</h3>
            <p className="text-gray-400 mb-4">
              Keynote Speaker, Futurist, and Thought Leader
            </p>
            <p className="text-gray-400 mb-6">
              Empowering people and institutions to solve grand challenges through
              exponential technology and transformative mindsets.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/drctan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/drctan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/drctan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('keynotes')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Keynotes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('press')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </button>
              </li>
              <li>
                <a
                  href="https://drctan.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('keynotes')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Speaking Topics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Dr. Clarence Tan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
