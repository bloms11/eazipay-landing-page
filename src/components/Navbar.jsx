import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex w-[84%] mx-auto items-center p-4 justify-between">
      <div className="flex items-center justify-between w-[52%]">
        <img src={Logo} alt="Logo" />
        <div className="flex gap-x-14 font-[500]">
          <p>Individual</p>
          <p>Business</p>
          <p>Pricing</p>
          <p>Set your payroll</p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <button className="border-2 rounded-full border-[#11453B] px-14 py-2 font-[500] text-[#11453B]">
          Log in
        </button>
        <button className="rounded-full bg-[#11453B] px-14 py-2 font-[500] text-[white]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
