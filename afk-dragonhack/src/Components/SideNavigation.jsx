import React from "react";
import logo from "../icons/oceantradeLogo.png"
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SideNavigation = () => {
  const { user } = useAuth0();
  
  return (
    <div className="flex flex-col bg-[#13293D] text-white h-screen p-4 text-xl text-center m-auto" id="SideBar">
      <img
                src={logo}
                className="w-1/2 mx-auto"
                alt="canndyman_logo"
              />
      <p className="font-semibold text-sm pb-5">Welcome {user.name}</p>
      <NavElement name="Chart" link="/afk-dragonhack/chart"/>
      <NavElement name="Statistics" link="/afk-dragonhack/stats"/>
      <NavElement name="Prediction" link="/afk-dragonhack/prediction"/>
    </div>
  );
};

const NavElement = ({name, link}) => {
  const navigate = useNavigate();

  return (
    <button className="py-3 hover:font-semibold hover:bg-[#247BA0]" onClick={()=>navigate(link)}>{name}</button>
  );
};
export default SideNavigation;