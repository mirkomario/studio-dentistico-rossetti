import React from 'react';
import staffImg from '../assets/imgstaffRitratto.png';

const Staff = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <div className="max-w-[1400px] w-full">
                {/* Header Bar with Gradient */}
                <div className="w-full mb-12">
                    <div className="legacy-button !w-full !text-2xl !py-4 !px-10 cursor-default">
                        STAFF
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src={staffImg}
                        alt="Staff Rossetti"
                        className="max-w-full max-h-[70vh] w-auto h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Staff;
