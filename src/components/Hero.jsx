import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <Navbar />
      <div className="flex w-[100%] justify-end mt-[2%] pb-4">
        <div className="flex w-[91%] p-2 items-center justify-between">
          <div className="flex flex-col w-[600px] h-max ">
            <h1 className="text-[64px]">
              Run your <span className="text-[#11453B]">payroll</span>{" "}
              <span className="text-[#B4A572]">easily</span> in{" "}
              <span className="text-[#EA4E4B]">seconds</span>
            </h1>
            <p className="w-[460px] leading-[28px] mt-2 text-[20px]">
              We’ve built an all-inclusive simple solution for individual and
              businesses to manage staff, pay salaries, bills, and relevant
              taxes all at once.
            </p>
            <button className="rounded-full mt-6 bg-[#11453B] w-max px-14 py-3 mb-4 font-[500] text-[white]">
              Start Using Free, Forever
            </button>
            <div className="flex flex-col mt-16 space-y-4">
              <h4>Download the Eazipay App</h4>
              <div className="flex gap-x-4">
                <div className="flex bg-white rounded-[8px] p-[12px] gap-x-3">
                  <div className="flex items-center justify-center bg-[#F2F1F1] rounded-full w-[50px] h-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M17.0499 20.781C16.0699 21.731 14.9999 21.581 13.9699 21.131C12.8799 20.671 11.8799 20.651 10.7299 21.131C9.28992 21.751 8.52992 21.571 7.66992 20.781C2.78992 15.751 3.50992 8.09104 9.04992 7.81104C10.3999 7.88104 11.3399 8.55104 12.1299 8.61104C13.3099 8.37104 14.4399 7.68104 15.6999 7.77104C17.2099 7.89104 18.3499 8.49104 19.0999 9.57104C15.9799 11.441 16.7199 15.551 19.5799 16.701C19.0099 18.201 18.2699 19.691 17.0399 20.791L17.0499 20.781ZM12.0299 7.75104C11.8799 5.52104 13.6899 3.68104 15.7699 3.50104C16.0599 6.08104 13.4299 8.00104 12.0299 7.75104Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-[500]">Download on the</p>
                    <p className="text-[18px] font-[700] text-[#515251]">
                      Appstore
                    </p>
                  </div>
                </div>
                <div className="flex bg-white rounded-[8px] p-[12px] gap-x-3">
                  <div className="flex items-center justify-center bg-[#F2F1F1] rounded-full w-[50px] h-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="25"
                      viewBox="0 0 22 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_4_4165)">
                        <path
                          d="M10.2837 11.9427L0.234863 22.4709C0.347711 22.8708 0.550502 23.2396 0.827735 23.5492C1.10497 23.8587 1.4493 24.1007 1.83442 24.2568C2.21953 24.4129 2.63523 24.4788 3.04973 24.4496C3.46424 24.4204 3.86657 24.2968 4.22599 24.0882L15.5329 17.6486L10.2837 11.9427Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M20.4449 10.1531L15.5555 7.35248L10.0518 12.1822L15.5779 17.6335L20.4301 14.8629C20.86 14.6378 21.22 14.2993 21.4712 13.8842C21.7224 13.4691 21.8552 12.9932 21.8552 12.5079C21.8552 12.0227 21.7224 11.5468 21.4712 11.1317C21.22 10.7165 20.86 10.3781 20.4301 10.153H20.4451L20.4449 10.1531Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M0.234942 2.49286C0.174202 2.71741 0.143966 2.94912 0.145048 3.18174V21.7819C0.145677 22.0144 0.175884 22.246 0.234942 22.4709L10.6283 12.2123L0.234942 2.49286Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.3586 12.4819L15.5553 7.35258L4.26347 0.882923C3.83862 0.634109 3.35542 0.502342 2.86308 0.501043C1.64128 0.498668 0.567132 1.30958 0.234863 2.48541L10.3586 12.4819Z"
                          fill="#34A853"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_4165">
                          <rect
                            width="21.7102"
                            height="24"
                            fill="white"
                            transform="translate(0.14502 0.501038)"
                          />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-[500]">Download on the</p>
                    <p className="text-[18px] font-[700] text-[#515251]">
                      Appstore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[61%]">
            <img src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
