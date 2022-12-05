import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import User from "./Components/User";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="rowC">
          <User />
          <Login />
        </div>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/pirate" exact component={Dashboard} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
