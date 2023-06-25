import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/coctails">Coctails</Link>
      <Link to="/ingridients">Ingridients</Link>
      <Link to="/non-alcogolic">Non Alcogolic</Link>
    </nav>
  );
};
