import React from 'react'
import ClientBusinessCard from './ClientBusinessCard';


const ServicesBusinessCard = ({data}) => {
  return (
    <>
       {data.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <ClientBusinessCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
    </>
  )
}

export default ServicesBusinessCard