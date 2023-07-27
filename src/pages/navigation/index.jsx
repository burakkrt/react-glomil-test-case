import "./index.css";
import Navlinks from "./Navlinks.jsx";
import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NavSettings from "./NavSettings.jsx";
import Profile from "./Profile.jsx";
import { Icon15, Icon16 } from "../../components/globalIcons.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toogleResNavigation } from "../../stores/resNavigation.jsx";

export default function Header() {

  const { visible } = useSelector(state => state.resNavigation);
  const dispatch = useDispatch();


  return (
    <header className="relative">
      <div className="w-full flex flex-row items-center justify-between px-3">
        <Logo />
        {visible ?
          <Icon16 className="text-4xl inline-block text-slate-700" onClick={() => dispatch(toogleResNavigation())} /> :
          <Icon15 className="text-4xl inline-block text-slate-700" onClick={() => dispatch(toogleResNavigation())} />}
      </div>
      <div className={`${visible ? "flex" : "hidden"} flex flex-col items-center gap-y-4`}>
        <div className="hidden">
          <Navlinks />
        </div>
        <div className="mt-4">
          <Search />
        </div>
        <div className="flex items-center justify-around w-full mb-4 mt-2">
          <Profile />
          <NavSettings />
        </div>
      </div>
    </header>
  );
}