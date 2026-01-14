import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Sidebar = () => {
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'CHI SIAMO', path: '/chi-siamo' },
        { name: 'STAFF', path: '/staff' },
        { name: 'TECNOLOGIA', path: '/tecnologia' },
        { name: 'CURE', path: '/cure' },
        { name: 'STERILIZZAZIONE', path: '/sterilizzazione' },
        { name: 'ODONTOIATRIA PEDIATRICA', path: '/pedodonzia' },
        { name: 'CONVENZIONI', path: '/convenzioni' },
        { name: 'CONTATTI', path: '/contatti' },
    ];

    return (
        <aside className="sidebar-container pl-10">
            <div className="mb-10 w-full flex justify-start pt-4">
                <img
                    src={logoImg}
                    alt="Logo Studio Rossetti"
                    className="w-[240px] h-auto"
                />
            </div>

            <nav className="flex flex-col w-full px-0">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `legacy-button ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto py-6 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Studio Medico Rossetti<br />Milano
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
