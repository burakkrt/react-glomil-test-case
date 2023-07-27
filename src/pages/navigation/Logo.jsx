import logo from "../../assets/img/glomil-logo.png";
import { useNavigate } from "react-router-dom";

export default function Logo() {

  const navigate = useNavigate();

  return (
    <>
      <button><img className="w-full" src={logo} alt="Glomil Teknoloji Logo"
                   style={{ maxWidth: "172px" }} onClick={() => navigate("/")} />
      </button>
    </>
  );
}