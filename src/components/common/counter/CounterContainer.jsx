import { useState } from "react";
import Counter from "./Counter";
import { toast, ToastContainer } from "react-toastify";
const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : toast("⚠️ Cantidad máxima", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <>
      <ToastContainer />
      <Counter
        contador={contador}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </>
  );
};

export default CounterContainer;
