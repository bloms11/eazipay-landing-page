import React from "react";
import Dots from "../assets/gdots.png";
import Eclipse from "../assets/eclipse.png";
const Demo = () => {
  return (
    <div className="bg-[#F2F1F1] relative py-24 flex items-center justify-center ">
      <img src={Dots} className="absolute top-20 left-0" />
      <img
        src={Eclipse}
        className="absolute top-0 right-0 bg-[rgba(240,247,235,0.50)]"
      />

      <div className="flex items-center">
        <div className="flex flex-col w-[600px]">
          <h1 className="text-[#11453B]">Get an Exclusive Demo of Eazipay</h1>
          <p className="text-[18px]">
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.
          </p>
        </div>
        <div className="flex bg-white flex-col demo z-[100] p-8 rounded-[32px] space-y-4">
          <h4 className="text-center">First things first</h4>
          <p className="text-center">
            We want to serve you better. Tell us a bit <br />
            about yourself or company
          </p>
          <div className="flex gap-x-4 p-1 border-2 rounded-[12px]">
            <button className="border-2 rounded-[12px] bg-[#11453B] w-[250px] py-2 font-[500] text-[white]">
              Individual
            </button>
            <button className="rounded-[12px] bg-[#F2F1F1] w-[250px] py-2 font-[500] text-[black]">
              Company
            </button>
          </div>
          <input
            placeholder="First Name"
            className="border-[1px] outline-none rounded-[16px] p-3"
          />
          <input
            placeholder="Last Name"
            className="border-[1px] outline-none rounded-[16px] p-3"
          />
          <input
            placeholder="Email"
            className="border-[1px] outline-none rounded-[16px] p-3"
          />
          <input
            placeholder="Job Title"
            className="border-[1px] outline-none rounded-[16px] p-3"
          />
          <input
            placeholder="Company Size"
            className="border-[1px] outline-none rounded-[16px] p-3"
          />
          <button className="bg-[#11453B] rounded-[16px] p-3 text-white font-[500]">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
