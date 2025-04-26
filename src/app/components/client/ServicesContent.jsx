'use client'

import { motion } from 'framer-motion';

export default function ServicesContent() {
  const services = [
    {
      title: "Stampa Piccolo Formato",
      description: "Stampe a colori e bianco e nero in diversi formati e grammature per documenti, tesi, opuscoli e molto altro.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      features: [
        "Stampe b/n e colori",
        "Diversi formati disponibili",
        "Carta di alta qualità",
        "Consegna rapida"
      ],
      color: "blue"
    },
    {
      title: "Stampa Grande Formato",
      description: "Banner, poster, manifesti e stampe su supporti rigidi per la tua attività o eventi speciali.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: [
        "Banner e poster",
        "Stampe su supporti rigidi",
        "Alta risoluzione",
        "Materiali resistenti"
      ],
      color: "indigo"
    },
    {
      title: "Rilegatura e Finitura",
      description: "Servizi professionali di rilegatura per tesi, documenti aziendali, cataloghi, manuali e presentazioni.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Rilegatura a spirale",
        "Rilegatura termica",
        "Copertine personalizzate",
        "Finitura professionale"
      ],
      color: "purple"
    },
    {
      title: "Personalizzazione",
      description: "Servizi di personalizzazione per t-shirt, abbigliamento da lavoro, gadget promozionali e oggetti regalo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      features: [
        "T-shirt personalizzate",
        "Gadget aziendali",
        "Oggetti regalo",
        "Stampe su tessuto"
      ],
      color: "pink"
    },
    {
      title: "Scansione e Digitalizzazione",
      description: "Digitalizzazione di documenti cartacei, foto, disegni tecnici e archivi con servizio di archiviazione sicura.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      features: [
        "Scansione ad alta risoluzione",
        "Digitalizzazione documenti",
        "Conversione in diversi formati",
        "Archiviazione sicura"
      ],
      color: "cyan"
    },
    {
      title: "Servizi per Studenti",
      description: "Offerte speciali per studenti: stampa dispense, appunti, tesi e progetti con sconti dedicati.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Sconti per studenti",
        "Stampa tesi e progetti",
        "Rilegature professionali",
        "Consegna prioritaria"
      ],
      color: "amber"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-100 text-blue-600",
        hoverRing: "hover:ring-blue-300",
        gradientFrom: "from-blue-500",
        gradientTo: "to-blue-600"
      },
      indigo: {
        icon: "bg-indigo-100 text-indigo-600",
        badge: "bg-indigo-100 text-indigo-600",
        hoverRing: "hover:ring-indigo-300",
        gradientFrom: "from-indigo-500",
        gradientTo: "to-indigo-600"
      },
      purple: {
        icon: "bg-purple-100 text-purple-600",
        badge: "bg-purple-100 text-purple-600",
        hoverRing: "hover:ring-purple-300",
        gradientFrom: "from-purple-500",
        gradientTo: "to-purple-600"
      },
      pink: {
        icon: "bg-pink-100 text-pink-600",
        badge: "bg-pink-100 text-pink-600",
        hoverRing: "hover:ring-pink-300",
        gradientFrom: "from-pink-500",
        gradientTo: "to-pink-600"
      },
      cyan: {
        icon: "bg-cyan-100 text-cyan-600",
        badge: "bg-cyan-100 text-cyan-600",
        hoverRing: "hover:ring-cyan-300",
        gradientFrom: "from-cyan-500",
        gradientTo: "to-cyan-600"
      },
      amber: {
        icon: "bg-amber-100 text-amber-600",
        badge: "bg-amber-100 text-amber-600",
        hoverRing: "hover:ring-amber-300",
        gradientFrom: "from-amber-500",
        gradientTo: "to-amber-600"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-3"></div>
            <motion.span 
              className="relative bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium border border-blue-100"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Cosa Offriamo
            </motion.span>
          </div>
        </div>
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          I Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Servizi</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Offriamo un'ampia gamma di servizi di stampa e personalizzazione per soddisfare tutte le tue esigenze.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const colorClasses = getColorClasses(service.color);
          
          return (
            <motion.div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100 group hover:ring-4 ${colorClasses.hoverRing} relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Angolo decorativo */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colorClasses.gradientFrom} ${colorClasses.gradientTo} opacity-10 transform rotate-12 -translate-y-8 translate-x-8 rounded-bl-3xl group-hover:opacity-20 transition-opacity`}></div>
              
              <div className={`${colorClasses.icon} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transform transition-transform group-hover:rotate-3`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center group/item">
                    <div className={`h-5 w-5 ${colorClasses.badge} rounded-full mr-2 flex items-center justify-center flex-shrink-0`}>
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover/item:translate-x-1 transition-transform">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#contact" className={`flex items-center text-sm font-medium ${colorClasses.badge.replace('bg-', 'text-')} group-hover:underline`}>
                  <span>Richiedi preventivo</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        className="text-center mt-16 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-0.5 w-full max-w-lg bg-gray-100"></div>
        </div>
        <a 
          href="#contact" 
          className="relative inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 group"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M8 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10H16M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Richiedi Preventivo
          <span className="absolute right-0 -mt-0.5 -mr-3 h-3 w-3 rounded-full bg-white flex items-center justify-center ring-2 ring-white">
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-ping"></span>
          </span>
        </a>
      </motion.div>
    </>
  );
} 