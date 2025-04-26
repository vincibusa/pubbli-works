import ContactContent from '../components/client/ContactContent';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ContactContent />
      </div>
    </section>
  );
}
