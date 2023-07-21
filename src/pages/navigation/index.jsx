import logo from '../../assets/img/glomil-logo.png'
import {useNavigate} from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const routePageHandler = (path) => {
    navigate(path)
  }

  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-200 col-span-2 flex flex-row justify-center items-center">
        <button><img className="w-full" src={logo} alt="Glomil Teknoloji Logo"
                     style={{maxWidth: "200px"}}/>
        </button>
      </div>
      <div className="bg-yellow-200 col-span-4 flex flex-row justify-center items-center gap-x-5 text-lg">
        <button onClick={() => routePageHandler('/')}>Anasayfa</button>
        <button onClick={() => routePageHandler('/hizmetler')}>Hizmetler</button>
        <button onClick={() => routePageHandler('/paketler')}>Paketler</button>
        <button onClick={() => routePageHandler('/urunler')}>Ürünler</button>
      </div>
      <div className="bg-stone-200 col-span-6">

      </div>
    </div>
  );
}