import React from 'react';
import image1 from '../../public/assets/a33930e5266c2052bbdaf6eba9ba4226.png';
import image3 from "../../public/assets/523a44acd0cd29e7494464a4d604bea6.png";
import image2 from "../../public/assets/b5e55586889067a4f6cd2d551bb229b2.png";
import image4 from "../../public/assets/38c839a9e91a2be07d1e8611a8eb2b37.png";
import image5 from "../../public/assets/d153ab024d9c8c5502babb0cc530de93.png";
import image6 from "../../public/assets/d20e39c87f61e49e3fedf439e261ad2a.png";

const WebDevservices = [
  {
    imgSrc: image1.src,
    alt: 'Custom Web Development',
    title: 'Custom Web Development:',
    description: 'Building websites from scratch to meet your specific requirements.',
  },
  {
    imgSrc: image2.src,
    alt: 'E-commerce Solutions',
    title: 'E-commerce Solutions:',
    description: 'Developing e-commerce platforms with secure payment gateways and user-friendly interfaces.',
  },
  {
    imgSrc: image3.src,
    alt: 'Responsive Design',
    title: 'Responsive Design:',
    description: 'Building websites from scratch to meet your specific requirements.',
  },
  {
    imgSrc: image4.src,
    alt: 'Content Management Systems (CMS)',
    title: 'Content Management Systems (CMS):',
    description: 'Implementing and customizing CMS platforms like WordPress, Joomla, and Drupal for easy content updates and management.',
  },
  {
    imgSrc: image5.src,
    alt: 'Maintenance and Support',
    title: 'Maintenance and Support:',
    description: 'Providing ongoing maintenance, updates, and support to keep your website running smoothly.',
  },
];

export const ServiceMenu = () => {
  return (
    <div className="container mx-auto p-6 bg-[#F7F7F7] dark:bg-gray-900 dark:text-white" >
      <h2 className="text-center text-[40px] leading-[60px] font-bold mb-16 mt-10">Web Development Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {WebDevservices.map((service, index) => (
          <div key={index} className="flex items-start mt-2">
            <img src={service.imgSrc} alt={service.alt} className="mr-4 mt-6 h-10 w-10 dark:dark-filter" />
            <div>
              <h3 className="font-medium text-[24px] md:text-[28px] leading-[36px] md:leading-[48px]">{service.title}</h3>
              <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[36px] font-normal">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col md:flex-row gap-20 justify-center items-center'>
        <div className="mb-6 w-full md:w-1/2">
          <h3 className="font-bold mb-10 mt-10 text-2xl md:text-3xl">Benefits:</h3>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image6.src} className='h-5 w-5' /></span>
            Enhanced user experience
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image6.src} className='h-5 w-5' /></span>
            Increased engagement and conversions
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image6.src} className='h-5 w-5' /></span>
            Secure and scalable solutions
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image6.src} className='h-5 w-5' /></span>
            SEO-friendly designs for better search
          </div>
        </div>
        <div className="text-center">
          <button className="bg-black text-white text-xl md:text-2xl py-2 px-4 rounded-lg w-[10rem] md:w-[13rem] h-[3rem] md:h-[5rem]">Book a demo</button>
        </div>
      </div>
    </div>
  );
};
