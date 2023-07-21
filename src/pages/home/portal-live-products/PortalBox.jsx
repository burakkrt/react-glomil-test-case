import {AiOutlineArrowRight} from "react-icons/ai";

export default function PortalBox({title, desc, link}) {

  return (
    <div className="box">
      <h3 className="font-bold">{title}</h3>
      <p>{desc}</p>
      <a href={link} className="underline">Hizmetleri Keşfedin<AiOutlineArrowRight
        className="inline-block ms-1 text-blue-600"/></a>
    </div>
  );
}