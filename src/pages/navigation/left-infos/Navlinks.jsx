import {NavLink} from "react-router-dom";

export default function Navlinks() {

  return (
    <>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/services">Hizmetler</NavLink>
      <NavLink to="/packets">Paketler</NavLink>
      <NavLink to="/products">Ürünler</NavLink>
    </>
  );
}