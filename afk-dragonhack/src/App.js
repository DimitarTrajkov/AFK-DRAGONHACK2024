import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Chart from "./Chart.jsx";
import LoginPage from "./LoginPage.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Stats from "./Stats.jsx";
import Prediction from "./Prediciton.jsx";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-m0ih01sagxoshwf8.us.auth0.com"
      clientId="hlF1vajTmUqzk4LoUCXIme1V9rWOy09i"
      redirectUri="http://localhost:3000/afk-dragonhack/chart"
    >
      <Router>
        <div>
          <Routes>
            <Route path="/afk-dragonhack/" element={<LoginPage />} />
            <Route path="/afk-dragonhack/chart" element={<Chart />} />
            <Route path="/afk-dragonhack/stats" element={<Stats />} />
            <Route path="/afk-dragonhack/prediction" element={<Prediction />} />
            <Route path="*" element={<Navigate to="/afk-dragonhack/" />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
