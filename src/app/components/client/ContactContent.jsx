'use client'

import { motion } from 'framer-motion';

export default function ContactContent() {
  return (
    <>
      <div className="text-center mb-16">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-5">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium py-1 px-3 rounded-full">Contattaci</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
            Parliamo del tuo Progetto
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"></div>
        </motion.div>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hai un progetto in mente? Contattaci per un preventivo gratuito o vieni a trovarci in negozio.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 relative inline-block">
                Scrivici
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <form className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" 
                      placeholder="Il tuo nome"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" 
                      placeholder="La tua email"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" 
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Oggetto *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" 
                    placeholder="Oggetto del messaggio"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio *</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" 
                    placeholder="Il tuo messaggio"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    className="h-5 w-5  border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 rounded-lg"
                    required 
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    Acconsento al trattamento dei dati personali secondo la <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all w-full shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Invia Messaggio
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 relative inline-block">
                Informazioni di Contatto
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              
              <div className="space-y-8 mt-8 mb-10">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg mr-4 text-white transform transition-transform group-hover:scale-110 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Indirizzo</h4>
                    <p className="text-gray-600">Via Roma 123, 90100 Palermo (PA)</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg mr-4 text-white transform transition-transform group-hover:scale-110 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefono</h4>
                    <p className="text-gray-600">+39 091 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg mr-4 text-white transform transition-transform group-hover:scale-110 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@copyexpress.it</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg mr-4 text-white transform transition-transform group-hover:scale-110 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Orari di Apertura</h4>
                    <p className="text-gray-600">Lunedì - Venerdì: 9:00 - 19:00</p>
                    <p className="text-gray-600">Sabato: 9:00 - 13:00</p>
                    <p className="text-gray-600">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 relative inline-block">
                  Seguici sui Social
                  <span className="absolute -bottom-1 left-0 w-8 h-1 bg-blue-500 rounded-full"></span>
                </h4>
                <div className="flex space-x-4 mt-5">
                  <motion.a 
                    href="#" 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.995 6.903a.997.997 0 00-.55-.55c-.486-.176-2.432-.366-6.99-.366s-6.504.19-6.99.366a.997.997 0 00-.55.55C4.759 7.39 4.57 9.335 4.57 11.893s.189 4.503.366 4.99a.997.997 0 00.55.55c.485.176 2.431.367 6.989.367 4.557 0 6.504-.19 6.99-.366a.997.997 0 00.55-.55c.176-.488.366-2.434.366-4.991s-.19-4.504-.366-4.99zM9.602 14.8V8.986l5.755 2.908-5.755 2.906z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-white z-10 pointer-events-none rounded-2xl"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50670.3844006789!2d13.30690995!3d38.1300782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e8c9814ed099%3A0xa0b042c233bd880!2sPalermo%2C%20Province%20of%20Palermo%2C%20Italy!5e0!3m2!1sen!2sus!4v1620123456789!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
} 