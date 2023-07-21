import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar";

export default function ServicesLayout() {

  return (
    <div className="h-screen bg-state-100">
      <div className="">
        <Sidebar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}