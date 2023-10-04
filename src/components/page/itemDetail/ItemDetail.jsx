import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./ItemDetail.module.css";
const ItemDetail = ({ producto, onAdd, totalQuantity }) => {
  return (
    <div className={styles.detail}>
      <section className={styles.detailInfo}>
        <h2 className={styles.title}>{producto.title}</h2>
        <h4 className={styles.price}>${producto.price}</h4>
        <h4 className={styles.desc}>{producto.description}</h4>
        <img className={styles.img} src={producto.img} alt="" />
      </section>
      {(typeof totalQuantity === "undefined" ||
        producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}

      {producto.stock === 0 && <h2 className={styles.stock}>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2 className={styles.stock}>
            Tienes las cantidades maximas en el carrito
          </h2>
        )}
    </div>
  );
};

export default ItemDetail;
