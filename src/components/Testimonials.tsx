import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Vishal Rama',
      title: 'Industry Leader',
      text: 'Clarence has a unique ability to use humour, knowledge and interact with the audience in a way that is second to none. His presentations are not just informative but truly transformative.',
      rating: 5,
    },
    {
      name: 'Francisco Palao Reinés',
      title: 'Innovation Expert',
      text: 'Clarence is a source of inspiration. He has such a special energy that captivates audiences and drives them to think differently about the future.',
      rating: 5,
    },
    {
      name: 'Conference Organizer',
      title: 'TEDx Event',
      text: 'One of the most engaging speakers we\'ve had the pleasure to work with. The feedback from attendees was overwhelmingly positive, with many citing his talk as the highlight of the event.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leaders and organizations worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote
                className="absolute top-4 right-4 text-blue-200"
                size={40}
              />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-blue-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
