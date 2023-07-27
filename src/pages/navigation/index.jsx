import "./index.css";
import Navlinks from "./Navlinks.jsx";
import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NavSettings from "./NavSettings.jsx";
import Profile from "./Profile.jsx";
import { Icon15, Icon16 } from "../../components/globalIcons.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toogleResNavigation } from "../../stores/resNavigation.jsx";
import { useEffect } from "react";

export default function Header() {

  const { visible } = useSelector(state => state.resNavigation);
  const dispatch = useDispatch();

  useEffect(() => {
    const headerDOM = document.querySelector("header");
    let list = ["fixed", "shadow-lg"];

    window.addEventListener("scroll", () => {
      if (scrollY >= headerDOM.clientHeight) {
        if (headerDOM.className.includes("relative")) {
          headerDOM.classList.remove("relative");
          headerDOM.classList.add(...list);
        }
      }
      if (scrollY < headerDOM.clientHeight) {
        if (headerDOM.className.includes("fixed")) {
          headerDOM.classList.remove(...list);
          headerDOM.classList.add("relative");
        }
      }
    });
  }, []);


  return (
    <header className="w-full top-0 relative bg-slate-50 xl:flex px-3 xl:px-10 xl:gap-x-20 xl:my-0">
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
        <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 sm:mb-0 px-1 mx-auto sm:mx-0">
          <NavSettings />
          <Profile />
        </div>
      </div>
    </header>
  );
}