import React from 'react';
import tecn1 from '../assets/imageTecn1.png';
import tecn2 from '../assets/imageTecn2.png';
import tecn3 from '../assets/imageTecn3.png';
import tecn4 from '../assets/imageTecn4.png';
import tecn5 from '../assets/imageTecn5.png';
import tecn6 from '../assets/imageTecn6.png';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Tecnologia = () => {
    const techImages = [tecn1, tecn2, tecn3, tecn4, tecn5, tecn6];

    return (
        <div className="flex flex-col items-center p-8 min-h-full">
            <SEO
                title="Tecnologia"
                description="Lo Studio Rossetti utilizza tecnologie all'avanguardia: scanner intraorali, impronte digitali e diagnosi 3D per la massima precisione."
            />
            <div className="max-w-[1400px] w-full flex-grow">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-6">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        TECNOLOGIA
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
                    {/* Text Column */}
                    <div className="md:w-[40%] flex flex-col pt-2">
                        <p className="text-[#009EA9] text-xl leading-relaxed italic font-serif text-left">
                            Tutte le attrezzature elettromedicali e i dispositivi medici utilizzati di ultima generazione, conformi alle direttive europee, ne garantiscono la massima qualità e affidabilità e vengono sottoposti periodicamente a verifiche di sicurezza.
                        </p>
                        <p className="text-[#009EA9] text-xl leading-relaxed italic font-serif text-left mt-6">
                            Scanner intraorale e occhiali 3D per la rilevazione di impronte digitali in sostituzione di quelle tradizionali.
                        </p>
                    </div>

                    {/* Images Grid Column */}
                    <div className="md:w-[50%]">
                        <div className="grid grid-cols-3 gap-3">
                            {techImages.map((src, index) => (
                                <div key={index} className="aspect-square overflow-hidden rounded-sm shadow-sm">
                                    <img
                                        src={src}
                                        alt={`Tecnologia ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tecnologia;
