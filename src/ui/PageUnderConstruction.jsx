import React from 'react';
import { headingText, paragraphTextColor, textwhite } from '../styles/styles';
import UnderConstruction from "../assets/images/siteUnderConstruction.png"

const PageUnderConstruction = () => {
    return (
        <div>
            <img className='w-[700px] mx-auto' src={UnderConstruction} alt="Page Under Development"></img>
            <h1 className={`${textwhite} ${headingText} !text-[22px] mx-auto w-[100%] text-center`}>This page is under development</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto ${paragraphTextColor} text-center leading-7`}>Check back soon :)</p>
        </div>
    );
};

export default PageUnderConstruction;