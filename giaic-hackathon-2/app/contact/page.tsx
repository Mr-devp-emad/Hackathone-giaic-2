"use client"

import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto px-6 py-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in touch today!</h1>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <p className="text-lg font-semibold">Phone: +4453 215 215</p>
          <p className="text-lg font-semibold">Fax: +4453 215 215</p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-blue-600"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/fam.png"
            alt="Family Shopping"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Office Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            We help small businesses with big ideas
          </h2>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="p-6 bg-white shadow-md rounded-md ">
              <div className="flex justify-center">
             <Image 
             src="/assets/gps.png" 
             alt="alt" 
             width={100} 
             height={100} />
             </div>
              <p className="text-gray-600">+4453 215 215</p>
              <button className="mt-4 text-blue-500 underline">Call Support</button>
            </div>
            {/* Location */}
            <div className="p-6 bg-white shadow-md rounded-md">
            <div className="flex justify-center">
             <Image 
             src="/assets/phone.png" 
             alt="alt" 
             width={100} 
             height={100} />
             </div>
              <p className="text-gray-600">1234 Street Name, City</p>
              <button className="mt-4 text-blue-500 underline">Get Directions</button>
            </div>
            {/* Email */}
            <div className="p-6 bg-white shadow-md rounded-md">
            <div className="flex justify-center">
             <Image 
             src="/assets/sms.png" 
             alt="alt" 
             width={100} 
             height={100} />
             </div>
              <p className="text-gray-600">support@company.com</p>
              <button className="mt-4 text-blue-500 underline">Send Email</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
