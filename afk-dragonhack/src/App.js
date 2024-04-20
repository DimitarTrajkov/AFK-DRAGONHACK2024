import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Chart from "./pages/Chart.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Stats from "./pages/Stats.jsx";
import Prediction from "./pages/Prediction.jsx";

const App = () => {
  return (
        <div>
          <Routes>
            <Route path="/afk-dragonhack/" element={<LoginPage />} />
            <Route path="/afk-dragonhack/chart" element={<Chart />} />
            <Route path="/afk-dragonhack/stats" element={<Stats />} />
            <Route path="/afk-dragonhack/prediction" element={<Prediction />} />
            <Route path="*" element={<Navigate to="/afk-dragonhack/" />} />
          </Routes>
        </div>
  );
};

export default App;