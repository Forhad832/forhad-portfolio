// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blog } from './BlogData';

const BlogDetails = () => {
    const [routes, setRoutes] = useState({});
    const { title, image,date, description } = routes;
    console.log(description);
    const data = useParams();

    useEffect(() => {
        const mainData = blog.filter(e => e.route === data.name)[0];
        setRoutes(mainData)
    }, [data])
    return (
        <div className='mt-24 px-5'>
            <h4 className='text-2xl pb-4 text-yellow-300'>{title}</h4>
            <img className='w-full md:w-2/3 mx-auto' src={image} alt="" />
            <p className='mb-4 text-center text-sm text-para-white'>Author {date}</p>
            <div className="mt-12">
                {
                    description?.map((e,i)=>(
                        <p className='text-lg tracking-wide text-para-white mb-4' key={i}>{e}</p>
                    ))
                }
               
            
              
            </div>
        </div>
    );
};

export default BlogDetails;