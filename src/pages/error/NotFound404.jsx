import { CustomHelmet } from "../../helmet/HelmetProvider.jsx";
import { useNavigate } from "react-router-dom";
import { Icon08, Icon14 } from "../../components/globalIcons.jsx";
import logo from "../../assets/img/glomil-logo.png";

export default function NotFound404() {

  const navigation = useNavigate();

  return (
    <div className="grid h-screen place-content-center bg-slate-200 px-3 sm:px-0">
      <CustomHelmet title="Glomil | 404 Not Found" noIndex={true} />
      <div className="text-center">
        <img src={logo} alt="Glomil Teknoloji Logo" className="mx-auto opacity-75" />
      </div>
      <div className="text-center">
        <span className="text-md sm:text-2xl font-bold text-slate-600 uppercase tracking-widest">Aradığınız içerik bulunamıyor.</span>
        <p>Ulaşmak istediğiniz veriler silinmiş veya değiştirilmiş olabilir.</p>
      </div>
      <div className="flex flex-row gap-5 flex-wrap justify-center mt-5 sm:mt-10">
        <button className="flex flex-row items-center gap-x-2 bg-slate-800 text-slate-50 px-2 py-1 rounded text-md sm:text-lg animate-pulse" onClick={() => navigation(-1)}>
          <Icon14 />
          Geri Dön
        </button>
        <button className="flex flex-row items-center gap-x-2 bg-slate-600 text-slate-50 px-2 py-1 rounded text-md sm:text-lg hover:bg-slate-800 duration-150" onClick={() => navigation("/")}>
          <Icon08 />
          Anasayfa
        </button>
      </div>
    </div>
  );
}