import React from 'react';
import backgroundImage from '../assets/img/background1.jpg';

const Banner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-10  sm:px-6 md:pt-12 md:pb-24 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering Your Practice with Seamless{' '}
            <strong className="text-[#7BAB0A]">Billing</strong> Solutions
          </h1>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            InstantBillings delivers personalized, accurate, and efficient medical billing services—designed to fit your practice’s unique requirements. </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              className="inline-block rounded bg-[#7BAB0A] px-6 py-3 text-white font-medium shadow hover:bg-[#5f7c1a] transition"
              href="#"
            >
              Get Started
            </a>
            <a
              className="inline-block rounded border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow hover:bg-gray-100"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full hidden md:block">
          <img
            src={backgroundImage}
            alt="Banner"
            className="rounded-t-full border-[#7BAB0A] border-t-8 border-b-8 w-full object-cover max-h-[450px] md:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
