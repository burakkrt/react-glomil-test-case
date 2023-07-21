import {ImStatsDots} from "react-icons/im";
import {BsDisplay} from "react-icons/bs";
import {MdGTranslate} from "react-icons/md";
import {CgMenuGridR} from "react-icons/cg";
import plpBG from '../../../assets/img/portal-live-products.png'

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
        {/*-------------*/}
        <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
          <div className="bg-blue-700 inline-block rounded p-4">
            <ImStatsDots className="text-3xl text-slate-50"/>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start" style={{minHeight: "220px"}}>
            <span className="flex items-center flex-auto text-2xl font-bold">Sentiment Analiz Sorgu Hizmeti</span>
            <p className="text-slate-600">Our mission is to uleash the potential in every team.</p>
            <button className="text-slate-600 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 duration-150 mt-3"
                    onClick={() => alert('button passive')}>Ücretsiz
              Başlat
            </button>
          </div>
        </div>
        {/*-------------*/}
        <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
          <div className="bg-blue-700 inline-block rounded p-4">
            <BsDisplay className="text-3xl text-slate-50"/>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start" style={{minHeight: "220px"}}>
            <span className="flex items-center flex-auto text-2xl font-bold">Bots Sorgu Hizmeti</span>
            <p className="text-slate-600">Our mission is to uleash the potential in every team.</p>
            <button className="text-slate-600 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 duration-150 mt-3"
                    onClick={() => alert('button passive')}>Ücretsiz
              Başlat
            </button>
          </div>
        </div>
        {/*-------------*/}
        <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
          <div className="bg-blue-700 inline-block rounded p-4">
            <MdGTranslate className="text-3xl text-slate-50"/>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start" style={{minHeight: "220px"}}>
            <span className="flex items-center flex-auto text-2xl font-bold">Translate Hizmeti</span>
            <p className="text-slate-600">Our mission is to uleash the potential in every team.</p>
            <button className="text-slate-600 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 duration-150 mt-3"
                    onClick={() => alert('button passive')}>Ücretsiz
              Başlat
            </button>
          </div>
        </div>
        {/*-------------*/}
        <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
          <div className="bg-blue-700 inline-block rounded p-4">
            <CgMenuGridR className="text-3xl text-slate-50"/>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start" style={{minHeight: "220px"}}>
            <span className="flex items-center flex-auto text-2xl font-bold">Aspect Base Sentiment</span>
            <p className="text-slate-600">Our mission is to uleash the potential in every team.</p>
            <button className="text-slate-600 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 duration-150 mt-3"
                    onClick={() => alert('button passive')}>Ücretsiz
              Başlat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}