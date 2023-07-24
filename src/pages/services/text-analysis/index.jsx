import {CustomHelmet} from "../../../helmet/HelmetProvider.jsx";
import {Outlet} from "react-router-dom";

export default function TextAnalysisLayout() {

  return (
    <div>
      <CustomHelmet title="Glomil Portal | Text Analysis"/>
      <Outlet/>
    </div>
  );
}