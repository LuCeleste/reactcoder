import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.info}>
        <h1>Error 404</h1>
        <h3>
          Este error solo significa que esta página no existe, o no se encuentra
          más disponible.
        </h3>
        <h3>
          Te invitamos a explorar{" "}
          <Link to="/" className={styles.link}>
            Todos nuestros productos
          </Link>
        </h3>
      </div>
      <img
        className={styles.img}
        src={
          "https://res.cloudinary.com/daq80uhh9/image/upload/v1690597080/ezgif-3-ba23888590_ptrttz.gif"
        }
        alt=""
      />
    </div>
  );
};

export default NotFound;
