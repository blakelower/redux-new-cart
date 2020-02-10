import React, { Component } from "react";

export default class GroceryItems extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Item Price</th>
              <th>Item Name</th>
            </tr>
            {GROCERY_ITEMS.map((item, index) => {
              return (
                <tr id={index}>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
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
