import {CustomHelmet} from "../../../../helmet/HelmetProvider.jsx";
import '../../../../components/globalIcons.jsx'
import {Icon07} from "../../../../components/globalIcons.jsx";
import Breadcrumbs from '../../../../components/Breadcrumbs.jsx'


export default function Sentiment() {


  return (
    <div className="p-5 md:p-10">
      <CustomHelmet title="Glomil Portal | Sentiment"/>
      <Breadcrumbs/>
      <div className="inline-block border-b pb-2">
        <h1 className="text-2xl font-bold text-slate-700">Sentiment</h1>
        <p className="mt-5">Her algoritma farklı değer sonuçlarını vermektedir. İlgili alana istenilen bilgileri
          girerek sorgulama
          yapabilirsiniz.</p>
      </div>
      <div className="mt-14 xl:w-4/5 2xl:w-3/5">
        <h2 className="text-2xl font-bold text-slate-700">Sorgulama Alanı</h2>
        <div className="flex flex-col flex-wrap md:flex-row gap-x-5 gap-y-5 items-center w-100">
          <textarea className="flex-auto w-full md:w-auto border border-2 rounded mt-3 p-2" name="queryArea"
                    id="queryArea"
                    rows="3" placeholder="Enter long form text here"></textarea>
          <button className="bg-blue-700 text-slate-50 px-2 py-1 rounded hover:bg-blue-800 duration-150"
                  onClick={() => alert("button passive")}>Sorgulama Yap
          </button>
        </div>
        <div className="flex flex-row w-fit items-center gap-x-3 justify-start mt-5 p-3 bg-green-100"
             style={{minWidth: "224px"}}>
          <Icon07 className="text-xl"/>
          <p className="text-slate-600 w-fit"></p>
        </div>
      </div>
    </div>
  );
}