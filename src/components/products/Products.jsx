import React from "react";
import { PRODUCTS } from "../../static";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Products = () => {
  return (
    <div id="products" className="max-w-[1200px] px-[15px] mx-auto">
      <h3 className="text-[#3858D6] text-[16px] text-center pt-[50px] font-medium">
        Find your favourite smart watch.
      </h3>
      <h1 className="text-[#1E1D1D] text-[36px] text-center font-bold mt-1">
        Our Latest Products
      </h1>
      <div className="w-full my-[60px] grid grid-cols-3 gap-x-[30px] gap-y-[50px] max-md:grid-cols-2 max-sm:grid-cols-1">
        {PRODUCTS?.map((product) => (
          <div
            key={product.id}
            className="relative sm:max-w-[335px] min-h-[440px] rounded-[4px] w-full group cursor-pointer"
          >
            <div className="bg-[#F6F6F6] w-full sm:max-w-[335px] min-h-[337px] flex items-center justify-center p-4">
              <img src={product.image} alt={product.title} />
            </div>
            <h2 className="text-[#1E1D1D] text-[24px] font-semibold text-center my-[8px]">{product.title}</h2>
            <img src={product.imgStar} alt="star" className="mx-auto"/>
            <div className="flex justify-center gap-x-1 mt-3">
              <p className="text-[#8B8E99] text-[20px] line-through">{product.discount}</p>
              <p className="text-[#000000] text-[20px] font-bold">{product.price}</p>
            </div>
            <div className="productIcons absolute top-2 right-4 flex flex-col gap-y-2 scale-0 group-hover:scale-100 duration-300" >
            <FaShoppingCart className="w-[38px] h-[38px] rounded-[50%] p-2 bg-[#3858D6] text-white cursor-pointer hover:bg-blue-800 duration-300"/>
            <FaHeart className="w-[38px] h-[38px] rounded-[50%] p-2 bg-[#FF6B6B] text-white cursor-pointer hover:bg-red-600 duration-300"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
