import {router} from '../router/router.jsx'
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import '../components/globalIcons.jsx';
import {Icon08} from "./globalIcons.jsx";

export default function Breadcrumbs() {

  const breadcrumbs = useBreadcrumbs(router);

  return (
    <div className="flex flex-col sm:flex-row sm:w-fit flex-wrap items-center gap-2 my-4 text-slate-600">
      {breadcrumbs.map(({match, breadcrumb}) => {
          return <NavLink
            className={`duration-150 hover:text-blue-700 `}
            key={match.pathname}
            to={match.pathname}>
            {match.pathname === '/' && <Icon08 className="text-xl me-1 hidden sm:inline-block"/>}
            <span className="border-b border-b-2 pb-1 sm:border-0 sm:pb-0 align-middle">{breadcrumb}</span>
            {breadcrumbs[breadcrumbs.length - 1].key !== breadcrumb.key &&
              <span className="ms-2 hidden sm:inline-block">/</span>}
          </NavLink>
        }
      )}
    </div>
  );
}