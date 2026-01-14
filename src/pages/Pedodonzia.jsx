import React from 'react';
import ped1 from '../assets/imagePed1.png';
import ped2 from '../assets/imagePed2.png';
import ped3 from '../assets/imagePed3.png';
import SEO from '../components/SEO';

const Pedodonzia = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <SEO
                title="Odontoiatria Pediatrica"
                description="Cure dentali per i più piccoli a Milano. Un ambiente sereno e accogliente per far sentire ogni bambino a proprio agio dal dentista."
            />
            <div className="max-w-[1400px] w-full">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        ODONTOIATRIA PEDIATRICA
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-0 items-stretch justify-center">
                    {/* Left Column: Text */}
                    <div className="md:w-[33%] pr-12 flex flex-col justify-center">
                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif mb-8">
                            Lo studio è attrezzato<br />
                            per accogliere i piccoli<br />
                            pazienti dai 3 anni in poi,<br />
                            offrendo un ambiente<br />
                            sereno e a misura<br />
                            di bambino.
                        </p>

                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif mb-8">
                            L'approccio verso i bambini<br />
                            è graduale, orientato<br />
                            alla loro progressiva<br />
                            familiarizzazione<br />
                            con l'ambiente e con il<br />
                            <span className="font-bold">"Dottore della bocca"</span>.
                        </p>

                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif">
                            Si effettuano visite di<br />
                            controllo, prevenzione<br />
                            della carie con applicazioni<br />
                            di sigillature,<br />
                            sedute di fluoro-profilassi,<br />
                            cure di conservativa,<br />
                            ortodonzia mobile e fissa.
                        </p>
                    </div>

                    {/* Middle Column: Two Stacked Images */}
                    <div className="md:w-[33%] flex flex-col gap-1 pr-1">
                        <div className="flex-1 overflow-hidden rounded-sm">
                            <img
                                src={ped1}
                                alt="Ambiente Pediatrico 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 overflow-hidden rounded-sm">
                            <img
                                src={ped2}
                                alt="Ambiente Pediatrico 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Large Image */}
                    <div className="md:w-[34%]">
                        <div className="h-full overflow-hidden rounded-sm">
                            <img
                                src={ped3}
                                alt="Sala Operativa Pediatrica"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pedodonzia;
