import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-gradient-to-r from-emerald-500 to-emerald-900 hero-custom-height">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold  mb-4 text-center">
            Welcome to Our Ecommerce Platform
          </h1>
          <p className="text-lg  mb-8 text-center">
            Simplifying the process of sharing and selling digital products.
          </p>
          <form className="w-full max-w-sm flex items-center">
            <input
              type="text"
              className="flex-grow mr-2 px-4 py-2 bg-gray-700  rounded-md focus:outline-none focus:shadow-outline"
              placeholder="Search for digital products"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2  rounded-md focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
