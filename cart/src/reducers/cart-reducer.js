const GROCERY_ITEMS = [
  { name: "Sliced Bacon", price: 5.79 },
  { name: "Apples", price: 1.25 },
  { name: "Avocados", price: 2.25 },
  { name: "Strawberries", price: 1.99 },
  { name: "Grass Fed Cheese", price: 5.99 },
  { name: "Grass Fed Greek Yogurt", price: 3.59 },
  { name: "Arugula", price: 2.25 }, //made an array
  { name: "Spinach", price: 2.25 },
  { name: "Tuna", price: 1.49 }
];

const cartReducer = (state, action) => {
  console.log("action", action);
  if (state === undefined) {
    return {
      forSale: GROCERY_ITEMS,
      cart: []
    };
  }

  switch (action.type) {
    case "ADD_TO_CART": {
      const cart = [...state.cart, action.item];
      return {
        ...state,
        cart
      };
    }
    case "REMOVE_FROM_CART": {
      const cart = [...state.cart];
      cart.splice(action.index, 1);
      return {
        ...state,
        cart
      };
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
