import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'STAFF', path: '/studio' },
        { name: 'DISCIPLINE', path: '/servizi' },
        { name: 'TECNOLOGIA', path: '/tecnologia' },
        { name: 'STERILIZZAZIONE', path: '/sterilizzazione' },
        { name: 'ODONTOIATRIA PEDIATRICA', path: '/pedodonzia' },
        { name: 'CONVENZIONI', path: '/convenzioni' },
        { name: 'CONTATTI', path: '/contatti' },
    ];

    return (
        <aside className="sidebar-container">
            <div className="mb-10 px-4">
                <img
                    src="http://www.studiomedicodentisticorossetti.com/IMG/marchio%20MEDIUM%20TONDO.jpg"
                    alt="Logo Studio Rossetti"
                    className="w-full h-auto max-w-[180px]"
                />
            </div>

            <nav className="flex flex-col w-full px-4">
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
