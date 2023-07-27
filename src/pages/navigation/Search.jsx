import { Icon09 } from "../../components/globalIcons.jsx";
import { router } from "../../router/router.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toogleResNavigation } from "../../stores/resNavigation.jsx";
import { useDispatch } from "react-redux";

let arr = [];
const search = (router) => {

  router.map((route) => {
    if (route.name) {
      arr.push({ name: route.name, link: route.link });
    }
    if (route.children) {
      search(route.children);
    }
  });
  return arr;
};

export default function Search() {
  const dispatch = useDispatch();
  arr = [];
  // eslint-disable-next-line no-unused-vars
  const [searchPages, setSearchPages] = useState(search(router));
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function routerHandler(pageLink) {
    navigate(pageLink);
    setSearchInput("");
    const searchResults = document.querySelector("#searchResults");
    searchResults.classList.replace("visible", "invisible");
    dispatch(toogleResNavigation());
  }

  function visibleSearch() {
    const searchResults = document.querySelector("#searchResults");
    searchResults.classList.replace("invisible", "visible");
  }

  function inVisibleSearch() {
    const searchResults = document.querySelector("#searchResults");
    setTimeout(() => {
      searchResults.classList.replace("visible", "invisible");
    }, 300);
  }

  return (
    <div className="relative">
      <div className="relative">
        <input className="py-1 rounded-lg border-2 ps-12" onFocus={visibleSearch} onBlur={inVisibleSearch} type="text" placeholder="Search..."
               style={{ minWidth: "280px" }} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <Icon09 className="absolute top-1/2 start-3 -translate-y-1/2 text-2xl text-slate-500" />
      </div>
      <div className="invisible w-full absolute z-40 overflow-auto bg-slate-50 shadow-lg border-2 rounded mt-1 p-2" id="searchResults" style={{ maxHeight: "252px" }}>
        {
          searchPages.map((page) => {
            if (page.name.toLowerCase()
              .includes(searchInput.toLowerCase())) {
              return <button key={page.name} className="w-full z-50 text-start text-lg text-slate-500 hover:bg-slate-200 py-1 px-2" onClick={() => routerHandler(page.link)}>{page.name}</button>;
            }
          })
        }
      </div>
    </div>
  );
}