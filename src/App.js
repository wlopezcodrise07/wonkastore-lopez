import React from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidge from "./components/CartWidge";
function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer />
    </>
  );
}

export default App;
