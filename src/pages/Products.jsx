import React from "react";
import Counter from "./Counter";
import counterDetails from "../assets/data/counterDetails";

function Products() {
  return (
    <div className="flex items-center w-full">
      <div className="xl:h-[1000px] lg:h-[700px] md:h-[650px] sm:h-[600px] h-[300px]"></div>
      <div className="bg-[#5B5B5B] xl:h-[300px] lg:h-[180px]   md:h-[140px]  sm:h-[100px]  h-[70px]  w-full flex justify-evenly mx-auto items-center">
        {counterDetails.map((detail) => (
          <Counter key={detail.id} topic={detail.topic} end={detail.end} />
        ))}
      </div>{" "}
    </div>
  );
}

export default Products;
