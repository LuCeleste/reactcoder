import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    repeatemail: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
    clearCart();
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cart={cart}
      total={total}
    />
  );
};

export default CheckoutContainer;
