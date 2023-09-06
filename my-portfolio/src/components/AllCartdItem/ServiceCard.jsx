import React from 'react';

const ServiceCard = ({ data }) => {
    const { icon, title, details } = data;
    return (
        <div className='shadow-lg bg-nav-blue min-h-[100px] rounded-xl p-3 flex items-start gap-5'>
            <img src={icon} alt="" />
            <div>
            <h4 className='text-lg font-medium mb-3'>{title}</h4>
            <p className='text-[15px] font-normal'>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;