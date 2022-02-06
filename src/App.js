import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Offers from "./components/Offers";
import Offer from "./components/Offer";
import Header from "./components/Header";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import cookies from "js-cookie";

function App() {
  const [logged, setLogged] = useState(cookies.get("token") || false);
  return (
    <div className="bg-slate-300 h-full">
      <div className="container mx-auto px-4">
        <Router>
          <Header logged={logged} setLogged={setLogged} />
          <Routes>
            <Route path="/" element={<Offers />} />
            <Route path="/product/:id" element={<Offer />} />
            <Route
              path="/signin"
              element={<Signin logged={logged} setLogged={setLogged} />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
