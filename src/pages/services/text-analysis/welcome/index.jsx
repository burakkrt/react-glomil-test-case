import { Icon01 } from "../../../../components/globalIcons.jsx";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";

export default function TextAnalysis() {

  const navigate = useNavigate();

  return (
    <div className="py-5 sm:p-10">
      <Breadcrumbs />
      <div className="w-72 bg-slate-50 p-5 sm:p-10 rounded text-center lg:text-start mt-10 mx-auto sm:mx-0">
        <div className="bg-blue-700 inline-block rounded p-4">
          <Icon01 className="text-3xl text-slate-50" />
        </div>
        <div className="flex flex-col items-center lg:items-start" style={{ minHeight: "220px" }}>
          <span className="flex items-center flex-auto text-2xl font-bold">Sentiment Analiz Sorgu Hizmeti</span>
          <p className="text-slate-600">Our mission is to uleash the potential in every team.</p>
          <button className="text-slate-600 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 duration-150 mt-3"
                  onClick={() => navigate("/services/text-analysis/sentiment")}>Ücretsiz
            Başlat
          </button>
        </div>
      </div>
    </div>
  );
}