import React from 'react';

const AboutMeCard = ({data}) => {
    const {link,title,name,icon} = data;
    console.log(data);
    return (
        <div className='flex gap-4 mb-4'>
            <div className='text-nav-blue shadow-2xl text-3xl'>
                {icon}
            </div>
            <div>
                <p className='text-gray-500'>{title}</p>
                <a className='text-para-white' href={link}>{name}</a>
            </div>
        </div>
    );
};

export default AboutMeCard;