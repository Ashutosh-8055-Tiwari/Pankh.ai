
import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";
import { Infotant } from "./components/Infotant";
import { FeaturesData } from "./utils/Contant";
import { Cards } from "./components/Cards";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 bg-[#FFFFFF]">
      
      <Navbar />

      <div className="mt-20 flex flex-col items-center mb-20 dark:bg-zinc-900 text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#000000] dark:text-white mb-4">KRITRUM PANKH SOLUTIONS</h1>
          <p className="text-[#828282] text-justify text-lg dark:text-zinc-300 w-[70%] mb-6 md:text-center">
            Welcome to PANKH AI where you can harness the power of your undefined to train state-of-the-art Language Models (LLMs). Empower your projects, unleash creativity, and unlock insights like never before. Begin your journey into the world of advanced AI with us.
          </p>
          <Button data={'Learn More'} />
      </div>

      <Infotant />


      <div className=" mx-auto p-6 bg-white dark:bg-zinc-800 text-[#828282] dark:text-zinc-100 text-lg text-justify w-[90%]">
          <p className="mb-4">
            Introducing AI Custom Model Training Services, a revolutionary solution empowering companies to harness the full potential of their undefined. With our advanced artificial intelligence technology, we enable businesses to bring their own undefinedsets and craft bespoke machine learning models tailored to their unique objectives.
          </p>
          <p className="mb-6 ">
            Our platform offers intuitive tools and expert guidance throughout the model training process, ensuring accuracy, efficiency, and scalability. Whether you're in finance, healthcare, or retail, our AI service provides the flexibility to address diverse industry needs, from predictive analytics to image recognition. Say goodbye to one-size-fits-all solutions and unlock the power of AI tailored specifically to your company's requirements.
          </p>
         <div className="text-center mt-20">
         <Button data={"Learn More"} />
         </div>
        </div>



    <div className="p-6 mt-20">
      <h2 className="text-[40px] leading-[44px] font-[600] mb-12">Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {FeaturesData.map((item, index) => {
          return (
            <Cards 
              key={index} 
              title={item.title} 
              description1={item.description1} 
              description2={item.description2} 
              Icon={item.Icon} 
            />
          );
        })}
      </div>
    </div>

    <ContactUs />

    <div className="flex flex-col items-center w-full   dark:bg-zinc-900 mt-28">
          <h1 className="text-[40px] leading-[44px] font-[600] text-[#000000] dark:text-zinc-100">KRITRUM PANKH SOLUTIONS</h1>
          <p className="text-[#828282] text-[24px] leading-[36px] font-[400] dark:text-zinc-400 mt-5 mb-10">Empowering Businesses with Cutting-Edge Generative AI Solutions</p>
          <Button data={"Button"} />
    </div>

    <Footer />
    
 
    </main>
  );
}
