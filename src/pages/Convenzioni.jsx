import React from 'react';
import { CreditCard, Landmark, ShieldCheck, HeartPulse } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Convenzioni = () => {
    const convenzioni = [
        { name: "Comando Legione Carabinieri Lombardia", icon: <ShieldCheck className="w-6 h-6" /> },
        { name: "CRAL - Comune Milano", icon: <Landmark className="w-6 h-6" /> },
        { name: "CRAL - Ospedale San Carlo il Borromeo", icon: <HeartPulse className="w-6 h-6" /> },
        { name: "CRAL - Ospedale Niguarda", icon: <HeartPulse className="w-6 h-6" /> },
        { name: "Fondo Cesare Pozzi", icon: <CreditCard className="w-6 h-6" /> },
        { name: "Fondo Salute", icon: <HeartPulse className="w-6 h-6" /> },
        { name: "Pronto-Care", icon: <ShieldCheck className="w-6 h-6" /> },
        { name: "Network AON HEWITT", icon: <ShieldCheck className="w-6 h-6" /> },
    ];

    return (
        <div className="flex flex-col items-center p-8 min-h-full">
            <SEO
                title="Convenzioni e Finanziamenti"
                description="Lo Studio Rossetti è convenzionato con i principali fondi sanitari e offre soluzioni di finanziamento Compass per le tue cure a Milano."
            />
            <div className="max-w-[1400px] w-full flex-grow">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        CONVENZIONI
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Section: List */}
                    <div className="flex flex-col">
                        <div className="bg-[#009EA9] text-white py-2 px-8 mb-8 font-bold text-xl tracking-wider w-full text-center uppercase">
                            Enti e Fondi Convenzionati
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {convenzioni.map((item, index) => (
                                <div key={index} className="flex items-center p-4 border-b border-[#009EA9]/10 group transition-colors">
                                    <div className="text-[#009EA9] mr-4">
                                        {item.icon}
                                    </div>
                                    <span className="text-[#009EA9] font-bold uppercase text-lg">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Compass and Financial Info */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col">
                            <div className="bg-[#009EA9] text-white py-2 px-8 mb-8 font-bold text-xl tracking-wider w-full text-center uppercase">
                                Offerta Finanziaria
                            </div>
                            <div className="flex flex-col items-center text-center p-6 border border-[#009EA9]/10">
                                <div className="bg-white text-[#009EA9] px-8 py-3 rounded-sm font-black text-3xl mb-6 border-2 border-[#009EA9]">
                                    COMPASS
                                </div>
                                <p className="text-[#009EA9] text-xl italic font-serif leading-relaxed">
                                    Soluzioni di finanziamento personalizzate per le tue cure dentistiche. <br />
                                    Chiedi informazioni in segreteria per scoprire i piani di rateizzazione disponibili.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Convenzioni;
