import styles from "./Counter.module.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className={styles.counter}>
      <section className={styles.btns}>
        <button className={styles.btn} onClick={restar}>
          -
        </button>
        <h3>{contador} un </h3>
        <button className={styles.btn} onClick={sumar}>
          +
        </button>
      </section>
      <button className={styles.btn} onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
