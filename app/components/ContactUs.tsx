import React from 'react'
import image from "../../public/assets/829d66efa9dfdd6bb074b8139761c3ec.jpg";

export const ContactUs = () => {
  return (

            <div className="flex flex-col md:flex-row justify-center md:space-x-10 p-6 mt-48">
              <div className="w-full md:w-[50%] mr-10">
                <h1 className="text-[64px] leading-[77.45px] font-bold mb-4">Contact us</h1>
                <p className="text-[#828282] text-[24px] leading-[36px] font-[400] mb-6">Subheading for description or instructions</p>
                <form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-1/2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700">First name</label>
                      <input type="text" id="first-name" name="first-name" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                      <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700">Last name</label>
                      <input type="text" id="last-name" name="last-name" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2" placeholder="Smitherton" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email address</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2" placeholder="email@janesfakedomain.net" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Your message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2" placeholder="Enter your question or message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Submit</button>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-[40%] mt-6 md:mt-0">
                <img src={image.src} alt="Decorative Image" className="rounded-lg shadow-md h-[80%%] w-[80%] " />
              </div>
            </div>

  )
}
