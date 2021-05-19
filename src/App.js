import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer />
    </>
  );
}

export default App;
