import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SvgIcon } from "@mui/material";
const Cart = ({ cart, limpiar, total, deleteById }) => {
  return (
    <div className={styles.cart}>
      <h1>Carrito</h1>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className={styles.cartItem}>
            <div className={styles.cartInfo}>
              <h3>{elemento.title}</h3>
              <h5>Precio unidad: ${elemento.price}</h5>
              <h5>Unidades: {elemento.quantity}</h5>
              <h5>Subtotal: ${elemento.quantity * elemento.price}</h5>
            </div>
            <img className={styles.img} src={elemento.img} alt="" />
            <button
              onClick={() => deleteById(elemento.id)}
              className={styles.btn}
            >
              <SvgIcon component={DeleteOutlineIcon} />
            </button>
          </div>
        );
      })}
      {cart.length > 0 && <h2>El total es: ${total}</h2>}
      {cart.length > 0 && (
        <button onClick={limpiar} className={styles.btn2}>
          Limpiar carrito
        </button>
      )}

      {cart.length > 0 ? (
        <Link to="/checkout" className={styles.btn2}>
          Comprar
        </Link>
      ) : (
        <div className={styles.cartVacio}>
          <h2>Agrega productos al carrito</h2>
          <Link to="/" className={styles.btn}>
            Ver productos
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
