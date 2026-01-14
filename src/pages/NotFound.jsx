import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
            <h1 className="text-6xl font-bold text-[#009EA9] mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6 uppercase tracking-widest">Pagina non trovata</h2>
            <p className="text-slate-600 mb-8 max-w-md">
                Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
            </p>
            <Link
                to="/"
                className="bg-[#009EA9] text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#007b85] transition-colors"
            >
                Torna alla Home
            </Link>
        </div>
    );
};

export default NotFound;
