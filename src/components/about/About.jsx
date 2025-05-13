import React, { useState } from "react";
import { COMMENTS } from "../../static";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  return (
    <div id="about">
      <p className="text-[#3858D6] text-[16px] font-medium text-center">Here are our some of the best clients.</p>
      <h1 className="text-[#1E1D1D] text-[36px] font-bold text-center mt-2">What People Say About Us</h1>
      <div className="max-w-[1200px] mx-auto px-[15px] flex justify-between gap-[50px] mt-[50px] max-md:flex-col">
        {COMMENTS?.map((comment) => (
          <div key={comment.id} className="w-[100%] min-h-[240px] rounded-[22px] bg-[#F6F6F6] p-[30px] flex items-center justify-center gap-x-[15px] mb-[50px] max-md:p-[15px]">
            <div className="max-w-[164px] min-w-[100px] h-[180px] rounded-[15px] overflow-hidden">
              <img src={comment.image} alt={comment.name} className="w-full h-full rounded-[15px] hover:scale-110 duration-300 cursor-pointer"/>
            </div>
            <div>
              <h2 className="text-[#1E1D1D] text-[24px] font-bold">{comment.name}</h2>
              <p className="max-w-[250px] text-[#8B8E99] text-[16px] font-medium my-[10px] max-md:max-w-[350px]">{comment.comment}</p>
              <img src={comment.imageStar} alt="star" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-4 justify-center">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-[20px] w-[20px] rounded-[50%] cursor-pointer duration-300 
            ${
              activeIndex === index
                ? "bg-[#3858d6]"
                : "bg-[#D9D9D9] hover:bg-[#3858d6]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default About;
