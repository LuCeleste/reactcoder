import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const totalQuantity = getQuantityById(id);
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCard = {
      ...producto,
      quantity: cantidad,
    };
    addToCart(productCard);
    toast("🍰 Agregado al carrito!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer />
      <ItemDetail
        producto={producto}
        onAdd={onAdd}
        totalQuantity={totalQuantity}
      />
    </>
  );
};

export default ItemDetailContainer;
