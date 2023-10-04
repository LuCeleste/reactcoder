import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className={styles.navbar}>
          <Link to="/">
            <img
              className={styles.img}
              src="https://res.cloudinary.com/daq80uhh9/image/upload/v1687187754/logohueco2_deuggo.png"
            ></img>
          </Link>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
            }}
          >
            <li>
              <Link to="/">Todo</Link>{" "}
            </li>
            <li>
              <Link to="/category/individual">Porciones individuales</Link>{" "}
            </li>
            <li>
              <Link to="/category/tortas">Tortas</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
