'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioContent() {
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Catalogo Aziendale',
      category: 'stampa',
      description: 'Stampa e rilegatura di catalogo aziendale premium con copertina rigida personalizzata.',
      imageUrl: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Tech Solutions S.p.A.'
    },
    {
      id: 2,
      title: 'Banner Promozionale',
      category: 'grande-formato',
      description: 'Banner pubblicitario per evento commerciale con stampa ad alta risoluzione e occhielli rinforzati.',
      imageUrl: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Evento Moda Milano'
    },
    {
      id: 3,
      title: 'Tesi di Laurea',
      category: 'rilegatura',
      description: 'Stampa e rilegatura di tesi universitaria con copertina personalizzata e finiture di alta qualità.',
      imageUrl: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Università degli Studi di Palermo'
    },
    {
      id: 4,
      title: 'T-Shirt Personalizzate',
      category: 'personalizzazione',
      description: 'Personalizzazione di t-shirt con logo aziendale per evento team building.',
      imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Gruppo Sportivo Amici'
    },
    {
      id: 5,
      title: 'Brochure Evento',
      category: 'stampa',
      description: 'Design e stampa di brochure per evento fieristico con grafica personalizzata.',
      imageUrl: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Fiera del Mediterraneo'
    },
    {
      id: 6,
      title: 'Insegna Luminosa',
      category: 'grande-formato',
      description: 'Progettazione e realizzazione di insegna luminosa per esercizio commerciale.',
      imageUrl: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
      client: 'Ristorante La Dolce Vita'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tutti', icon: '🔍' },
    { id: 'stampa', name: 'Stampa Piccolo Formato', icon: '📄' },
    { id: 'grande-formato', name: 'Grande Formato', icon: '🖼️' },
    { id: 'rilegatura', name: 'Rilegatura', icon: '📚' },
    { id: 'personalizzazione', name: 'Personalizzazione', icon: '🎨' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const getCategoryName = (categoryId) => {
    const category = filters.find(f => f.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryIcon = (categoryId) => {
    const category = filters.find(f => f.id === categoryId);
    return category ? category.icon : '';
  };

  return (
    <>
      <div className="text-center mb-16">
        <motion.div 
          className="inline-block mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-3"></div>
            <span className="relative bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium border border-blue-100">
              I Nostri Progetti
            </span>
          </div>
        </motion.div>
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Il Nostro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Portfolio</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Scopri alcuni dei nostri migliori progetti realizzati per clienti soddisfatti.
        </motion.p>
      </div>

      <motion.div 
        className="flex flex-wrap justify-center mb-12 gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {filters.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center shadow-sm ${
              filter === item.id
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center bg-blue-500 bg-opacity-80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        <span className="mr-1">{getCategoryIcon(item.category)}</span>
                        <span>{getCategoryName(item.category)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <div className="mt-auto">
                    <motion.button 
                      className="text-blue-600 inline-flex items-center text-sm font-medium group/button"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Vedi dettagli
                      <svg className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover/button:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500 to-indigo-600 opacity-10 transform rotate-45 translate-x-7 -translate-y-7 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-10 transform rotate-45 -translate-x-5 translate-y-5 rounded-full"></div>
              </div>
              
              {hoveredItem === item.id && (
                <motion.div 
                  className="absolute -bottom-3 -right-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full p-2.5 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
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
        <motion.a 
          href="#contact" 
          className="relative inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition-all shadow-lg group"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Parliamo del tuo Progetto
          <span className="absolute right-0 top-0 -mt-2 -mr-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-bold">
            Preventivo
          </span>
        </motion.a>
      </motion.div>
    </>
  );
} 