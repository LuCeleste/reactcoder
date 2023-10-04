import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import NotFound from "../components/page/err/NotFound";
import ItemDetailContainer from "../components/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/page/ItemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "notfound",
    path: "*",
    Element: NotFound,
  },
];
