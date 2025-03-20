import React from 'react';
import { lightTextColor, paragraphTextColor } from '../../styles/styles';

const SDCard = ({ number, heading, subHeading, description }) => {
    return (
        <>
            <div className='card background-glass w-[100%] flex flex-wrap lg:flex-nowrap px-[40px] lg:px-[80px] items-center gap-[40px] lg:gap-[80px] flex-1 rounded-xl'>
                <div className='w-[100%] lg:w-[10%]'>
                    <span className='flex w-[80px] h-[80px] justify-center items-center bg-[#F17840] rounded-full text-white text-[40px] mt-10 lg:mt-0'>{number}</span>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap py-3 lg:py-[80px] items-center gap-[20px] lg:gap-[80px] flex-1'>
                    <div className='w-[100%] lg:w-[40%]'>
                        <p className={`uppercase mb-5 font-medium ${lightTextColor}`}>{heading}</p>
                        <h3 className='text-[22px] font-normal text-white'>{subHeading}</h3>
                    </div>
                    <p className={`w-[100%] lg:w-[60%] ${paragraphTextColor} leading-7 text-[14px]`}>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SDCard;