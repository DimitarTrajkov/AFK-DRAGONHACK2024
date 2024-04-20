import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const LoginPage = () => {
  return (
    <div classname="container" id="LoginPage">
      <div className="flex flex-row h-full w-full">
        <div className="h-screen w-1/2 justify-between align-center m-auto">
            <p className="m-auto text-center">Image</p>
        </div>  
        <div className="h-screen w-1/2">
            <p>LogIn</p>
            <div className="flex flex-col w-fit bg-blue-400">
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
    <button onClick={() => loginWithRedirect({appState: {returnTo: "/afk-dragonhack/chart"}})}>Log In</button>
  );
};

export default LoginPage;
