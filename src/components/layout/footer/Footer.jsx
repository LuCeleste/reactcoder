import { SvgIcon } from "@mui/material";
import styles from "../footer/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3> Datos de contacto 🍪🍰 </h3>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <SvgIcon component={MailOutlineIcon} />
          cookiesandmilkmdp@gmail.com
        </li>
        <li className={styles.li}>
          <SvgIcon component={PhoneIcon} />
          12345678910
        </li>
        <li className={styles.li}>
          <SvgIcon component={InstagramIcon} />
          @cookiesandmilkmdp
        </li>
      </ul>
    </div>
  );
};

export default Footer;
