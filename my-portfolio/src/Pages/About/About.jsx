// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import code from '../../images/code.svg';
import iconDesign from '../../images/design.svg';
import avatar from '../../images/avatar.png'
import ServiceCard from '../../components/AllCartdItem/ServiceCard';
import Testimonial from '../../components/AllCartdItem/Testimonial';


const service_card = [
    {
        icon: iconDesign,
        title: 'Frontend Development',
        details:
            'Frontend Development is my passion.',
    },
    {
        icon: code,
        title: 'Coding',
        details: 'I love to code with JS.',
    },
    {
        icon: iconDesign,
        title: 'Web Design',
        details: 'Web Design is my Heart I like to work new technology and library',
    }

];
const testimonial_card = [
    {
        img: avatar,
        name: 'Obi Plabon',
        text:
            'Good Job Keep it up !',
            
    },
    {
        img: avatar,
        name: 'Obi Plabon',
        text:
            'He is best hard worker and doing well for my project, i like him, highly recommended',
    },
    {
        img: avatar,
        name: 'Obi Plabon',
        text:
            'Good Job Keep it up !',
    },
    {
        img: avatar,
        name: 'Obi Plabon',
        text:
            'Forhad Hossen is Good knowledge about Web Development, He is doing will i will work with again, Thanks Abdur',
    },
]
const About = () => {
    return (
        <div className='py-5 px-10'>
            <Header></Header>
            <div className='mt-12'>
                <h2 className='text-2xl font-medium'>What I’m Doing</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
                    {
                        service_card.map((service, index) => (
                            <ServiceCard key={index} data={service}></ServiceCard>
                        ))
                    }
                </div>
                <div className='mt-12'>
                    <h2 className='text-2xl font-medium'>Testimonials</h2>
                    <div className='flex  overflow-x-scroll snap-x snap-mandatory gap-5 mx-auto '>
                        {
                            testimonial_card.map((testimonial, index) => (
                                <Testimonial key={index} data={testimonial}></Testimonial>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;