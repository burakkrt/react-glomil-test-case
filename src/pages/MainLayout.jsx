import { CustomHelmet } from "../helmet/HelmetProvider.jsx";
import { Outlet } from "react-router-dom";
import Header from "./navigation";
import Footer from "./footer";

export default function MainLayout() {


  return (
    <>
      <CustomHelmet />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}