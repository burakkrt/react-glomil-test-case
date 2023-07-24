import './index.css'
import Navlinks from "./left-infos/Navlinks.jsx";
import Search from "./right-infos/Search.jsx";
import Logo from "./left-infos/Logo.jsx";
import NavSettings from "./right-infos/NavSettings.jsx";
import Profile from "./right-infos/Profile.jsx";

export default function Header() {


  return (
    <header className="grid grid-cols-12 py-2">
      <div className="col-span-2 flex flex-row justify-center items-center">
        <Logo/>
      </div>
      <div
        className="col-span-3 flex flex-row justify-center items-center gap-x-4 text-md font-semibold text-slate-600">
        <Navlinks/>
      </div>
      <div className="col-span-7 flex items-center gap-x-5 justify-center">
        <Search/>
        <NavSettings/>
        <Profile/>
      </div>
    </header>
  );
}