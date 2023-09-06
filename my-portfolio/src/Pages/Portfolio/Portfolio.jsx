import React from 'react';
import { portfoliodata } from './PortfolioData';
import PortfolioCard from '../../components/AllCartdItem/PortfolioCard';

const Portfolio = () => {

    return (
        <div className='py-5 px-10'>
            <h2 className='text-3xl font-medium mb-3'>Portfolio</h2>
            <div className='w-20 h-1 bg-pink-500 rounded-full'></div>
            <div className="mt-12">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        portfoliodata.map(portfolio => <PortfolioCard key={portfolio.id} data={portfolio}></PortfolioCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;