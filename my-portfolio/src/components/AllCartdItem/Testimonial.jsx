import React from 'react';

const Testimonial = ({data}) => {
    const {img,name,text} = data;
    return (
        <div className='snap-center relative mt-24 flex-shrink-0 w-full md:w-1/2 bg-nav-blue rounded-xl p-3 mb-5'>
            <div className='bg-nav-blue absolute rounded-xl  -top-16 left-28 '>
            <img src={img} className='w-24 rounded-xl' alt="" />
            </div>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    );
};

export default Testimonial;