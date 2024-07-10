import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <div className="container p-4 shadow-sm z-10 fixed bg-white w-full ">
      <div className="  flex justify-between items-center ">
        <div className="flex text-3xl font-bold ">
          <Image src={logo} width={80} hight={80} alt="logo" />
          <h1>aapnaGhar</h1>
        </div>
        <ul className="hidden md:flex gap-10 ">
          <li className="hover:text-primary cursor-pointer text-md font-medium">
            Sale
          </li>
          <li className="hover:text-primary cursor-pointer text-md font-medium">
            Rent
          </li>
          <li className="hover:text-primary cursor-pointer text-md font-medium">
            Agent Finder
          </li>
        </ul>
        <div className=" flex gap-2 items-center ">
          <Button>
            <IoMdAdd /> Post Your Place
          </Button>
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
