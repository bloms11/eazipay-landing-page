import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F0F7EB] overflow-hidden  relative h-screen">
      <div className="overlay flex justify-center items-center">
        <div className="custom-shape-divider-top-1692323879">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>{" "}
        <div className="custom-shape-divider-bottom-1692323973">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>{" "}
        <div className="flex flex-col  z-[1000] mx-auto">
          <h1 className="text-[64px] text-center text-[#11453B]">
            For Individuals and Businesses
          </h1>
          <p className="text-center font-[500]">
            Join 200+ businesses using Eazipay's easy solution.
          </p>
          <div className="flex mt-[4%]">
            <div className="card flex flex-col w-[600px] bg-[#11453B] rounded-[16px] space-y-4 p-[64px]">
              <h4 className="text-white font-[700] text-[26px]">
                Tamper-proof Payroll for Life
              </h4>
              <p className="text-white">
                Your staff payroll history is kept in one place forever.
              </p>
              <p className="text-white">
                No more excel sheet or manual records.
              </p>
              <p className="text-white">
                Download your payroll history anytime you need it.
              </p>
            </div>
            <div className="card flex flex-col w-[600px] bg-[#11453B] rounded-[16px] ml-[-250px] space-y-4 p-[64px]">
              <h4 className="text-white font-[700] text-[26px]">
                All Payroll, Anytime Anywhere
              </h4>
              <p className="text-white">
                Wherever you are, Eazipay has got you covered on ALL your
                Payroll tasks.
              </p>
              <p className="text-white">
                Whether it is Taxes, Pension insurances HMOs, trustfunds,
                Eazipay handle all your compliances in one place and easily, in
                seconds!
              </p>
            </div>
            <div className="card flex flex-col bg-[#11453B] w-[600px] ml-[-250px] rounded-[16px] space-y-4 p-[64px]">
              <h4 className="text-white font-[700] text-[26px]">
                Payroll in Seconds
              </h4>
              <p className="text-white">
                Never again will you spend more than 2 minutes on payroll.
              </p>
              <p className="text-white">
                Just click on your staff and bulk-pay them at once.
              </p>
              <p className="text-white">Payment is done permanently.</p>
            </div>
          </div>
          <p className="text-center mt-[4%]">
            We are happy to answer your queries. Please, reach us at
            <br />
            <span className="text-[#EA4E4B]">hello@myeazipay.com</span>and
            expect our response shortly after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
