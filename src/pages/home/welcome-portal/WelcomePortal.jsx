import welcomePortalImage from '../../../assets/img/welcome-portal.png'
import {useNavigate} from "react-router-dom";

export default function WelcomePortal() {

  const navigate = useNavigate();

  return (
    <div className="py-14" style={{backgroundColor: "#212846"}}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly gap-y-14 lg:gap-y-14">
        <div className="text-slate-50 text-center md:text-start">
          <span className="text-3xl lg:text-5xl font-bold">Portala Hoşgeldiniz</span>
          <p className="w-full sm:w-2/3 md:w-full lg:w-96 mx-auto md:mx-0  text-lg text-slate-300 mt-8">Basit, sezgisel
            ve güzel
            deneyimler
            oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</p>
          <button
            className="text-md bg-blue-700 text-slate-200 py-2 px-4 mt-4 rounded hover:bg-blue-800 duration-150"
            onClick={() => navigate('/services')}>Hadi
            Başlayalım
          </button>
        </div>
        <img src={welcomePortalImage} alt="Welcome Portal Image" width="444"/>
      </div>
    </div>
  );
}