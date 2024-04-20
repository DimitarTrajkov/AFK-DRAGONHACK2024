import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();
    return (
        <Auth0Provider
        domain="dev-m0ih01sagxoshwf8.us.auth0.com"
        clientId="hlF1vajTmUqzk4LoUCXIme1V9rWOy09i"
        authorizationParams={{
         redirect_uri: "http://localhost:3000/afk-dragonhack/prediction",
        }}
        onRedirectCallback={(appState) => {
            navigate(appState?.returnTo || window.location.pathname);
        }}
        >
        {children}
        </Auth0Provider>
    );
}