import React from 'react';
import { paragraphTextColor } from '../../styles/styles';


const OurApproachCard = ({ fontClassName, title, description, className, link }) => {
    return (
        <div className={`card background-glass px-8 py-10 rounded-xl mt-6 col-span-4 ${className}`}>
            <i className={`${fontClassName}`}></i>
            <h2 className='text-[24px] font-semibold text-white mb-5'>{title}</h2>
            <p className={`w-[100%] ${paragraphTextColor} leading-7 text-[14px] mb-8`}>{description}</p>
            
        </div>
    );
};

export default OurApproachCard;