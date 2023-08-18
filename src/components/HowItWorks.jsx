import React from "react";
import image1 from "../assets/BG.png";
import image2 from "../assets/phone.png";
const HowItWorks = () => {
  return (
    <div className="flex flex-col w-[84%] mx-auto py-5">
      <h1 className="text-[64px] text-center text-[#11453B]">
        How Eazipay Works
      </h1>
      <p className=" text-center">Get started in 3 simple steps.</p>
      <div className="flex w-max gap-x-24 mx-auto mt-[4%] items-center">
        <div className="flex justify-center items-center h-[550px] w-[500px] overflow-hidden relative">
          <img className="absolute" src={image1} />
          <img width={280} className="z-[100]" src={image2} />
        </div>
        <div className="flex flex-col w-[400px] space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex bg-[#11453B] rounded-[16px] w-[50px] h-[50px] text-white font-[700] text-[26px] justify-center items-center">
              1
            </div>
            <h4>Create your free account</h4>
            <p>Click here to set up your Eazipay account</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex bg-[#F2F1F1] rounded-[16px] w-[50px] h-[50px] text-[#11453B] font-[700] text-[26px] justify-center items-center">
              2
            </div>
            <h4>Create your free account</h4>
            <p>Your employee information is 100% safe and secure.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex bg-[#F2F1F1] rounded-[16px] w-[50px] h-[50px] text-[#11453B] font-[700] text-[26px] justify-center items-center">
              3
            </div>
            <h4>Create your free account</h4>
            <p>Run payroll: Bulk Salaries and Compliance are done at once!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
