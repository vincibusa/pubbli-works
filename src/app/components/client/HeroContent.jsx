'use client'

import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          La tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Copisteria</span> di fiducia a Palermo
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Stampe di alta qualità, rilegature professionali e servizi personalizzati per privati, studenti e aziende.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-6 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scopri i Servizi
          </motion.a>
          
          <motion.a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contattaci
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative">
          <motion.div
            className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Placeholder elegante per l'immagine */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-50 flex items-center justify-center p-8">
              <div className="text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-blue-600 mx-auto mb-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" 
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800">Servizi di Stampa Professionali</h3>
                <p className="text-gray-600 mt-2 max-w-md mx-auto">CopyExpress - Qualità e professionalità per ogni esigenza di stampa</p>
              </div>
            </div>
          </motion.div>
          
          {/* Elementi decorativi semplici */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-300 rounded-lg rotate-12 z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-300 rounded-lg -rotate-12 z-0"></div>
        </div>
      </motion.div>
    </div>
  );
} 