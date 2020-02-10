const GROCERY_ITEMS = [
  { name: "Sliced Bacon", price: 5.79 },
  { name: "Apples", price: 0.99 },
  { name: "Avocados", price: 2.0 },
  { name: "Strawberries", price: 1.99 },
  { name: "Grass Fed Cheese", price: 5.99 },
  { name: "Grass Fed Greek Yogurt", price: 3.59 },
  { name: "Arugula", price: 2.5 },
  { name: "Spinach", price: 2.25 },
  { name: "Tuna", price: 1.49 },
  { name: "Pork Chops", price: 1.99 },
  { name: "Chicken Breast", price: 2.99 },
  { name: "Shrimp", price: 5.99 },
  { name: "Eggs", price: 1.79 },
  { name: "Grass Fed Butter", price: 3.19 },
  { name: "Prosciutto", price: 3.99 },
  { name: "Oranges", price: 1.99 },
  { name: "Ground Beef", price: 2.99 }
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
      }
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
