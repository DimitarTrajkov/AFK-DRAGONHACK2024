import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import landing from "../icons/loginIcon.jpeg"


const LoginPage = () => {
  return (
    <div classname="container" id="LoginPage">
      <div className="flex flex-row h-screen w-full overflow-y-hidden">
        <div className="h-screen w-1/2 justify-between align-center m-auto">
          <img src={landing} alt="landing-img" />   
        </div>  
        <div className="bg-[#022B3A] text-[#E8F1F2] h-screen w-1/2">
            <p className="text-8xl font-bold text-center pt-16">OCEANTRADE</p>
            <p className="text-4xl font-bold text-center p-8">YOUR PREMIUM ALL IN ONE OIL TRADING PLATFORM</p>
            <p className="text-base font-normal text-center pt-8 px-24">We analyze the past and present data and use it to predict the future.</p>
            <p className="text-base font-normal text-center px-16">We make <span className="font-bold">prediction models for oil exportation </span> by the biggest oil exportes and track live tankers to get the latest and fastest changes in oil prices and provide the interpreted data for our users at a low monthy subscribtion cost.</p>
            <p className="text-base font-normal text-center pt-12 px-16">What are you waiting for? Sign up today!</p> 
            <p className="text-base font-normal text-center pb-0 px-16"> Worry not, we have Auth0 so it'll take you seconds to do so ;{")"}</p>
            <div className="pt-6 m-auto w-fit">
                <LoginButton />
            </div>
        </div>
      </div>
    </div>
  );
};

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="text-xl px-32 py-4 font-bold bg-[#D4AFB9] text-[#022B3A] rounded-xl hover:bg-[#D1CFE2]" onClick={() => loginWithRedirect({appState: {returnTo: "/afk-dragonhack/prediction"}})}>SIGN UP</button>
  );
};

export default LoginPage;
