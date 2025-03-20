import React from 'react';
import { container, headingText, textwhite } from '../../styles/styles';
import ClientBusinessCard from '../../ui/ClientBusinessCard';
import { clientsBusinessArray } from '../../utils/client-business-data';
import "./hero.css";
import { useTranslation } from 'react-i18next';

const ClientsBusiness = () => {
    const {t} = useTranslation('home')
    const ClientBusinessCardData = clientsBusinessArray(t);
    return (
        <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={`${container} mt-[120px]`}>
                        <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] md:w-[55%] text-start md:text-center`}>{t('sectionThree.mainHeading')}</h1>
                        <div className="mt-14">
                            {ClientBusinessCardData.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <ClientBusinessCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsBusiness;;;