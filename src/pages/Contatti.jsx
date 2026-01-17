import React from 'react';
import { Phone, Mail, MapPin, Clock, Train, Car, Info, Navigation } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Contatti = () => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const openingHours = [
        { day: "Lunedì", hours: "9:00 - 19:30", index: 1 },
        { day: "Martedì", hours: "9:00 - 12:00 / 14:30 - 19:30", index: 2 },
        { day: "Mercoledì", hours: "9:00 - 19:30", index: 3 },
        { day: "Giovedì", hours: "9:00 - 12:00 / 14:30 - 19:30", index: 4 },
        { day: "Venerdì", hours: "9:00 - 17:00", index: 5 },
    ];

    return (
        <div className="flex flex-col items-center min-h-full py-12 px-8 bg-gray-50/30">
            <SEO
                title="Contatti e Sede"
                description="Contatta lo Studio Dentistico Rossetti a Milano: Via Poggibonsi 5. Telefono 02.4071446. Orari, mappa e indicazioni per raggiungerci con i mezzi pubblici."
            />
            <div className="max-w-[1200px] w-full flex flex-col gap-8 flex-grow">
                {/* Header Bar with Gradient style */}
                <div className="w-full mb-4">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        CONTATTI E SEDE
                    </div>
                </div>

                {/* Top Row: Quick Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#009EA9]/10 flex items-center group hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#009EA9]/10 rounded-full flex items-center justify-center text-[#009EA9] mr-4 group-hover:bg-[#009EA9] group-hover:text-white transition-colors">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter">Indirizzo</p>
                            <p className="font-bold text-gray-800">Via Poggibonsi 5, Milano</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#009EA9]/10 flex items-center group hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#009EA9]/10 rounded-full flex items-center justify-center text-[#009EA9] mr-4 group-hover:bg-[#009EA9] group-hover:text-white transition-colors">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter">Telefono</p>
                            <p className="font-bold text-gray-800">02.4071446</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#009EA9]/10 flex items-center group hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#009EA9]/10 rounded-full flex items-center justify-center text-[#009EA9] mr-4 group-hover:bg-[#009EA9] group-hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter">Email</p>
                            <p className="font-bold text-gray-800 truncate">studiorossetti2007@libero.it</p>
                        </div>
                    </div>
                </div>

                {/* Main Content: Hours and Reach Us */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Left side: Opening Hours (Takes 2/5 columns) */}
                    <div className="lg:col-span-2 flex flex-col h-full">
                        <div className="bg-[#009EA9] text-white p-8 rounded-3xl shadow-xl flex flex-col h-full">
                            <div className="flex items-center mb-8">
                                <Clock className="w-8 h-8 mr-4" />
                                <h3 className="text-2xl font-black uppercase tracking-widest">Orari Studio</h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {openingHours.map((item) => (
                                    <div
                                        key={item.index}
                                        className={`flex justify-between items-center p-3 rounded-xl transition-all ${today === item.index
                                            ? "bg-white/20 border border-white/30 scale-105 shadow-inner"
                                            : "hover:bg-white/5"
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <span className={`w-2 h-2 rounded-full mr-3 ${today === item.index ? "bg-white animate-pulse" : "bg-white/40"}`}></span>
                                            <span className={`font-bold ${today === item.index ? "text-white" : "text-white/80"}`}>{item.day}</span>
                                        </div>
                                        <span className={`text-sm tracking-tight ${today === item.index ? "font-black" : "text-white/70"}`}>{item.hours}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto bg-black/20 p-4 rounded-2xl border border-white/10">
                                <div className="flex items-center text-white/90 font-bold mb-1">
                                    <span className="mr-2">ⓘ</span>
                                    <span>Chiusure</span>
                                </div>
                                <p className="text-white/70 text-sm italic">
                                    Lo studio rimane chiuso il Sabato, la Domenica e durante tutto il mese di Agosto.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Directions and Map (Takes 3/5 columns) */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Reach Us Content */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#009EA9]/10 relative overflow-hidden group">
                            {/* Decorative Background Element */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#009EA9]/5 rounded-full blur-3xl group-hover:bg-[#009EA9]/10 transition-colors"></div>

                            <div className="flex items-center mb-6 relative z-10">
                                <Navigation className="text-[#009EA9] w-8 h-8 mr-4" />
                                <h3 className="text-gray-800 text-2xl font-black uppercase tracking-widest">Come Raggiungerci</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center text-[#009EA9] font-bold uppercase text-xs tracking-[0.2em]">
                                        <Train className="w-4 h-4 mr-2" />
                                        Mezzi Pubblici
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-2xl">
                                        <p className="text-gray-700 leading-relaxed mb-2">
                                            <span className="inline-block w-4 h-4 bg-[#e52421] rounded-full mr-2 align-middle"></span>
                                            <span className="font-bold">Metro M1 (Rossa)</span>: fermata <span className="font-bold">GAMBARA</span>.
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            <span className="font-bold text-gray-700">Linee Bus:</span> 80, 95, 63, 72, 90, 91.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center text-[#009EA9] font-bold uppercase text-xs tracking-[0.2em]">
                                        <Car className="w-4 h-4 mr-2" />
                                        In Automobile
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-2xl">
                                        <p className="text-gray-700 leading-relaxed">
                                            Tangenziale Ovest, uscite: <br />
                                            <span className="font-black text-[#009EA9]">Via Novara</span> oppure <span className="font-black text-[#009EA9]">Cusago</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Integrated Map */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#009EA9]/10 overflow-hidden h-[450px] relative">
                            <iframe
                                title="Mappa Trasporti Studio Rossetti"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=9.1345,45.4628,9.1445,45.4688&amp;layer=transportmap&amp;marker=45.4658,9.1392"
                                className="rounded-2xl"
                            ></iframe>
                            <div className="absolute top-8 right-8 pointer-events-none">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Studio+Medico+Dentistico+Associato+Rossetti+G.+e+P.,+Via+Poggibonsi+5,+20146+Milano"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#009EA9] text-white px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,158,169,0.4)] hover:shadow-[0_15px_40px_rgba(0,158,169,0.6)] hover:scale-105 transition-all pointer-events-auto flex items-center group active:scale-95"
                                >
                                    <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors">
                                        <Navigation className="w-6 h-6 animate-pulse group-hover:animate-none" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none mb-1">Ottieni Indicazioni</span>
                                        <span className="text-lg font-black uppercase tracking-tighter leading-none">Pianifica il Viaggio</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Contatti;
