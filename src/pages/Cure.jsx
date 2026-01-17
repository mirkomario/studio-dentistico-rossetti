import React from 'react';
import cureImg from '../assets/imageCure.png';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Cure = () => {
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
        <div className="flex flex-col items-center p-6 min-h-full">
            <SEO
                title="Cure e Discipline"
                description="Servizi dentistici completi a Milano: Chirurgia, Parodontologia, Implantologia, Ortodonzia invisibile e Medicina Estetica."
            />
            <div className="max-w-[1400px] w-full mt-4 flex-grow">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-6">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        DISCIPLINE ODONTOIATRICHE
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Column: List */}
                    <div className="md:w-1/2 flex flex-col">
                        <ul className="space-y-2 text-[#009EA9]">
                            {disciplines.map((item, index) => (
                                <li key={index} className="flex flex-col items-start border-b border-[#009EA9]/10 pb-0.5 last:border-0">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-[#009EA9] rounded-full mr-3"></span>
                                        <span className="font-bold text-[16px] leading-tight uppercase font-serif">{item.title}</span>
                                    </div>
                                    <div className="flex gap-4 ml-5">
                                        {item.description && (
                                            <span className="text-xs italic text-slate-500">{item.description}</span>
                                        )}
                                        {item.link && (
                                            <a
                                                href={`http://${item.link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#007b85] underline hover:text-[#009EA9] transition-colors"
                                            >
                                                {item.link}
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={cureImg}
                            alt="Cure Rossetti"
                            className="max-h-[65vh] w-auto h-auto shadow-sm"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cure;
