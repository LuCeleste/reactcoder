import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../productCard/ProductCard.module.css";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      className={styles.card}
      sx={{
        width: 400,
        height: "maxContent",
        backgroundColor: "#dd807d63",
        boxShadow: "12px 10px 30px -8px rgba(66,41,25,0.9)",
        margin: "10px 30px",
      }}
    >
      <Link to={`/itemDetail/${elemento.id}`}>
        <CardMedia
          className={styles.img}
          component="img"
          alt="green iguana"
          height="300"
          image={elemento.img}
        />
      </Link>
      <CardContent>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={`/itemDetail/${elemento.id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
          </Link>
          <CardActions>
            <Link to={`/itemDetail/${elemento.id}`}>
              <Button
                sx={{
                  backgroundColor: "#dd807d42",
                  fontSize: "1rem",
                  WebkitTransition: "all",
                  transition: "all",
                  WebkitTransitionDuration: "0.5s",
                  transitionDuration: "0.5s",
                  border: "solid 0px",
                  borderRadius: "0.8rem",
                  padding: "5px 10px",
                  color: "#422919",
                  cursor: "pointer",
                  textTransform: "none",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
                size="small"
              >
                Ver Detalle
              </Button>
            </Link>
          </CardActions>
        </section>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
