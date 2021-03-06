import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {CartProvider} from "./contexts/CartContext";
function App() {
  return (
    <CartProvider>
    <BrowserRouter>

    <NavBar />

    <Switch>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/aboutus">
      <AboutUs />
      </Route>
      <Route exact path="/">
      <ItemListContainer/>
      </Route>
      <Route exact path="/category/:catId">
        <ItemListContainer/>
      </Route>

      <Route exact path="/item/:id">
        <ItemDetailContainer/>
      </Route>
      <Route exact path="/cart">
        <Cart/>

      </Route>
    </Switch>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
