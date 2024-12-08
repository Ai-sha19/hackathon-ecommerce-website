import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[#2A254B]">
            {/* Desktop View */}
            <div className="hidden lg:flex justify-between items-center max-w-[88.89%] mx-auto h-[584px]">
                {/* Left Text Section */}
                <div className="text-white">
                    <h2 className="text-[2.5rem] leading-[3rem] font-bold mb-6 w-[32.0625rem]">
                        The furniture brand for the future, with timeless designs
                    </h2>
                    <p className="text-base leading-6 text-gray-300 mb-8 w-[32.0625rem]">
                        A new era in eco-friendly furniture with Avelon, the French luxury retail brand 
                        with nice fonts, tasteful colors, and a beautiful way to display things digitally 
                        using modern web technologies.
                    </p>
                    <button className="h-[56px] px-8 bg-[#4E4D93] text-white rounded">
                        View Collection
                    </button>
                </div>

                {/* Right Image Section */}
                <div>
                    <img 
                        src="/homepage/Right-Image.png" 
                        alt="Chair" 
                        className="w-auto h-[450px]"
                    />
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden bg-[#2A254B] w-[390px] h-[502px] mx-auto p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-[1.5rem] leading-[2rem] font-bold text-white mb-4">
                        The furniture brand for the future, with timeless designs
                    </h2>
                    <p className="text-sm leading-5 text-gray-300 mb-6">
                        A new era in eco-friendly furniture with Avelon, the French luxury retail brand 
                        with nice fonts, tasteful colors, and a beautiful way to display things digitally 
                        using modern web technologies.
                    </p>
                </div>
                <button className="h-[56px] w-full bg-[#4E4D93] text-white rounded">
                    View Collection
                </button>
            </div>
        </div>
    );
};

export default Banner;
