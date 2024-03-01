import React from "react";
import { DNA, RotatingTriangles, Triangle } from "react-loader-spinner";
function Loader() {
  return (
    <div className="flex justify-center relative  xl:scale-125 top-6">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
