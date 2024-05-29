import React from 'react'
import { Navbar } from '@/app/components/Navbar';
import image1 from "../../../public/assets/117064c37462918bafff392816c3716f.jpg"
import image2 from "../../../public/assets/f0f389168544e833e1d4204564252a8b.jpg"
import image3 from "../../../public/assets/a0be7add59efb9b15ccfff40d626eb9c.jpg"
import image4 from "../../../public/assets/642079cb9f14ff2354525b5672a686e3.jpg"
import image5 from "../../../public/assets/d7d1ad735fc2b2565f1ac76c3c30ba8e.jpg"
import image6 from "../../../public/assets/ef5250838fa19b58b03faa13c8593b11.jpg"

import image7 from "../../../public/assets/dbd2e044f006d5e0ed3b31c81c9a2486.png"
import image8 from "../../../public/assets/61dcadcce729e2c2ba89bb5c355e124a.png"
import image9 from "../../../public/assets/edfda460341977d2ab97b4a270c4b82b.png";
import image10 from "../../../public/assets/401d9a5d5d40d3a1d01ef9dc6d5981ec.png";
import image11 from "../../../public/assets/729f70c7166aba41673931588a6cc63e.png";
import image12 from "../../../public/assets/d20e39c87f61e49e3fedf439e261ad2a.png"

import image13 from "../../../public/assets/3dcb728529e27be1c2a38feac1143014.jpg";
import image14 from "../../../public/assets/3beaa149bfa73e698825a13a76aef0ee.png"
import image15 from "../../../public/assets/3b255a8fea81eecab2dc68d0c0b4e90b.png"
import image16 from "../../../public/assets/9d32e50557c41f46ce5df6f1e735e81b.png"
import image17 from "../../../public/assets/b0f89b8d17728ec41047f2796c266a43.png"
import image18 from "../../../public/assets/f92804fd003216f90a252030b104fbe2.png"
import image19 from "../../../public/assets/36947e44e2ab7ace69051a01b3586b83.png"

import { ServicesInfo } from '@/app/components/ServicesInfo';
import { ServiceMenu } from '@/app/components/ServiceMenu';
import { Button } from '@/app/components/Button';
import { ContactUs } from '@/app/components/ContactUs';
import { Footer } from '@/app/components/Footer';

const InterfaceDesignservices = [
  {
    imgSrc: image7.src,
    alt: 'User Research and Analysis: ',
    title: 'User Research and Analysis: ',
    description: 'Conducting thorough user research to understand your target audience and their needs.    ',
  },
  {
    imgSrc: image8.src,
    alt: 'Fine-Tuning Existing Models:',
    title: 'Fine-Tuning Existing Models:',
    description: 'Developing wireframes and prototypes to visualize the structure and functionality of your application.    ',
  },
  {
    imgSrc: image9.src,
    alt: 'UI/UX Design',
    title: 'UI/UX Design:',
    description: 'Crafting visually appealing and user-friendly interfaces that enhance the user experience.',
  },
  {
    imgSrc: image10.src,
    alt: 'Usability Testing',
    title: 'Usability Testing:',
    description: 'Performing usability tests to ensure the interface is intuitive and easy to navigate.    ',
  },
  {
    imgSrc: image11.src,
    alt: 'Interaction Design',
    title: 'Interaction Design:',
    description: 'Designing interactive elements that engage users and improve their overall experience.    ',
  },
];

const TrainingModelservices = [
  {
    imgSrc: image14.src,
    alt: 'Model Development: ',
    title: 'Model Development: ',
    description: 'Building custom AI models from scratch to address your unique challenges.    ',
  },
  {
    imgSrc: image15.src,
    alt: 'Fine-Tuning Existing Models:',
    title: 'Fine-Tuning Existing Models:',
    description: 'Adjusting pre-trained models to better suit your industry-specific requirements.  ',
  },
  {
    imgSrc: image16.src,
    alt: 'Usability Testing',
    title: 'Usability Testing:',
    description: 'Performing usability tests to ensure the interface is intuitive and easy to navigate.    ',
  },
  {
    imgSrc: image17.src,
    alt: 'Data Preparation and Management',
    title: 'Data Preparation and Management:',
    description: 'Collecting, cleaning, and organizing data to train your AI models effectively.   ',
  },
  {
    imgSrc: image18.src,
    alt: 'Model Training and Optimization',
    title: 'Model Training and Optimization:',
    description: 'Utilizing advanced techniques and NVIDIA GPUs to train and optimize your models for high performance.   ',
  },
  {
    imgSrc: image19.src,
    alt: 'Deployment and Integration',
    title: 'Deployment and Integration:',
    description: 'Deploying trained models into your existing systems and ensuring seamless integration.    ',
  },
];


const Page = () => {
  return (
    <main className="flex min-h-screen flex-col p-10 bg-[#FFFFFF]">

      <Navbar />

      
      <ServicesInfo title={"Our Services"} description={"Empowering Your Business with Comprehensive AI and Development Solutions"} image={image1.src} />


      <div className="mt-10 mx-auto p-4 bg-white dark:bg-zinc-800 text-[#00000] dark:text-zinc-100 w-[70%] text-justify">
          <p className='font-[400] text-[20px] leading-[30px]'>
            Our company stands out in the market by offering tailored fine-tuning of large language models (LLMs) to meet industry-specific needs, ensuring high relevance and accuracy. Our intuitive user interface democratizes AI technology, making it accessible to all skill levels. We ensure seamless integration with existing enterprise systems, minimizing disruption and maximizing efficiency. Leveraging NVIDIA's advanced GPU technology, we provide high-performance training and deployment, enhancing productivity. With extensive expertise and a proven track record in AI solutions across various sectors, we bring unparalleled practical insights. Our scalable and flexible platform adapts to business growth, offering deployment options to suit diverse needs. These factors position us as a leader in delivering efficient, effective, and user-friendly AI solutions for enterprises.
          </p>
      </div>


      <div className="max-w-7xl mx-auto p-6 mt-20">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Empowering Your Business with Custom Web Development, Intuitive Interface Design, and Tailored AI Model Training for Optimal Performance and Innovation.
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4">
            <img src={image2.src} alt="Web Development" className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">Web Development</h2>
            <p className="mt-2 text-[#828282] dark:text-zinc-300 ">
            Pankh AI offers top-notch web development services designed to create robust, scalable, and dynamic websites tailored to your business needs. Our team of experienced developers ensures your online presence is both impactful and efficient.
            </p>
          </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4">
          <img src={image3.src} alt="Interface Design" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
          <p className="mt-2 text-[#828282] dark:text-zinc-300">
          At Pankh AI, we believe that a well-designed interface is crucial for user engagement and satisfaction. Our interface design services focus on creating intuitive, aesthetically pleasing, and functional user interfaces for web and mobile applications.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4">
          <img src={image4.src} alt="Training Custom Models" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-4">Training Custom Models</h2>
          <p className="mt-2 text-[#828282] dark:text-zinc-300">
          Pankh AI specializes in training custom AI models tailored to your specific business needs. Our expertise in fine-tuning and deploying large language models (LLMs) ensures that your AI solutions deliver accurate, relevant, and actionable insights.
          </p>
        </div>
      </div>
    <div className="text-center mt-8">
      <button className="bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg w-[40%] text-xl font-semibold">
        Get started
      </button>
    </div>
    </div>

    <ServicesInfo title={"Web Development"} description={"Pankh AI offers top-notch web development services designed to create robust, scalable, and dynamic websites tailored to your business needs. Our team of experienced developers ensures your online presence is both impactful and efficient"} image={image5.src} />

    <ServiceMenu />

    <ServicesInfo title={"Interface Design"} description={"At Pankh AI, we believe that a well-designed interface is crucial for user engagement and satisfaction. Our interface design services focus on creating intuitive, aesthetically pleasing, and functional user interfaces for web and mobile applications."} image={image6.src} />

    <div className="container mx-auto p-6 bg-[#F7F7F7]">
      <h2 className="text-center text-[40px] leading-[60px] font-bold mb-16 mt-10">Interface Design Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {InterfaceDesignservices.map((service, index) => (
          <div key={index} className="flex items-start mt-2">
            <img src={service.imgSrc} alt={service.alt} className="mr-4 mt-6 h-10 w-10" />
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
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Improved user satisfaction and retention
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Enhanced usability and accessibility
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Consistent and cohesive design across platforms
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Increased user engagement and productivity
          </div>
        </div>
        <div className="text-center">
          <button className="bg-black text-white text-xl md:text-2xl py-2 px-4 rounded-lg w-[10rem] md:w-[13rem] h-[3rem] md:h-[5rem]">Book a demo</button>
        </div>
      </div>
    </div>

    <ServicesInfo title={"Training Custom Models"} description={"Pankh AI specializes in training custom AI models tailored to your specific business needs. Our expertise in fine-tuning and deploying large language models (LLMs) ensures that your AI solutions deliver accurate, relevant, and actionable insights."} image={image13.src} />

    <div className="container mx-auto p-6 bg-[#F7F7F7]">
      <h2 className="text-center text-[40px] leading-[60px] font-bold mb-16 mt-10">Training Custom Models Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {TrainingModelservices.map((service, index) => (
          <div key={index} className="flex items-start mt-2">
            <img src={service.imgSrc} alt={service.alt} className="mr-4 mt-6 h-10 w-10" />
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
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Highly accurate and relevant AI solutions
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Enhanced decision-making and operational efficiency
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Scalable and adaptable models to meet evolving business needs
          </div>
          <div className='flex mb-1 text-base md:text-lg gap-2'>
            <span><img src={image12.src} className='h-5 w-5' /></span>
            Reduced time and cost of AI implementation
          </div>
        </div>
        <div className="text-center">
          <button className="bg-black text-white text-xl md:text-2xl py-2 px-4 rounded-lg w-[10rem] md:w-[13rem] h-[3rem] md:h-[5rem]">Book a demo</button>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center w-full   dark:bg-zinc-900 mt-28">
          <h1 className="text-[40px] leading-[44px] font-[600] text-[#000000] dark:text-zinc-100">Interested in Our Services ?</h1>
          <p className="text-[#828282] text-center w-[80%] text-[24px] leading-[36px] font-[400] dark:text-zinc-400 mt-5 mb-10">Contact us today to discuss how Pankh AI can help transform your business with our comprehensive web development, interface design, and custom model training services.</p>
          <Button data={"Get Started"} />
    </div>

    <ContactUs/>

    <div className="flex flex-col items-center w-full   dark:bg-zinc-900 mt-28">
          <h1 className="text-[40px] leading-[44px] font-[600] text-[#000000] dark:text-zinc-100">KRITRUM PANKH SOLUTIONS</h1>
          <p className="text-[#828282] text-[24px] leading-[36px] font-[400] dark:text-zinc-400 mt-5 mb-10">Empowering Businesses with Cutting-Edge Generative AI Solutions</p>
          <Button data={"Button"} />
    </div>

    <Footer />



    </main>

  )
}

export default Page;
