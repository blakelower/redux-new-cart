import React, { Component } from "react";
import "./App.css";
import GroceryItem from "./components/GroceryItem";
import GroceryCart from "./components/GroceryCart";
import PaymentForm from "./components/PaymentForm";
import bans from "./images/bans.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    const that = this;
    let sqPaymentScript = document.createElement("script");
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      that.setState({
        loaded: true
      });
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }
  render() {
    return (
      <div
        class="vh-100 dt w-100 tc bg-dark-gray white cover"
        style={{ backgroundImage: `url(${bans})` }}
      >
        <div class="dtc v-mid">
          <header class="white-70">
            <h2 class="f6 fw1 ttu tracked mb2 lh-title">
              Place your Order Today
            </h2>
          </header>
          <h1 class="lh-copy white pa1 tracked-tight sans-serif">
            The Artsy Market
          </h1>
          <blockquote class="ph0 mh0 measure f4 lh-copy center">
            <cite class="f6 ttu tracked fs-normal">Blake Lower</cite>
          </blockquote>
          <div id="grocery-container">
            <GroceryItem />
            <GroceryCart />
            {this.state.loaded && (
              <PaymentForm paymentForm={window.SqPaymentForm} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
