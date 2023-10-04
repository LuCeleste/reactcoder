import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3];
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={300} height={300} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.3rem" }}
                    width={100}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={150}
                  />
                  <Skeleton variant="rounded" width={100} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ItemList;
