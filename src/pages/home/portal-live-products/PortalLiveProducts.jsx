import "./index.css";
import PortalBox from "./PortalBox.jsx";

export default function PortalLiveProducts() {

  return (
    <div className="container mx-auto w-fit my-14">
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold">Portal Live Products</h1>
        <p className="mt-3">Basit, sezgisel ve güzel deneyimler oluşturmak için Portal 'ın evrensel yazılım dilini
          kullanın.</p>
      </div>
      <div className="lg:w-3/4 xl:w-3/5 lg:mx-auto flex flex-wrap justify-center mx-5 sm:mx-0">
        <PortalBox title="Block Explorer" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Data Index" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Bridge" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Portal Sentiment" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Portal Network" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Bots Explorer" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Translate EV" desc="Search for real-time and historical information about the blockchain." />
        <PortalBox title="Block Explorer" desc="Search for real-time and historical information about the blockchain." />
      </div>
    </div>
  );
}