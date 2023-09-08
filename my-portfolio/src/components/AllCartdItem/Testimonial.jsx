// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Testimonial = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { img, name, text } = data;
    return (
        <div className='snap-center relative mt-24 flex-shrink-0 w-full md:w-1/2 bg-nav-blue rounded-xl p-3 mb-5'>
            <div className='bg-nav-blue absolute rounded-xl   -top-16 left-32 '>
                <img src={img} className='w-24 rounded-xl' alt="" />
            </div>
            <div className='px-6'>
                <h4 className='mb-4'>{name}</h4>
                <p className='text-para-white'>{text}</p>
            </div>
        </div>
    );
};

export default Testimonial;