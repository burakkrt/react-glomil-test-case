import { Icon01, Icon02, Icon03, Icon04, Icon05 } from "../../../components/globalIcons.jsx";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Sidebar() {


  return (
    <div className="w-full h-full left-0 right-0 py-10 px-4 xl:px-10 2xl:px-4 min-[1900px]:px-10 border-e-2">
      <span className="uppercase text-slate-400 text-sm font-bold">Hizmetlerimiz</span>
      <ul className="flex flex-col gap-y-4 text-md mt-4">
        <li>
          <NavLink to="/services/bots"><Icon02 className="inline-block me-4 text-xl" />Bots</NavLink>
        </li>
        <li>
          <NavLink to="/services/translate"><Icon03 className="inline-block me-4 text-xl" />Translate</NavLink>
        </li>
        <li>
          <NavLink to="/services/text-analysis/sentiment"><Icon01
            className="inline-block me-4 text-xl" />Sentiment</NavLink>
        </li>
        <li>
          <NavLink to="/services/aspect-base-sentiment"><Icon04 className="inline-block me-4 text-xl" />Aspect Base
            Sentiment</NavLink>
        </li>
        <li>
          <NavLink to="/services/text-analysis/"><Icon05 className="inline-block me-4 text-xl" />Text Analysis</NavLink>
        </li>
      </ul>
    </div>
  );
}