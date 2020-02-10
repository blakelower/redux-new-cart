import React, { Component } from "react";
import {connect} from 'react-redux';

class GroceryItem extends Component {
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
            {this.props.items.map((item, index) => {
              return (
                <tr id={index} className="stripe-dark">
                  <td>
                    <button className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" onClick={() => this.props.addToCart(item)}>Add Cart</button>
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



function mapStateToProps(state){
    return{
        items: state.forSale
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem)