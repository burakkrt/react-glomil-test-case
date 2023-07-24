import {Icon07} from "../../../../components/globalIcons.jsx";

export default function QueryResult() {

  return (
    <div>
      <p className="text-2xl font-bold text-slate-700">Bot kullanıcı algoritması sonucu</p>
      <div
        className="flex flex-row place-items-start bg-green-100 p-3 rounded mt-4 text-slate-600 gap-x-2 2xl:w-5/6">
        <Icon07 className="inline-block me-2 text-xl mt-1"/>
        <div className="w-fit">
          <span className="font-bold">This text positive</span>
          <p className="mt-3">%96 Bots.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores</p>
        </div>

      </div>
    </div>
  );
}