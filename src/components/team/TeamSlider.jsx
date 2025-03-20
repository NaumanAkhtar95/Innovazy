import React from 'react';
import { Carousel } from 'primereact/carousel';
import { skills } from '../../utils/skill-data';

const TeamSlider = () => {
    const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];


    const reviewTemplate = (review) => {
        return (
           

        
            <div
              className="relative mx-auto border-l-2 border-orange-500 code-card card background-glass px-4 py-10 mt-6  sm:h-[200px] hover:shadow-[0_10px_50px_rgba(148,_163,_184,_0.2)]
w-full sm:w-[300px]  rounded-xl hover:text-black text-primary-orange transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] flex items-center justify-center"
            >
             <div className="circle1"></div>
             <div className='z-50'>

              <div className="text-8xl ">
            {review.icon}
              </div>
              <h1 className='text-center text-3xl mt-1'>{review.name}</h1>
             </div>
             
            </div>
         
        );
    };

    return (
        
            
            <Carousel
                pt={{
                    indicators: { className: "h-[30px] w-[5%] flex justify-between mx-auto mt-5" },
                    indicatorButton: { className: "rounded-full h-[14px] w-[14px] bg-sky-600" },
                    nextButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex"
                    },
                    previousButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex"
                    },
                }}
                showIndicators={false}
                showNavigators={true}
                autoplayInterval={3000} value={skills} numVisible={3} numScroll={1}
                responsiveOptions={responsiveOptions} itemTemplate={reviewTemplate} circular />
        
    );
};

export default TeamSlider;