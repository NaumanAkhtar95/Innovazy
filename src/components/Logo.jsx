import React, { useEffect, useMemo, useRef, useState } from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";


const Logo = ({color}) => {
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        threshold: 0.1, // trigger when 10% of the component is visible
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);
  const particleOptions = useMemo(() => ({
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => color || `rgba(255, ${Math.floor(90 * x / image.width)}, ${Math.floor(250 * (1 - x / image.width))}, 0.8)`,
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2),
  }), [color]);
  
  // const particleOptions = {
  //   filter: ({ x, y, image }) => {
  //     // Get pixel
  //     const pixel = image.get(x, y);
  //     return pixel.b > 50;
  //   },
  //   color: ({ x, y, image }) => {
  //     if(color){
  //       return color
  //     }
  //     // Calculate a gradient color from white to orange
  //     const gradientRatio = x / image.width; // ratio based on y position
  //     const r = 450;
  //     const g = Math.floor(90  * gradientRatio); // interpolating green from 255 (white) to 165 (orange)
  //     const b = Math.floor(250 * (1 - gradientRatio)); // interpolating blue from 255 (white) to 0 (orange)
  //     return `rgba(${r}, ${g}, ${b}, 0.8)`; // Adjust opacity as needed
  //   },
  //     // color: ({ x, y, image }) => "orange",
  //   radius: () => Math.random() * 1.5 + 0.5,
  //   mass: () => 40,
  //   friction: () => 0.15,
  //   initialPosition: ({ canvasDimensions }) => {
  //     return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  //   },
  // };
  
  const motionForce = (x, y) => {
    return forces.disturbance(x, y, 10);
  };
  return (
    <div   ref={logoRef}
    style={{ width: '100%', maxWidth: '800px', height: '100%' ,}} > 
      {isVisible && (
  <ParticleImage
    src={"http://localhost:8000/static/7c8ad6a622e4f76da593f6c267b5aa59/0682b/InnovazyWhite.webp"}
    scale={0.15}
    entropy={5}
    maxParticles={isVisible ? 2000 : 0} // Only load particles when visible
    mouseMoveForce={motionForce}
    touchMoveForce={motionForce}
    particleOptions={particleOptions}
    backgroundColor="transparent"
    style={{ width: '100%', height: 'auto', opacity:"0.5" }}
  />
)}

    </div>
  );
};

export default Logo;
