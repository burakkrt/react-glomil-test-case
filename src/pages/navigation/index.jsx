import logo from '../../assets/img/glomil-logo.png'
import {NavLink} from "react-router-dom";
import './index.css'

export default function Header() {


  return (
    <header className="grid grid-cols-12">
      <div className="bg-red-200 col-span-2 flex flex-row justify-center items-center">
        <button><img className="w-full" src={logo} alt="Glomil Teknoloji Logo"
                     style={{maxWidth: "200px"}}/>
        </button>
      </div>
      <div className="bg-yellow-0 col-span-4 flex flex-row justify-center items-center gap-x-5 text-lg">
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/services">Hizmetler</NavLink>
        <NavLink to="/packets">Paketler</NavLink>
        <NavLink to="/products">Ürünler</NavLink>
      </div>
      <div className="bg-stone-200 col-span-6">

      </div>
    </header>
  );
}