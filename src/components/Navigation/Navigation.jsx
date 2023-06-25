import { Header, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/coctails">Coctails</Link>
        <Link to="/ingridients">Ingridients</Link>
        <Link to="/non-alcogolic">Non Alcogolic</Link>
      </nav>
    </Header>
  );
};
