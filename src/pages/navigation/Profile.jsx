import { Icon13 } from "../../components/globalIcons.jsx";

export default function Profile() {

  return (
    <div className="lg:order-2">
      <div className="relative inline-block align-middle">
        <Icon13 className="text-4xl text-slate-50 bg-slate-400 rounded-full p-1" />
        <div className="absolute bottom-0 end-0 bg-green-400 rounded-full border-2 border-slate-50"
             style={{ width: "15px", height: "15px" }}></div>
      </div>
      <div className="leading-tight inline-block ms-2 align-middle">
        <span className="font-bold text-slate-500">Glomil</span>
        <p className="text-slate-400">glml@glomil.com</p>
      </div>
    </div>
  );
}