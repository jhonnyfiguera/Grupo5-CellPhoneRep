import { useEffect, useContext } from "react";
import Globalcontext from "../context";

export default function Salir() {
  const { setDataAuth } = useContext(Globalcontext);

  useEffect(() => {
    setDataAuth({});
  }, []);

  return null;
}
