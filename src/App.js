import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Početna/HomePage/HomePage";
import Putovanja from "./components/Putovanja/Page/Putovanja";
import Podrska from "./components/Podrška/Podrska";
import ONama from "./components/O nama/ONama";
import Blog from "./components/Blog/Blog";
import Kosarica from "./components/Košarica/Kosarica";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import "./App.css";
import styles from "./App.css";
import "./font.css";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Header />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Putovanja" element={<Putovanja />}></Route>
              <Route path="/Podrska" element={<Podrska />}></Route>
              <Route path="/oNama" element={<ONama />}></Route>
              <Route path="/Blog" element={<Blog />}></Route>
              <Route path="/Kosarica" element={<Kosarica />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Register" element={<Register />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
