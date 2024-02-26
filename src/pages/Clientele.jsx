import React from "react";
import clients from "../assets/data/clients";
import clientsclientsLineTwo from "../assets/data/clientsLineTwo";

function Clientele() {
  return (
    <div className="overscroll-x-auto lg:pb-[80px] md:pb-[60px]  relative bottom-[130px] md:bottom-0  sm:bottom-[30px]">
      <p className="md:mt-[50px] sm:text-[30px]  md:text-[35px] text-[25px]  lg:pt-[40px] lg:text-[40px] 2xl:text-[69px] xl:text-[60px] font-rosario text-white  text-center xl:mt-[60px] font-bold">
        Clientele
      </p>
      <div className="bg-white opacity-80 lg:h-[152px] xl:h-[200px] md:h-[80px] sm:h-[80px] h-[58px] relative mt-[30px] md:mt-0">
        {" "}
        <div className=" flex-row flex-nowrap xl:gap-[120px] lg:gap-[100px]  gap-[40px] md:gap-[90px]  sm:gap-[90px] lg:mt-[30px] md:mt-[20px] sm:mt-[20px] flex  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {clients.map((brand) => (
            <div
              key={brand.id}
              className="md:top-[12px]  sm:top-[12px] top-[10px] flex lg:h-[120px] xl:h-[140px] lg:top-[17px]  xl:top-[24px] md:h-[50px] sm:h-[50px] h-[36px] relative "
            >
              <img src={brand.img} alt={brand.alt} className=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-nowrap bg-white opacity-80 lg:h-[152px] xl:h-[200px] sm:h-[80px] md:h-[80px] h-[58px] relative mt-[21px] md:mt-0">
      <div className=" flex-row xl:gap-[120px] lg:gap-[100px] md:gap-[90px]  sm:gap-[90px] gap-[40px] lg:mt-[30px] md:mt-[20px]    flex  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse ">
          {clientsclientsLineTwo.map((brand) => (
            <div
              key={brand.id}
              className="flex lg:h-[120px] xl:h-[140px] sm:h-[50px] md:h-[50px] h-[46px] top-[5px] lg:top-[17px] md:top-[12px]  sm:top-[12px]  xl:top-[24px] relative "
            >
              <img src={brand.img} alt={brand.alt} className=" " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientele;
