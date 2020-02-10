import React, { Component } from "react";
import "./App.css";
import GroceryItem from "./components/GroceryItem";
import GroceryCart from "./components/GroceryCart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Grocery Cart</h1>
        <div id="grocery-container">
        <GroceryItem />
        <GroceryCart/>
        </div>
      </div>
    );
  }
}
export default App;