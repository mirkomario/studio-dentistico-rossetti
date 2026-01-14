import React from 'react';

const Servizi = () => {
    const disciplines = [
        { title: "Chirurgia orale" },
        { title: "Parodontologia" },
        { title: "Implantologia", description: "impianti in ceramica e titanio STRAUMANN ®" },
        { title: "Odontoiatria cosmetica" },
        { title: "Medicina estetica – FILLER", link: "www.revimed.it" },
        { title: "Protesi fissa e mobile", description: "impronte con scanner intraorale" },
        { title: "Apparecchi ortodontici invisibili", link: "www.raddrizzadenti.it" },
        { title: "Odontoiatria pediatrica", description: "dai 3 anni in poi" },
        { title: "Igiene e prevenzione" },
        { title: "Conservativa" },
        { title: "Endodonzia" },
        { title: "Ipnosi medica" },
        { title: "Dispositivo antiapnee notturne / antirussamento", link: "www.protesinylon.it" },
    ];

    return (
        <div className="flex flex-col items-center min-h-full py-12 px-8">
            <h2 className="text-[#009EA9] text-3xl font-bold mb-10 uppercase tracking-widest border-b-2 border-[#009EA9] pb-2">
                LE DISCIPLINE
            </h2>

            <div className="max-w-[1100px] w-full border-4 border-[#009EA9]/10 shadow-2xl bg-white overflow-hidden flex flex-col md:flex-row">
                {/* Left Column: List */}
                <div className="md:w-6/12 p-8 flex flex-col bg-white">
                    <div className="bg-[#009EA9] text-white py-2 px-8 mb-8 font-bold text-xl tracking-wider w-full text-center">
                        DISCIPLINE ODONTOIATRICHE
                    </div>
                    <ul className="space-y-3 text-[#009EA9]">
                        {disciplines.map((item, index) => (
                            <li key={index} className="flex flex-col items-start border-b border-[#009EA9]/10 pb-2 last:border-0">
                                <div className="flex items-center">
                                    <span className="w-2 h-2 bg-[#009EA9] rounded-full mr-3"></span>
                                    <span className="font-bold text-lg">{item.title}</span>
                                </div>
                                {item.description && (
                                    <span className="ml-5 text-sm italic">{item.description}</span>
                                )}
                                {item.link && (
                                    <span className="ml-5 text-sm text-[#007b85] underline cursor-pointer">{item.link}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: Image */}
                <div className="md:w-6/12 relative min-h-[500px]">
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                        alt="Dental Surgery"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Servizi;
