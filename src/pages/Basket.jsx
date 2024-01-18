import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import BasketProduct from "../components/BasketProduct";
import EmptyCart from "../components/EmptyCart";

function Basket() {
  const { myBag } = useSelector((state) => state.cart);
  
  const total = myBag.reduce(
    (prev, curr) => (prev += curr.price * curr.itemQuantity),
    0
  );

  

  return (
    <div>
      <Navbar />
      <div className="flex flex-rows justify-between items-center mx-10 my-5 text-xl">
        <p>Your Bag</p>
        <p className="font-bold">Total : INR {total.toFixed(2)}</p>
      </div>

      

      <div className="text-center">
        {myBag.length === 0 ? (
          <EmptyCart />
        ) : (
          myBag.map((cartItem, i) => (
            <BasketProduct cartItem={cartItem} key={i} />
          ))
        )}
      </div>
    </div>
  );
}

export default Basket;
