import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar";
import {CustomHelmet} from "../../helmet/HelmetProvider.jsx";

export default function ServicesLayout() {

  return (
    <div className="grid grid-cols-12 mb-10 border-t-2 border-b-2">
      <CustomHelmet title="Glomil Portal | Hizmetler"/>
      <div className="hidden col-span-12 lg:block lg:col-span-3 2xl:col-span-2">
        <Sidebar/>
      </div>
      <div className="col-span-12 lg:col-start-4 lg:col-span-9 2xl:col-start-3 2xl:col-span-10"
           style={{minHeight: "100vh"}}>
        <Outlet/>
      </div>
    </div>
  );
}