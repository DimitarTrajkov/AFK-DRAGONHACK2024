import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/afk-dragonhack/"
            element={<Home />}
          />
          <Route path="*" element={<Navigate to="/afk-dragonhack/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
