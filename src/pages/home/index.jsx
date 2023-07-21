import WelcomePortal from "./welcome-portal/WelcomePortal.jsx";
import PortalLiveProducts from "./portal-live-products/PortalLiveProducts.jsx";
import PortalLiveProductsTwo from "./portal-live-products-two/PortalLiveProductsTwo.jsx";

export default function HomePageLayout() {

  return (
    <div>
      <WelcomePortal/>
      <PortalLiveProducts/>
      <PortalLiveProductsTwo/>
    </div>
  );
}