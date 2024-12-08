import React from 'react';

const Features = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 pb-20 sm:px-8">
            <h3 className="py-[50px] font-normal text-[#2a254b] text-[24px] text-left md:text-center lg:text-center">
                What makes our brand different
            </h3>
            <div className="flex flex-wrap gap-8 justify-center items-center">
                {/* Feature 1 */}
                <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px]">
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
                <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px]">
                    <img src="/homepage/Checkmark--outline.png" alt="Made by true artisans" />
                    <div className="flex flex-col gap-[8px]">
                        <h4 className="font-normal text-[18px] text-[#2a254b]">
                            Made by true artisans
                        </h4>
                        <p className="text-[13px] font-normal text-[#2a254b]">
                            Handmade crafted goods made with real passion and craftmanship
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px]">
                    <img src="/homepage/Purchase.png" alt="Unbeatable prices" />
                    <div className="flex flex-col gap-[8px]">
                        <h4 className="font-normal text-[18px] text-[#2a254b]">
                            Unbeatable prices
                        </h4>
                        <p className="text-[13px] font-normal text-[#2a254b]">
                            For our materials and quality you won’t find better prices anywhere
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col gap-[16px] justify-start items-start w-full sm:w-[270px]">
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
        </div>
    );
};

export default Features;
