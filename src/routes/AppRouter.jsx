import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route path={path} key={id} element={<Element />} />
        ))}
        <Route path="*" element={<notFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
