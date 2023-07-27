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
    <header className="relative xl:flex px-3 xl:px-10 xl:gap-x-20">
      <div className="w-full xl:w-fit flex flex-row items-center justify-between">
        <Logo />
        {visible ?
          <Icon16 className="inline-block xl:hidden text-4xl text-slate-800" onClick={() => dispatch(toogleResNavigation())} /> :
          <Icon15 className="inline-block xl:hidden text-4xl text-slate-800" onClick={() => dispatch(toogleResNavigation())} />}
      </div>
      <div className={`${visible ? "flex" : "hidden"} xl:flex flex-wrap flex-auto flex-row sm:justify-between items-center gap-y-5 py-6 sm:px-3`}>
        <div className="hidden lg:flex flex-auto flex-row flex-wrap gap-x-3">
          <Navlinks />
        </div>
        <div className="sm:order-0 mx-auto sm:mx-0 lg:me-5">
          <Search />
        </div>
        <div className="flex flex-row items-center gap-x-3 sm:mb-0 px-1 mx-auto sm:mx-0">
          <NavSettings />
          <Profile />
        </div>
      </div>
    </header>
  );
}