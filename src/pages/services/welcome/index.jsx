import PortalBoxs from "../../home/portal-live-products-two/PortalBoxs.jsx";
import { Icon06 } from "../../../components/globalIcons.jsx";

export default function ServicesWelcome() {

  return (
    <div className="w-full h-full p-5 py-5 lg:py-20 px-5 md:px-20">
      <div className="text-center lg:inline-block lg:w-72 lg:text-start">
        <span className="text-2xl font-bold">Ücretsiz Paketlere Göz Atın</span>
        <p className="my-5">Temmeller, ilgi çekici düzenler ve uçtan uca kullanıcı deneyimleri oluşturmak için gereken
          yazılımsal
          öğelerdir.</p>
        <button onClick={() => alert("button passive")} className="underline">Hizmetleri Keşfedin
          <Icon06
            className="inline-block ms-1 text-blue-600" />
        </button>
      </div>
      <div className="flex flex-wrap gap-3 justify-center border-b-2 my-14 pb-5">
        <PortalBoxs />
      </div>
    </div>
  );
}