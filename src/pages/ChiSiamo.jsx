import React from 'react';
import receptionImg from '../assets/imageReception.png';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const ChiSiamo = () => {
    return (
        <div className="flex flex-col items-center p-8 min-h-full">
            <SEO
                title="Chi Siamo"
                description="Scopri la storia e la filosofia dello Studio Dentistico Rossetti a Milano. Dal 1985 al servizio del tuo sorriso con passione e competenza."
            />
            <div className="max-w-[1400px] w-full flex-grow">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        CHI SIAMO
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Column */}
                    <div className="md:w-4/12">
                        <p className="text-[#009EA9] text-2xl leading-relaxed italic font-serif text-center md:text-left">
                            Siamo Medici Chirurghi<br />
                            Odontoiatri che hanno unito<br />
                            il loro sapere, il loro sforzo<br />
                            e il loro tempo per<br />
                            offrire un servizio<br />
                            odontoiatrico di qualità,<br />
                            realizzando cure e<br />
                            riabilitazioni orali di<br />
                            precisione, all'avanguardia<br />
                            e in grado di soddisfare<br />
                            le diverse esigenze<br />
                            del paziente, utilizzando<br />
                            i migliori prodotti e<br />
                            le apparecchiature più<br />
                            professionali presenti<br />
                            sul mercato.
                        </p>
                    </div>

                    {/* Image Column */}
                    <div className="md:w-8/12">
                        <img
                            src={receptionImg}
                            alt="Reception Studio Rossetti"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChiSiamo;
