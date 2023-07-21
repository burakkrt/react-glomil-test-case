import {Navigate} from "react-router-dom";

export default function PrivatePage({children}) {

  const state = true;

  if (!state) {
    return <Navigate to='/user-login' replace={true}/>
  } else return children
}