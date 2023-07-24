import {Icon09} from "../../../components/globalIcons.jsx"

export default function Search() {

  return (
    <div className="relative">
      <input className="py-1 rounded-lg border border-2 ps-12" type="text" placeholder="Search..."
             style={{minWidth: "280px"}}/>
      <Icon09 className="absolute top-1/2 start-3 -translate-y-1/2 text-2xl text-slate-500"/>
    </div>
  );
}