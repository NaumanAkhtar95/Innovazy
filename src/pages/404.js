import { Link } from 'gatsby';
import React from 'react';
import { container, paragraphTextColor, textwhite } from '../styles/styles';
import PrimaryButton from '../ui/PrimaryButton';

const Error404 = () => {
    return (
        <div className={`${container} mt-[200px]`}>
            <h1 className={`${textwhite} font-black text-[150px]`}>404</h1>
            <h2 className={` text-white font-semibold text-[30px]`}>OOPS...</h2>
            <p className={`w-[100%] sm:w-[75%] ${paragraphTextColor} mb-8`}>The page you are looking for could not be found. Sad :(</p>
            <Link to='/'>
                <PrimaryButton fontAwesome={<i class="fa-solid fa-arrow-left mr-4"></i>} btnText={`Homepage`} />
            </Link>
        </div>
    );
};

export default Error404;