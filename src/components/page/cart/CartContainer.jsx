import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";
import "animate.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const limpiar = () => {
    Swal.fire({
      title: "Seguro que quieres eliminar tu carrito?",
      showDenyButton: true,
      color: "#422919e6",
      confirmButtonText: "Si",
      confirmButtonColor: "#dd807df8",
      denyButtonText: `No`,
      denyButtonColor: "#dd807df8",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Carrito eliminado",
          color: "#422919e6",
          imageUrl:
            "https://res.cloudinary.com/daq80uhh9/image/upload/v1690492524/ezgif-4-6685bafef9_itfufn.gif",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          confirmButtonColor: "#dd807df8",
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Genial!",
          color: "#422919e6",
          imageUrl:
            "https://res.cloudinary.com/daq80uhh9/image/upload/v1690492402/ezgif-4-d0a04ff6d2_oo9lii.gif",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          confirmButtonColor: "#dd807df8",
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };

  return (
    <Cart cart={cart} total={total} limpiar={limpiar} deleteById={deleteById} />
  );
};
export default CartContainer;
