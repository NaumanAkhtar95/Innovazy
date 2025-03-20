import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import { sendMail } from '../../api/api';
import Dialog from '../../ui/Dialog';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';
const ContactSection = () => {
    const [recaptchaToken, setRecaptchaToken] = React.useState("");
    const [showModalDialog, setShowModalDialog] = React.useState(false);
    const [isSuccess, setSuccess] = React.useState(false);
    const [emailBody, setEmailBody] = React.useState({
        name: "",
        emailTo: "",
        phoneNumber: "",
        company: "",
        subject: "",
        message: ""
    });
const {t} = useTranslation("home")
    const onChange = (e) => {
        const { name, value } = e.target;
        setEmailBody(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onMessageSend = () => {
        document.querySelector('html').classList.add("overflow-y-hidden");
        setShowModalDialog(true);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!recaptchaToken) {
            alert("Please complete the reCAPTCHA");
            return;
        }
        try {
            const response = await fetch("https://formspree.io/f/xlderwla", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: emailBody.name,
                    email: emailBody.emailTo,
                    phoneNumber: emailBody.phoneNumber,
                    company: emailBody.company,
                    subject: emailBody.subject,
                    message: emailBody.message,
                    
                })
            });

            if (response.ok) {
                  // Parse the response to check for any message from Formspree
            const responseData = await response.json();
            
                setSuccess(true);
                onMessageSend(); // Show the success modal
                setRecaptchaToken("");
                setTimeout(() => {
                    setShowModalDialog(false); // Close modal after 3 seconds
                    setRecaptchaToken("");
                }, 3000);
            } else {
                setSuccess(false);
                onMessageSend(); // Show the error modal
                console.error("Failed to send message.");
                setRecaptchaToken("");
            }
        } catch (error) {
            setSuccess(false);
            onMessageSend(); // Show the error modal
            console.error("An error occurred while sending the message:", error);
        }
    };


    const handleRecaptchaChange = (captchaToken) => {
        console.log(captchaToken)
        setRecaptchaToken(captchaToken);
    };

    return (
        <div className='relative grid'>
            <div className='contactGradientBlobLeft'>
                <div className='contactGradientBlobMid'>
                    <div className='contactGradientBlobRight'>
                        <div className={`${container} !px-0 sm:!px-8 mt-[120px]`} id='contact-us'>
                            <div className='mb-8'>
                                <h1 className={`${textwhite} ${headingText} w-[100%] text-center`}>{t("sectionEight.mainHeading")}</h1>
                                <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-center leading-7`}>{t("sectionEight.desc")}</p>
                            </div>

                            <form 
//                             action="https://formspree.io/f/xlderwla"
//   method="POST" 
  className="card rounded-3xl background-glass mt-10 p-10 grid gap-10" 
  onSubmit={handleSubmit}
  
//   onSubmit={(e) => {
//     e.preventDefault();
//     e.stopPropagation();
// }}
>
                                <div className="flex flex-wrap gap-6 md:gap-0 items-center justify-between">
                                    <div className='grid w-[100%] md:w-[30%]'>
                                        <label htmlFor="name" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.name")}</label>
                                        <input  className={`background-glass rounded-xl p-5 text-white`} required onChange={(e) => { onChange(e); }} value={emailBody.name} type="text" name='name' placeholder='Enter name' />
                                    </div>
                                    <div className='grid w-[100%] md:w-[30%]'>
                                        <label htmlFor="email" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.email")}</label>
                                        <input className={`background-glass rounded-xl p-5 text-white`} required onChange={(e) => { onChange(e); }} type="text" value={emailBody.emailTo} name='emailTo' placeholder='Enter email address' />
                                    </div>
                                    <div className='grid w-[100%] md:w-[30%]'>
                                        <label htmlFor="number" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.phoneNumber")}</label>
                                        <input className={`background-glass rounded-xl p-5 text-white`} required onChange={(e) => { onChange(e); }} type="text" value={emailBody.phoneNumber} name='phoneNumber' placeholder='Enter phone number' />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-6 md:gap-0 items-center justify-between">
                                    <div className='grid w-[100%] md:w-[30%]'>
                                        <label htmlFor="company" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.company")}</label>
                                        <input className={`background-glass rounded-xl p-5 text-white`} required onChange={(e) => { onChange(e); }} type="text" value={emailBody.company} name='company' placeholder='Enter company name' />
                                    </div>
                                    <div className='grid w-[100%] md:w-[30%]'>
                                        <label htmlFor="subject" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.subject")}</label>
                                        <input className={`background-glass rounded-xl p-5 text-white`} required onChange={(e) => { onChange(e); }} type="text" value={emailBody.subject} name='subject' placeholder='Enter subject' />
                                    </div>
                                    <div className='grid w-[100%] md:w-[30%] opacity-0 hidden md:block'>
                                        <label htmlFor="e" className='text-white font-medium mb-3 text-[14px]'>e</label>
                                        <input className={`background-glass rounded-xl p-5 text-white`} type="text" name='e' placeholder='Enter email address' />
                                    </div>
                                </div>
                                <div className='grid w-[100%]'>
                                    <label htmlFor="company" className='text-white font-medium mb-3 text-[14px]'>{t("sectionEight.form.message")}</label>
                                    <textarea rows={6} className={`background-glass rounded-xl p-5 text-white resize-none`} required onChange={(e) => { onChange(e); }} value={emailBody.message} type="text" name='message' placeholder='Enter your message' />
                                </div>
                                <div className='text-center'>
                                    <button aria-label='send mail to innovazy' 
                                  
                                    >
                                         {recaptchaToken === "" &&(
                                            <ReCAPTCHA
                                            sitekey="6LcPJJ8qAAAAAB8RTHl37VytGQsWjMvo4k7TSvSh"
                                            onChange={handleRecaptchaChange}
                                            />)
                                        }
                      {!recaptchaToken ?<button type='button' className='text-white'>do captcha</button>:
                                        <PrimaryButton btnText={t("sectionEight.buttonText")} type='submit' image={ForwardArrow} imageAlt="Send message to Innovazy" />
                      }
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
            <Dialog showAppointment={showModalDialog} setShowAppointment={setShowModalDialog} isSuccess={isSuccess} />;
            {showModalDialog && <div className={`${showModalDialog ? "animate-[fadeInbg_0.3s_ease-in-out]" : "animate-[fadeOut_0.3s_ease-in-out]"} bg-gray-900/50 fixed inset-0 z-40`} />}
        </div >
    );
};

export default ContactSection;;