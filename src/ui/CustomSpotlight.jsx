import React, { useEffect, useRef } from 'react'
import { paragraphTextColor, textwhite } from '../styles/styles';
import { PiTreeStructureFill } from "react-icons/pi";

const CustomSpotlight = ({ data }) => {


    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const cards = Array.from(container.querySelectorAll('[class^="spotlight-card"]'));

        if (cards.length === 0) {
            console.log("No cards found.");
        } else {
            const mouse = {
                x: 0,
                y: 0,
            };

            const updateContainerSize = () => {
                const rect = container.getBoundingClientRect();
                containerSize.w = rect.width;
                containerSize.h = rect.height;
            };

            const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                const rect = container.getBoundingClientRect();
                const { w, h } = containerSize;
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                const inside = x < w && x > 0 && y < h && y > 0;

                if (inside) {
                    mouse.x = x;
                    mouse.y = y;
                    cards.forEach((card) => {
                        const cardRect = card.getBoundingClientRect();
                        const cardX = -(cardRect.left - rect.left) + mouse.x;
                        const cardY = -(cardRect.top - rect.top) + mouse.y;
                        card.style.setProperty('--mouse-x', `${cardX}px`);
                        card.style.setProperty('--mouse-y', `${cardY}px`);
                    });
                }
            };

            let containerSize = {
                w: 0,
                h: 0,
            };

            updateContainerSize();
            window.addEventListener('resize', updateContainerSize);
            window.addEventListener('mousemove', onMouseMove);

            return () => {
                window.removeEventListener('resize', updateContainerSize);
                window.removeEventListener('mousemove', onMouseMove);
            };
        }
    }, [data]); // Run effect when data changes


  return (
    <>
    
        <div ref={containerRef} data-spotlight>
            <div className="relative group">
                <div className="w-full pt-24">
                    <div className="max-w-full mx-auto grid gap-8 lg:grid-cols-3 items-start justify-between lg:max-w-none group">
                        {data.map((x, i) => {
                            return (<div key={i} className={`spotlight-card-${i} relative h-full rounded-xl border-l-2 border-l-primary-orange p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-zinc-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden w-full sm:w-[400px] sm:h-[300px]`}>


  <div
    className="relative text-white  bg-gradient-to-tl px-4 py-10 col-span-4 h-[300px]  w-full sm:w-[400px] to-[#0d0d0d] via-[#080808] from-black p-10 rounded-[inherit] z-20 overflow-hidden"
  >
    <div className="text-4xl text-primary-orange">
      {x.icon? x.icon:<PiTreeStructureFill/>}
      
    </div>
    <div className="pt-4">
      <h2 className={`${textwhite} text-[20px]`}>
     {x.title}
      </h2>
      <p className={`w-[100%] ${paragraphTextColor} leading-7 text-[14px] mt-4`}>
      {x.description}
      </p>
    </div>
  </div>
{/* </div> */}


                                </div>
                            )
                        })}
                   
                        </div>
                        </div>
                        </div>
                        </div>

    </>
  )
}

export default CustomSpotlight