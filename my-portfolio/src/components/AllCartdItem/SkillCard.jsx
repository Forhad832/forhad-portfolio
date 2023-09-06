// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const SkillCard = ({data}) => {
    
    // eslint-disable-next-line react/prop-types
    const {icon,name,skill} = data;
    return (
        <div className='flex gap-4 items-center mb-3'>
            <img className='w-6 object-contain' src={icon} alt="" />   
            <h5 className='text-lg font-medium'>{name}</h5>
            <p className='text-yellow-300'><sub>{skill}</sub></p>        
        </div>
    );
};

export default SkillCard;