import { Palette, Server, Wrench } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Designing',
    description: 'We create custom, visually appealing, and user-friendly websites tailored to your brand identity.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Web Hosting',
    description: 'Get reliable and secure web hosting to ensure your website is always fast, stable, and online.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Wrench,
    title: 'After-Services & Updates',
    description: 'We provide dedicated support and regular updates to keep your website fresh, secure, and performing optimally.',
    color: 'from-teal-500 to-emerald-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions designed to elevate your online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
