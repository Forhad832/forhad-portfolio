// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_gqvb8wj', 'template_usftwjc', form.current, 'h7ppidTHRSaouGNGN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    
    return (
        <div className='py-5 px-10'>
            <h2 className='text-3xl font-medium mb-3'>Contact</h2>
            <div className='w-20 h-1 bg-pink-500 rounded-full'></div>
            <div className="mt-12">
                    <div className="border-2 border-nav-blue rounded-lg">
                    <iframe className=' rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.018533929135!2d89.22080943769731!3d25.749873663612185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1693930473712!5m2!1sen!2sbd" style={{width:'100%',height:'450px'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="mt-12">
                        <h4 className='text-2xl font-medium'>Contact Form</h4>
                        <form ref={form} className='mt-12' onSubmit={handleSubmit}>
                           <div className='flex gap-4 mb-5'>
                           <input  className='border texts-m tracking-wide font-semibold border-nav-blue bg-transparent w-full outline-none  px-4 py-2 rounded-md' placeholder='Full Name' type="text" name="name" id="name" />
                            <input className='border texts-m tracking-wide font-semibold border-nav-blue bg-transparent w-full outline-none  px-4 py-2 rounded-md' placeholder='Email Address' type="email" name="email" id="email" />
                           </div>
                           <textarea className='border texts-m tracking-wide font-semibold border-nav-blue bg-transparent w-full outline-none  px-4 py-2 rounded-md resize-none'  name="messgae" id="message" placeholder='Your Message' cols="30" rows="5"></textarea>
                           <input className='bg-nav-blue mt-6 flex ml-auto cursor-pointer px-4 py-2 rounded-lg text-lg tracking-wide font-medium ' type="submit" value="Send Message" />
                        </form>
                    </div>
              </div>
        </div>
    );
};

export default Contact;