import {Icon01, Icon02, Icon03, Icon04} from "../../../components/globalIcons.jsx";

export default function PortalBoxs() {

  return (
    <>
      <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
        <div className="bg-blue-700 inline-block rounded p-4">
          <Icon01 className="text-3xl text-slate-50"/>
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
      <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
        <div className="bg-blue-700 inline-block rounded p-4">
          <Icon02 className="text-3xl text-slate-50"/>
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
      <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
        <div className="bg-blue-700 inline-block rounded p-4">
          <Icon03 className="text-3xl text-slate-50"/>
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
      <div className="w-72 bg-slate-50 p-10 rounded text-center lg:text-start">
        <div className="bg-blue-700 inline-block rounded p-4">
          <Icon04 className="text-3xl text-slate-50"/>
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
    </>
  );
}