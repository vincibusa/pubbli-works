import AboutContent from '../components/client/AboutContent';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Blob decorativo in alto a destra */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-60 filter blur-3xl -mr-20 -mt-20"></div>
      
      {/* Blob decorativo in basso a sinistra */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-60 filter blur-3xl -ml-20 -mb-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AboutContent />
      </div>
    </section>
  );
}
