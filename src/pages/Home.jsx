import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center p-8">
            {/* Replicating the exact homepage header */}
            <h1 className="text-[#009EA9] text-3xl font-bold mb-8 text-center uppercase tracking-widest">
                STUDIO MEDICO DENTISTICO ROSSETTI
            </h1>

            <div className="max-w-[1000px] w-full bg-white shadow-sm border border-slate-100">
                <img
                    src="http://www.studiomedicodentisticorossetti.com/IMG/chisiamo.jpg"
                    alt="Home Rossetti"
                    className="w-full h-auto"
                />

                <div className="p-12 text-center">
                    <h2 className="text-[#009EA9] text-2xl font-bold italic mb-6">
                        Mantieni bello e sano il tuo sorriso.
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Dr. Gianluca Rossetti - Dr. Patrizia Rossetti
                    </p>
                    <p className="text-slate-600">
                        Via Poggibonsi 5, 20146 Milano<br />
                        Tel. e Fax 02.40.71.446
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
