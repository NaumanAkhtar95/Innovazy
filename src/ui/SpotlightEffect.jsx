import React, { useRef, useEffect } from 'react';
import { paragraphTextColor, textwhite } from '../styles/styles';

const Spotlight = ({ data }) => {
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
        <div ref={containerRef} data-spotlight>
            <div className="relative group">
                <div className="w-full pt-24">
                    <div className="max-w-full mx-auto grid gap-6 lg:grid-cols-2 items-start justify-between lg:max-w-none group">
                        {data.map((x, i) => {
                            return (<div key={i} className={`spotlight-card-${i} relative h-full bg-zinc-950 rounded-tl-[40px] rounded-tr-lg rounded-bl-lg rounded-br-[40px] border-l-2 border-l-primary-orange p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-zinc-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden`}>

                                <div className="relative h-full bg-gradient-to-tl to-[#0d0d0d] via-[#080808] from-black p-10 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="flex items-center">
                                        {x.image && <img className='mr-5 w-[80px]' src={x.image} alt="Competitive Compensation" />}
                                        <h3 className={`${textwhite} text-[20px]`}>{x.title}</h3>
                                    </div>
                                    <p className={`w-[100%] ${paragraphTextColor} leading-7 text-[14px] mt-4`}>{x.description}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;
