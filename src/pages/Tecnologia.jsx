import React from 'react';
import tecn1 from '../assets/imageTecn1.png';
import tecn2 from '../assets/imageTecn2.png';
import tecn3 from '../assets/imageTecn3.png';
import tecn4 from '../assets/imageTecn4.png';
import tecn5 from '../assets/imageTecn5.png';
import tecn6 from '../assets/imageTecn6.png';
import SEO from '../components/SEO';

const Tecnologia = () => {
    const techImages = [tecn1, tecn2, tecn3, tecn4, tecn5, tecn6];

    return (
        <div className="flex flex-col items-center p-8">
            <SEO
                title="Tecnologia"
                description="Lo Studio Rossetti utilizza tecnologie all'avanguardia: scanner intraorali, impronte digitali e diagnosi 3D per la massima precisione."
            />
            <div className="max-w-[1400px] w-full">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        TECNOLOGIA
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                    {/* Text Column */}
                    <div className="md:w-[30%] pr-10 flex flex-col justify-center">
                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif text-left">
                            Tutte le attrezzature<br />
                            elettromedicali<br />
                            e i dispositivi medici<br />
                            utilizzati di ultima<br />
                            generazione, conformi<br />
                            alle direttive europee<br />
                            del settore,<br />
                            ne garantiscono<br />
                            la massima qualità<br />
                            e affidabilità<br />
                            (direttive CEI/CEE)<br />
                            e vengono sottoposti<br />
                            periodicamente a verifiche<br />
                            di sicurezza da tecnici<br />
                            qualificati.
                        </p>
                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif text-left mt-12">
                            Scanner intraorale<br />
                            e occhiali 3D<br />
                            per la rilevazione<br />
                            di impronte digitali<br />
                            in sostituzione<br />
                            di quelle tradizionali<br />
                            con cucchiaio e pasta.
                        </p>
                    </div>

                    {/* Images Grid Column (Vertical/Portrait) */}
                    <div className="md:w-[70%]">
                        <div className="grid grid-cols-3 gap-6">
                            {techImages.map((src, index) => (
                                <div key={index} className="aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
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
        </div>
    );
};

export default Tecnologia;
