import Breadcrumbs from '../../../components/Breadcrumbs.jsx'
import Questioning from "./algorithm/Questioning.jsx";
import QueryResult from "./algorithm/QueryResult.jsx";

export default function Bots() {

  return (
    <div className="p-5 sm:p-10">
      <Breadcrumbs/>

      <div className="border-b border-b-2 pb-2">
        <h1 className="text-2xl font-bold text-slate-700">Bots</h1>
        <p className="text-slate-700 mt-2">Her algoritma farklı değer sonuçları vermektedir. İlgili algoritmaya
          istenilen bilgileri girerek sorgulama yapabilirsiniz.</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-3 gap-y-5 mt-10">
        <div className="flex-1 p-5">
          <Questioning/>
        </div>
        <div className="flex-1 border-s border-s-2 p-5">
          <QueryResult/>
        </div>
      </div>
    </div>
  );
}