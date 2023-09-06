// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom'
const BlogCard = ({ data }) => {
    const { title, date, image, route } = data;
    return (
        <div className='rounded-lg bg-nav-blue shadow-lg'>
            <Link to={`/blogDetails/${route}`}>
                <img src={image} alt="" />
                <div className="p-4">
                    <p className='mb-4 text-sm text-para-white'>Author {date}</p>
                    <h4 className='text-2xl pb-4 text-yellow-300'>{title}</h4>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;