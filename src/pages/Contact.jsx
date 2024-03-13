import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import contact from "../assets/data/contact";
function Contact() {
  return (
    <div className="grid grid-cols-2 bg-[#2D2D2D] lg:h-[850px] xl:mb-[-80px]">
      <div className="relative lg:top-[60px]">
        <p className="text-center xl:text-[50px] font-rosario text-[#ff8a3a] font-bold">
          Send a{" "}
          <span className="text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
            Request
          </span>
        </p>

        <div className="  grid mx-auto relative bottom-[0px]">
          {" "}
          <form className="xl:w-[488px] xl:h-[550px] max-w-screen-lg mt-8 mb-2 w-80 sm:w-96 grid grid-cols-1 mx-auto justify-center bg-[#3d3b3b] transition-[30] lg:rounded-[26px]">
            <div className="flex flex-col gap-4 mb-1 xl:p-8">
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal ">
                Full Name
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder=""
                  className="bg-[#ffffff4d]   peer h-full w-full rounded-md border border-white border-t-transparent !border-t-blue-gray-200 px-3 py-3 font-inter text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal ">
                E-mail
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="@gmail.com"
                  className="bg-[#ffffff4d] placeholder:text-right relative peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200  px-3 py-3 font-inter text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal ">
                Phone Number
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="tel"
                  placeholder=""
                  className="bg-[#ffffff4d] peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200  px-3 py-3 font-inter text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>{" "}
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal  ">
                Make Request
              </h6>
              <div className="relative w-full min-w-[200px]">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="20"
                  placeholder="Type your message here..."
                  type="text"
                  className="bg-[#ffffff4d] peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200  px-3 py-3 font-inter text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
            </div>

            <button
              className="relative bottom-6 mx-auto bg-[#FF8A3A] lg:w-[220px] lg:h-[44px] text-white mt-6 block w-full select-none rounded-lg bg-gray-900  px-6 text-center align-middle font-inter text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="">
        {/* {
          <div className="grid grid-cols-1">
              <><p className="lg:top-[60px]  relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
            
              Contact
            </p>

            <div className="">
            
                <div className="flex">
                  <img />
                  <p></p>
                  <img />
                  <p></p>
                  <img />
                  <p></p>
                </div></>
            
  </div>
        </div>} */}

        <div className="grid grid-cols-1">
          {contact.map((d) => (
            <>
              <div key={d.id}>
                {d.id === 1 && (
                  <>
                    <p className="lg:top-[60px]  relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic1}
                    </p>
                    <div className="font-inter lg:text-[17px] lg:top-[100px] relative text-white mx-auto justify-center grid xl:left-[50px]  ">
                      <div className="grid gap-y-5">
                        {" "}
                        {d.icon.map((img) => (
                          <div key={img.id} className="flex gap-x-4 ">
                            <img src={img.img} className="" />
                            <p>{img.info}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {d.id === 2 && (
                  <div className="relative lg:mt-[100px]">
                    {" "}
                    <p className="lg:top-[60px]  relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic2}
                    </p>
                    <div className="font-inter lg:text-[17px] lg:top-[70px] relative text-white mx-auto justify-center grid xl:left-[50px]  ">
                      <div className="grid gap-y-5">
                        {" "}
                        {d.iconTwo.map((img) => (
                          <div key={img.id} className="flex gap-x-4 ">
                            <img src={img.img} className="" />
                            <p>{img.info}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {d.id === 3 && (
                  <div className=" relative lg:top-[70px]">
                    <p className="lg:top-[60px]  relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic3}
                    </p>
                    <div className="font-inter lg:text-[17px] lg:top-[70px] relative text-white mx-auto justify-center grid xl:left-[50px]  ">
                      <div className="grid gap-y-5">
                        {" "}
                        {d.iconThree.map((img) => (
                          <div key={img.id} className="flex gap-x-4 ">
                            <img src={img.img} className="" />
                            <p>{img.info}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
