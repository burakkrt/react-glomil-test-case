import {useNavigate} from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  function btnPassive() {
    alert('Button Passive')
  }

  return (
    <div className="flex flex-col justify-center md:flex-row text-slate-700 gap-x-10 gap-y-5 pb-14">
      <button className="border-b-2 pb-2 md:border-b-0" onClick={() => navigate('/')}>@ 2023 Glomil Portal</button>
      <button className="border-b-2 pb-2 md:border-b-0" onClick={btnPassive}>Carrers</button>
      <button className="border-b-2 pb-2 md:border-b-0" onClick={btnPassive}>Trademark</button>
      <button className="border-b-2 pb-2 md:border-b-0" onClick={btnPassive}>Privacy</button>
      <button className="border-b-2 pb-2 md:border-b-0" onClick={btnPassive}>Licanse</button>
    </div>
  );
}