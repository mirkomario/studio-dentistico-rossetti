import React from 'react';

const Footer = () => {
    return (
        <div className="w-full text-center text-gray-400 text-sm mt-auto py-8 border-t border-gray-100">
            <p>© {new Date().getFullYear()} Studio Medico Dentistico Rossetti - Via Poggibonsi 5, Milano</p>
        </div>
    );
};

export default Footer;
