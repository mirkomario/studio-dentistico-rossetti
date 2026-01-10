import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 rounded-l-[100px] -z-10 translate-x-20" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-primary-600 font-semibold text-sm mb-6 border border-primary-100">
                        <Sparkles size={16} />
                        Eccellenza a Milano dal 1990
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                        Mantieni <span className="text-primary-500">bello e sano</span> il tuo sorriso.
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                        Nello Studio Rossetti a Milano, uniamo odontoiatria d'avanguardia e medicina estetica per la cura completa del tuo benessere orale.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary group">
                            Prenota una Visita
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-6 py-3 border-2 border-slate-200 rounded-full font-medium hover:border-primary-500 transition-colors">
                            Scopri i Servizi
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                            alt="Studio Medico Dentistico"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Badge decorative */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
                        <div className="text-3xl font-bold text-primary-600">30+</div>
                        <div className="text-sm text-slate-500 font-medium">Anni di Esperienza</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
