import WelcomePortal from "./welcome-portal/WelcomePortal.jsx";
import PortalLiveProducts from "./portal-live-products/PortalLiveProducts.jsx";

export default function HomePageLayout() {

  return (
    <div>
      <WelcomePortal/>
      <PortalLiveProducts/>
    </div>
  );
}