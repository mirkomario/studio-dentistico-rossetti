import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Lo Studio', path: '/studio' },
        { name: 'Servizi', path: '/servizi' },
        { name: 'Convenzioni', path: '/convenzioni' },
        { name: 'Contatti', path: '/contatti' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        R
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-xl leading-none text-slate-900">STUDIO ROSSETTI</span>
                        <span className="text-[10px] uppercase tracking-widest text-primary-600 font-semibold">Odontoiatria & Estetica</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-600' : 'text-slate-700'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:024071446" className="btn-primary py-2 px-5 text-sm">
                        <Phone size={16} />
                        02 40 71 446
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-lg font-medium text-slate-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:024071446" className="btn-primary mt-2">
                            <Phone size={20} />
                            Chiama Ora
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
