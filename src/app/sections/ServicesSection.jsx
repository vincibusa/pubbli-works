import ServicesContent from '../components/client/ServicesContent';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ServicesContent />
      </div>
    </section>
  );
}
