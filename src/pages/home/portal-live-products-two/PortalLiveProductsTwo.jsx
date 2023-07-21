import plpBG from '../../../assets/img/portal-live-products.png'
import PortalBoxs from "./PortalBoxs.jsx";

export default function PortalLiveProductsTwo() {

  return (
    <div className="py-20 bg-cover bg-bottom bg-no-repeat"
         style={{backgroundImage: `url('${plpBG}')`}}>
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-4xl font-bold text-slate-50">Portal Live Products</h2>
        <p className="text-slate-300 mt-4">Basit, sezgisel ve güzel deneyimler oluşturmak için Portal 'ın evrensel
          yazılım
          dilini
          kullanın.</p>
      </div>
      <div className="container mx-auto flex flex-wrap gap-5 justify-center pb-48">
        <PortalBoxs/>
      </div>
    </div>
  );
}