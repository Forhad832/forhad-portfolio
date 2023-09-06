import React from 'react';

const EducationCard = ({ data }) => {
    console.log(data);
    const { year, tittle, details } = data;
    return (
        <div className='mb-5'>
            <h4 className='text-2xl mb-2'>{tittle}</h4>
            <p className='text-sm text-yellow-300 mb-2'>{year}</p>
            <p className='text-[16px] text-para-white'>{details}</p>
        </div>

    );
};

export default EducationCard;