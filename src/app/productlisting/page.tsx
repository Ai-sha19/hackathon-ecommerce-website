
import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from 'lucide-react';

const ProductListing = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you wont find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/product/Image-Left.png'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    {/* This button navigates to the shopping-basket page */}
                    <a href="/shopping-basket">
                      <button className="w-full md:w-[146px] min-w-[120px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 text-center">
                        Add to cart
                      </button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <section>
            <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
              {/* Title */}
              <h1 className="text-2xl font-semibold">You might also like</h1>

              {/* Product Items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {/* Product 1 */}
                <div className="w-full h-auto">
                  <Image
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
                  <Image
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
                  <Image
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
                  <Image
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

                <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300">
                  View collection
                </button>

              </div>
            </div>
          </section>

          <h3 className="pb-[50px] font-normal text-[#2a254b] text-[24px] text-left md:text-center lg:text-center">
            What makes our brand different
          </h3>
          <div className="flex flex-wrap  justify-between items-center w-full">
            {/* Feature 1 */}

            <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px] lg:w-[23%]">

              <img src="/homepage/Delivery.png" alt="Delivery" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="font-normal text-[18px] text-[#2a254b]">
                  Next day as standard
                </h4>
                <p className="text-[13px] font-normal text-[#2a254b]">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px] lg:w-[23%]">
              <img src="/homepage/Checkmark--outline.png" alt="Made by true artisans" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="font-normal text-[18px] text-[#2a254b]">
                  Made by true artisans
                </h4>
                <p className="text-[13px] font-normal text-[#2a254b]">
                  Handmade crafted goods made with real passion and craftsmanship
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px] lg:w-[23%]">
              <img src="/homepage/Purchase.png" alt="Unbeatable prices" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="font-normal text-[18px] text-[#2a254b]">
                  Unbeatable prices
                </h4>
                <p className="text-[13px] font-normal text-[#2a254b]">
                  For our materials and quality, you won’t find better prices anywhere
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px] lg:w-[23%]">
              <img src="/homepage/Delivery.png" alt="Recycled packaging" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="font-normal text-[18px] text-[#2a254b]">
                  Recycled packaging
                </h4>
                <p className="text-[13px] font-normal text-[#2a254b]">
                  We use 100% recycled packaging to ensure our footprint is manageable
                </p>
              </div>
            </div>
          </div>
          <div className='py-12 bg-[#F9F9F9] text-[#2A254B] mt-12'>
            <div className='w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4'>
              <h1 className='text-2xl md:text-4xl text-center'>
                Join the club and get the benefits
              </h1>
              <h2 className='text-center py-4 text-sm md:text-base'>
                Sign up for our newsletter and receive exclusive offers on new
                <br /> ranges, sales, pop-up stores, and more.
              </h2>
              <div className='mt-4 w-full'>
                <form action="" className='flex flex-col md:flex-row items-center justify-center'>
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0"
                  />
                  <button className='p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]'>
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>



        </div>
      </section>
    </>
  );
};

export default ProductListing;