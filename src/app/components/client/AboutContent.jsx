'use client'

import { motion } from 'framer-motion';

export default function AboutContent() {
  const stats = [
    { value: '15+', label: 'Anni di Esperienza' },
    { value: '1200+', label: 'Clienti Soddisfatti' },
    { value: '3500+', label: 'Progetti Completati' },
    { value: '24h', label: 'Consegna Express' },
  ];

  const team = [
    {
      name: 'Marco Rossi',
      role: 'Fondatore e Direttore',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      description: 'Con oltre 15 anni di esperienza nel settore della stampa e della comunicazione visiva.'
    },
    {
      name: 'Laura Bianchi',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      description: 'Specializzata in progettazione grafica e identità visiva per materiali promozionali e aziendali.'
    },
    {
      name: 'Davide Verdi',
      role: 'Tecnico di Stampa',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      description: 'Esperto di tecnologie di stampa avanzate e sistemi di produzione di alta qualità.'
    },
  ];

  return (
    <>
      <div className="mb-16">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-5">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium py-1 px-3 rounded-full">Chi Siamo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
            La Nostra Azienda
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"></div>
        </motion.div>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Da oltre 15 anni siamo il punto di riferimento a Palermo per servizi di stampa di alta qualità.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
        <motion.div 
          className="lg:col-span-3 order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 relative inline-block">
            La Nostra Storia
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              CopyExpress nasce nel 2008 dall'idea di un giovane imprenditore appassionato di tecnologie di stampa e comunicazione visiva. Da un piccolo negozio nel centro di Palermo, abbiamo progressivamente ampliato la nostra offerta e migliorato le nostre attrezzature per rispondere ad una clientela sempre più esigente.
            </p>
            <p>
              Ogni anno investiamo nell'acquisto di nuovi macchinari e nella formazione continua del nostro staff per garantire sempre il massimo della qualità e restare al passo con le ultime tecnologie del settore.
            </p>
            <p>
              Ciò che ci distingue è l'attenzione al cliente: non ci limitiamo ad eseguire i lavori richiesti, ma offriamo consulenza professionale per individuare la soluzione più adatta alle esigenze specifiche di ogni progetto.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 relative inline-block">
              I Nostri Valori
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-lg">Qualità Superiore</span>
                  <p className="text-gray-600 mt-1">Non scendiamo a compromessi sulla qualità dei nostri prodotti e servizi.</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-lg">Innovazione Continua</span>
                  <p className="text-gray-600 mt-1">Ci aggiorniamo costantemente sulle ultime tecnologie e tendenze.</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a2 2 0 014 0v6m-4 0h4m-4 0h0m-2 3a2 2 0 104 0 2 2 0 00-4 0zm12-7a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-lg">Sostenibilità Ambientale</span>
                  <p className="text-gray-600 mt-1">Utilizziamo materiali eco-compatibili e processi a basso impatto ambientale.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-2 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-full">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Il nostro team al lavoro" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute top-10 -right-5 z-0 w-2/3 h-2/3 bg-blue-100 rounded-2xl"></div>
            <div className="absolute -bottom-5 -left-5 z-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mb-12">
        <motion.div 
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center">Il Nostro Team</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </motion.div>
      
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mt-10 -mr-10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
} 