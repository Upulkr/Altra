import React from "react";
import brands from "../assets/data/brands";
import CaroMob from "./CaroMob";

function Brands() {
  return (
    <div className=" w-full overscroll-x-auto ">
      <p className="md:text-[35px] text-[25px] xl:text-[69px] lg:text-[50px] sm:text-[30px] font-rosario text-white  text-center lg:mt-[60px] md:mt-[30px] mt-[20px]  font-bold">
        Our trusted brands
      </p>
      <div className="bg-[#FFFFFF] sm:block hidden lg:h-[150px] md:h-[130px] sm:h-[80px] sm:mt-[30px] md:mt-[30px] mt-[20px] h-[60px] opacity-80">
  <div className="lg:mt-[30px] flex lg:gap-[40px] gap-[20px] md:gap-[50px] sm:gap-[80px] md:top-[10px] top-[5px] justify-start [&_li]:mx-8 [&_img]:max-w-96 animate-infinite-scroll">
    {brands.map((brand) => (
      <div
        key={brand.id}
        className="object-contain flex lg:h-[120px] md:h-[120px] h-[50px] mb-[20px] md:mb-0 relative lg:top-[13px] md:top-[6px] xl:full xl:mt-[2px]"
      >
        <img src={brand.img} alt={brand.alt} className="opacity-100 " />
      </div>
    ))}
  </div>
</div>


      <div className="bg-[#FFFFFF] opacity-80">
        {" "}
        <div className="mx-auto flex  items-center gap-[24px]  sm:hidden   relative   top-[8px]    [&_img]:max-w-sm  animate-infinite-scroll ">
          {brands.map((brand) => (
            <div key={brand.id} className=" flex  relative    ">
              <CaroMob src={brand.img} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
