import {Icon06} from "../../../components/globalIcons.jsx"

export default function PortalBox({title, desc, link}) {

  return (
    <div className="box">
      <h3 className="font-bold">{title}</h3>
      <p>{desc}</p>
      <a href={link} className="underline">Hizmetleri Keşfedin
        <Icon06
          className="inline-block ms-1 text-blue-600"/>
      </a>
    </div>
  );
}