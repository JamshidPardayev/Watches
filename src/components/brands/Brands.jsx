import React from "react";
import { BRANDS } from "../../static";

const Brands = () => {
  return (
    <div id="brands" className="max-w-[1200px] mx-auto px-[15px] ">
      <div className="flex justify-between my-[70px] gap-4 max-md:flex-col">
        {BRANDS?.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center p-6 gap-x-[25px] bg-[#F6F6F6] rounded-[22px] max-w-[100%] min-h-[239px] w-full md:max-w-[354px] md:w-auto"
          >
            <div>
              <img src={brand.image} alt={brand.title} />
            </div>
            <div>
              <h3 className="text-[#1E1D1D] text-[36px] mb-[9px] font-bold">
                {brand.title}
              </h3>
              <p className="max-w-[300px] md:max-w-[173px] text-[16px] text-[#8B8E99]">
                {brand.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
