import { NavLink } from "react-router-dom";

export default function Navlinks() {

  return (
    <div>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/services">Hizmetler</NavLink>
      <NavLink to="/packets">Paketler</NavLink>
      <NavLink to="/products">Ürünler</NavLink>
    </div>
  );
}