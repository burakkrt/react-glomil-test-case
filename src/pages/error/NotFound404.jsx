import {CustomHelmet} from "../../helmet/HelmetProvider.jsx";

export default function NotFound404() {

  return (
    <div>
      <CustomHelmet title="Glomil | 404 Not Found" noIndex={true}/>
      Welcome to error page
    </div>
  );
}