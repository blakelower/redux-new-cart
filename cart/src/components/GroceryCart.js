import React, { Component } from "react";

export default class GroceryCart extends Component {
    total(){
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
  render() {
      if(this.props.items.length === 0){
          return<div >
              <p>Cart is empty</p>

          </div>
      }
    return (
      <div id="grocery-cart">
        <table className="overflow-auto">
          <tbody className="f6 w-100 mw8 center">
            <tr className="stripe-dark">
              <th></th>
              <th className="fw6 tl pa3 bg-white">Item Price</th>
              <th className="pa3">Item Name</th>
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index} className="stripe-dark">
                  <td>
                    <button className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" onClick={() => this.props.removeFromCart(index)}>Remove Cart</button>
                  </td>
                  <td className="pa3">{item.price}</td>
                  <td className="pa3">{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Total: ${this.total()}</p>
      </div>
    );
  }
}
