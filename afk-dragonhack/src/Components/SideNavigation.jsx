import React, { useState } from "react";
import logo from "../icons/ot.jpeg"
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SideNavigation = () => {
  const { user } = useAuth0();
  return (
    <div className="justify-between flex flex-col bg-[#13293D] w-60 text-white h-screen py-7 px-3 text-xl text-center m-auto" id="SideBar">
      <div className="flex flex-col">
        <div className="flex flex-row m-auto jusitfy-center w-full pb-5">
        <img
                src={user?.picture}
                className="w-1/4 rounded-full"
                alt="profile-pic"
              />
              <div className="flex flex-col ml-3 m-auto text-left">
                <p className="font-semibold text-sm ">{user?.name}</p>
                <p className="text-xs pt-1">Premium subscription</p>
              </div>
        </div>
      <NavElement name="Prediction" link="/afk-dragonhack/prediction"/>
      <NavElement name="Chart" link="/afk-dragonhack/chart"/>
      <NavElement name="Statistics" link="/afk-dragonhack/stats"/>
      
      </div>
      
      <div className="flex flex-row justify-center">
      <img
                src={logo}
                className="w-1/4 h-auto rounded-full ml-3"
                alt="logo"
              />
      <p className="w-1/4 text-[#E8F1F2] text-sm font-bold m-auto ml-3">OCEANTRADE</p>
      </div>
    </div>
  );
};

const NavElement = ({name, link}) => {
  const navigate = useNavigate();

  return (
    <button className="uppercase text-base font-semibold p-3 rounded-lg text-left hover:font-bold hover:bg-[#247BA0]" onClick={()=>navigate(link)}>{name}</button>
  );
};
export default SideNavigation;
