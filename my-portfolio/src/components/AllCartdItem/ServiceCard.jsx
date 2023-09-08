// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { icon, title, details } = data;
    return (
        <div className='shadow-lg bg-nav-blue min-h-[100px] rounded-xl p-3 flex items-start gap-5 '>
            <img src={icon} alt="" />
            <div>
            <h4 className='text-lg font-medium mb-3'>{title}</h4>
            <p className='text-[15px] font-normal text-para-white'>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;