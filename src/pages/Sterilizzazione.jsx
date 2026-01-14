import React from 'react';
import ster1 from '../assets/imageSter1.png';
import ster2 from '../assets/imageSter2.png';
import SEO from '../components/SEO';

const Sterilizzazione = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <SEO
                title="Sterilizzazione"
                description="La sicurezza dei pazienti è la nostra priorità. Scopri le rigorose procedure di sterilizzazione e igiene dello Studio Rossetti."
            />
            <div className="max-w-[1400px] w-full">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        STERILIZZAZIONE
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center">
                    {/* Left Column: The 2 Images */}
                    <div className="md:w-[55%] grid grid-cols-2 gap-6">
                        <div className="h-full overflow-hidden rounded-sm shadow-sm">
                            <img
                                src={ster1}
                                alt="Procedure Sterilizzazione 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-full overflow-hidden rounded-sm shadow-sm">
                            <img
                                src={ster2}
                                alt="Procedure Sterilizzazione 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text in requested style */}
                    <div className="md:w-[45%] flex flex-col justify-center">
                        <h3 className="text-[#009EA9] text-3xl font-bold leading-tight mb-8 italic font-serif lowercase">
                            un punto importante<br />
                            nella gestione dello studio
                        </h3>

                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif mb-8">
                            In questo studio, strumentario e trapani vengono sottoposti,<br />
                            dopo ogni utilizzo, alla seguente procedura di sterilizzazione:
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Detersione e disinfezione in bagno ad ultrasuoni",
                                "Lavaggio",
                                "Sterilizzazione in autoclave a vapore sottovuoto"
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-center text-[#009EA9] text-xl font-serif italic border-b border-[#009EA9]/10 pb-3">
                                    <span className="w-2.5 h-2.5 bg-[#009EA9] rounded-full mr-5 shrink-0"></span>
                                    {step}
                                </li>
                            ))}
                        </ul>

                        <div className="text-[#009EA9] text-xl leading-relaxed italic font-serif">
                            <p className="mb-4">
                                Il corretto funzionamento delle autoclavi a vapore sottovuoto viene monitorato ad ogni ciclo con appositi dispositivi.
                            </p>
                            <p>
                                I dati ottenuti vengono stampati e conservati in archivio per 5 anni.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sterilizzazione;
