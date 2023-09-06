import React from 'react';
import { blog } from './BlogData';
import BlogCard from '../../components/AllCartdItem/BlogCard';

const Blog = () => {
    return (
        <div className='py-5 px-10'>
        <h2 className='text-3xl font-medium mb-3'>Blog</h2>
        <div className='w-20 h-1 bg-pink-500 rounded-full'></div>
        <div className='mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                blog.map((e,i) => <BlogCard data={e} key={i}></BlogCard>)
            }
            </div>
        </div>
    </div>
    );
};

export default Blog;