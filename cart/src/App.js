import React, { Component } from "react";
import "./App.css";
import GroceryItems from "./components/GroceryItem";
import GroceryCart from "./components/GroceryCart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  addToCart(item){
    const cart = [...this.state.cart, item]
    this.setState({cart})
  }
  removeFromCart(index){
    const cart = [...this.state.cart]
    cart.splice(index, 1)
    this.setState({cart})
  }

  render() {
    return (
      <div className="App">
        <h1>Grocery Cart</h1>
        <div id="grocery-container">
        <GroceryItems addToCart={this.addToCart}/>
        <GroceryCart items={this.state.cart} removeFromCart={this.removeFromCart}/>
        </div>
      </div>
    );
  }
}
