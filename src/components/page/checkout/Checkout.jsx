import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = ({ orderId, handleChange, handleSubmit, cart, total }) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.cart}>
        {cart.length > 0 && <h2>Resumen de carrito</h2>}
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className={styles.cartItem}>
              <div className={styles.cartInfo}>
                <h3>{elemento.title}</h3>
                <h5>Precio: ${elemento.price}</h5>
                <h5>Unidades: {elemento.quantity}</h5>
                <h5>Subtotal: ${elemento.quantity * elemento.price}</h5>
              </div>
              <img className={styles.img} src={elemento.img} alt="" />
            </div>
          );
        })}
        {cart.length > 0 && <h2>El total es: ${total}</h2>}
        {cart.length > 0 && (
          <Link to="/cart" className={styles.checkoutOrderLink}>
            Editar carrito
          </Link>
        )}
      </div>
      {orderId ? (
        <div className={styles.checkoutOrder}>
          <h3>Gracias por su compra.</h3>
          <h4>Su codigo de compra es: {orderId}</h4>
          <Link to="/" className={styles.checkoutOrderLink}>
            Volver a comprar
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          {" "}
          <h1>Checkout</h1>
          <h4>Nombre</h4>
          <input
            required
            className={styles.checkoutInput}
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
            minLength="3"
          />
          <h4>Apellido</h4>
          <input
            required
            className={styles.checkoutInput}
            type="text"
            placeholder="Ingrese su apellido"
            name="lastname"
            onChange={handleChange}
            minLength="3"
          />
          <h4>Telefono</h4>
          <input
            required
            className={styles.checkoutInput}
            type="tel"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
            minLength="6"
            maxLength="16"
          />
          <h4>E-mail</h4>
          <input
            required
            className={styles.checkoutInput}
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <h4>Repetir E-mail</h4>
          <input
            required
            className={styles.checkoutInput}
            type="email"
            placeholder="Ingrese su email"
            name="repeatemail"
            onChange={handleChange}
          />
          <button type="submit">Confirmar compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
