import React from 'react';
import Lottie from 'react-lottie';
import animationDataSuccess from "../assets/lottie/success.json";
import animationDataError from "../assets/lottie/error.json";
import { paragraphTextColor } from '../styles/styles';

const Dialog = ({ showAppointment, setShowAppointment, isSuccess }) => {

    const defaultOptionsSuccess = {
        loop: true,
        autoplay: true,
        animationData: animationDataSuccess,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsError = {
        loop: true,
        autoplay: true,
        animationData: animationDataError,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden={showAppointment} className={`${showAppointment ? "animate-[fadeIn_0.3s_ease-in-out]" : "hidden animate-[fadeIn_0.3s_ease-in-out]"} overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex`} role="dialog" aria-modal={setShowAppointment}>
            <div className="relative w-full max-w-lg max-h-full">
                <div className="relative background-glass-dark rounded-2xl shadow px-8 pb-4">
                    <div className="flex items-center justify-between pt-7 rounded-t"> {/* border-b border-gray-800*/}
                        <h3 className="text-lg font-normal text-white">
                            {/* Message sent successfully */}
                        </h3>
                        <button type="button" onClick={() => {
                            setShowAppointment(false);
                            document.querySelector('html').classList.remove("overflow-y-hidden");
                        }} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-800 hover:text-gray-300 transition rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden={showAppointment} aria-modal={showAppointment} fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div>
                        {isSuccess ? <>
                            <Lottie options={defaultOptionsSuccess}
                                height={200}
                                width={200}
                                isStopped={false}
                                isPaused={false} />

                            <h3 className="text-2xl text-center font-semibold text-white tracking-wide">
                                Message sent successfully
                            </h3>
                            <p className={`w-[100%] mx-auto text-[15px] mt-4 mb-4 ${paragraphTextColor} text-center leading-7`}>Thank you for contacting us. We appreciate your inquiry and will promptly reach out to you using the provided mailing address. Please expect to hear from us shortly.</p>
                        </> : <>
                            <Lottie options={defaultOptionsError}
                                height={200}
                                width={200}
                                isStopped={false}
                                isPaused={false} />

                            <h3 className="text-2xl text-center font-semibold text-white tracking-wide">
                                Error
                            </h3>
                            <p className={`w-[100%] mx-auto text-[15px] mt-4 mb-4 ${paragraphTextColor} text-center leading-7`}>There was an error while sending your message, we are sorry for the inconvenience. Please try again later.</p>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;