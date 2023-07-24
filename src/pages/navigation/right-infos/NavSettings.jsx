import {Icon10, Icon11, Icon12} from "../../../components/globalIcons.jsx";

export default function NavSettings() {

  function settingsHander() {
    alert("button passive")
  }

  return (
    <>
      <Icon10 className="text-2xl text-slate-700 cursor-pointer" onClick={settingsHander}/>
      <Icon11 className="text-xl text-slate-700 cursor-pointer" onClick={settingsHander}/>
      <Icon12 className="text-2xl text-slate-700 cursor-pointer" onClick={settingsHander}/>
    </>
  );
}