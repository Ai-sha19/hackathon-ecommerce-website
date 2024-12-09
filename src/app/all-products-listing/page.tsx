import React from "react";
import { IoCaretDownSharp } from "react-icons/io5";

const ProductListing2 = () => {
  return (
    <div>
      {/* Hero Image */}
      <div className="w-full hidden lg:block">
        {/* Only visible on screens 1024px and above */}
        <img src="/product/Frame-143.png" alt="Product Hero" className="w-full h-auto object-cover" />
      </div>

      {/* Filters and Sorting Section */}
      <div className="w-full px-4 md:px-6 lg:px-12 py-4 flex flex-wrap justify-between items-center bg-white text-[#2a254b]">
        {/* Filters and Sorting for smaller screens */}
        <div className="w-full flex justify-between lg:hidden">
          {/* Filters */}
          <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
            <span>Filters</span>
            <IoCaretDownSharp />
          </div>
          {/* Sorting */}
          <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
            <span>Sorting</span>
            <IoCaretDownSharp />
          </div>
        </div>

        {/* Filters and Sorting for larger screens */}
        <div className="hidden lg:flex w-full justify-between">
          {/* Left Section: Filters */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
              <span>Category</span>
              <IoCaretDownSharp />
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
              <span>Product type</span>
              <IoCaretDownSharp />
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
              <span>Price</span>
              <IoCaretDownSharp />
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
              <span>Brand</span>
              <IoCaretDownSharp />
            </div>
          </div>

          {/* Right Section: Sorting */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-sm md:text-base lg:text-lg font-normal">Sorting by:</span>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#F9F9F9] rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
              <span>Date added</span>
              <IoCaretDownSharp />
            </div>
          </div>
        </div>
      </div>


      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-2xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent1.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent2.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent3.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent4.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

             {/* Product Items */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 5 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent5.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 6 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent6.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 7 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent7.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 8 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent8.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

             {/* Product Items */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 9 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent1.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 10 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent2.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 11 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent3.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 12 */}
            <div className="w-full h-auto">
              <img
                src={'/homepage/Parent4.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            {/* This button navigates to the all-products page */}
            <a href="/all-products">
              <button className="bg-[#F9F9F9] px-4 py-4 rounded-[5px] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300">
                View collection
              </button>
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ProductListing2;
