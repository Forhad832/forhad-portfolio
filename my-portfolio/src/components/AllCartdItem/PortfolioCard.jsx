import React from 'react';
import {Link} from 'react-router-dom'
const PortfolioCard = ({data}) => {
    const {image,text,url,codeUrl,btn1,btn2} =data;
    return (
        <div className='shadow-2xl bg-nav-blue p-1 rounded-md'>
            <img className='rounded-md h-40 w-full' src={image} alt="" />
             <div className="px-2">
             <div className="flex justify-between mt-4">
                <div className=''>
                    <Link className='flex text-indigo-500  items-center justify-evenly gap-2 bg-body-black px-4 py-2 rounded-lg' to={url}><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg></span>{btn1}</Link>
                </div>
                <div>
                    <Link className='flex text-indigo-500  items-center justify-evenly gap-2 bg-body-black px-4 py-2 rounded-lg'  to={codeUrl}><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span>{btn2}</Link>
                </div>
             </div>
             <h4 className='mt-4 text-lg font-medium'>{text}</h4>
             </div>
        </div>
    );
};

export default PortfolioCard;