import React, { Component } from "react";

export default class GroceryItems extends Component {
  render() {
    return (
      <div id="grocery-items">
        <table className="overflow-auto">
          <tbody className="f6 w-100 mw8 center">
            <tr className="stripe-dark">
              <th></th>
              <th className="fw6 tl pa3 bg-white">Item Price</th>
              <th className="pa3">Item Name</th>
            </tr>
            {GROCERY_ITEMS.map((item, index) => {
              return (
                <tr id={index} className="stripe-dark">
                  <td>
                    <button className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" onClick={() => this.props.addToCart(item)}>Add to Cart</button>
                  </td>
                  <td className="pa3">{item.price}</td>
                  <td className="pa3">{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const GROCERY_ITEMS = [
  { name: "Sliced Bacon", price: "$5.79" },
  { name: "Apples", price: "$.99/lb" },
  { name: "Avocados", price: "$2.00" },
  { name: "Strawberries", price: "1.99" },
  { name: "Grass Fed Cheese", price: "$5.99" },
  { name: "Grass Fed Greek Yogurt", price: "$3.59" },
  { name: "Arugula", price: "$2.50" },
  { name: "Spinach", price: "$2.25/8oz bag" },
  { name: "Tuna", price: "$1.49 can" },
  { name: "Pork Chops", price: "$1.99/lb" },
  { name: "Chicken Breast", price: "$2.99/lb" },
  { name: "Shrimp", price: "$5.99/lb" },
  { name: "Eggs", price: "$1.79" },
  { name: "Grass Fed Butter", price: "$3.19" },
  { name: "Prosciutto", price: "$3.99/4oz" },
  { name: "Oranges", price: "$1.99/lb" },
  { name: "Ground Beef", price: "$2.99/lb" }
];
