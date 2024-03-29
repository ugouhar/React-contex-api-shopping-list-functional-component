import React, { useContext, useEffect } from "react";
import ShopContext from "../context/shop-context";
import MainNavigation from "../components/MainNavigation";
import "./Cart.css";

const CartPage = (props) => {
  // static contextType = ShopContext;
  const context = useContext(ShopContext);

  // componentDidMount() {
  //   console.log(this.context);
  // }
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;

/**
 * Advantage :  With this method we can use context in
 * componentDidMount, constructor etc.
 *
 * Disadvantage: Can be used with only class based component.
 */
