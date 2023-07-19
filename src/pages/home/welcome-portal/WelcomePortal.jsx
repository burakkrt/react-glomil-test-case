import welcomePortalImage from '../../../assets/img/welcome-portal.png'

export default function WelcomePortal() {

  return (
    <div className="py-14" style={{backgroundColor: "#212846"}}>
      <div className="container mx-auto flex flex-row items-center justify-evenly">
        <div className="text-slate-50">
          <span className="text-5xl font-bold">Portala Hoşgeldiniz</span>
          <p className="w-96 text-lg text-slate-300 mt-8">Basit, sezgisel ve güzel deneyimler
            oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</p>
          <button
            className="text-lg bg-blue-700 text-slate-200 py-2 px-4 mt-4 rounded hover:text-slate-50 duration-150">Hadi
            Başlayalım
          </button>
        </div>
        <img src={welcomePortalImage} alt="Welcome Portal Image" width="444"/>
      </div>
    </div>
  );
}