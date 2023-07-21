import {Icon01, Icon02, Icon03, Icon04, Icon05} from '../../../components/globalIcons.jsx'

export default function Sidebar() {

  return (
    <div className="w-full h-full left-0 right-0 py-10 px-4 xl:px-10 2xl:px-4 min-[1900px]:px-10 border-e-2">
      <span className="uppercase text-slate-400 text-sm font-bold">Hizmetlerimiz</span>
      <ul className="flex flex-col gap-y-4 text-md mt-4">
        <li>
          <button><Icon02 className="inline-block me-4 text-xl"/>Bots</button>
        </li>
        <li>
          <button><Icon03 className="inline-block me-4 text-xl"/>Translate</button>
        </li>
        <li>
          <button><Icon01 className="inline-block me-4 text-xl"/>Sentiment</button>
        </li>
        <li>
          <button><Icon04 className="inline-block me-4 text-xl"/>Aspect Base Sentiment</button>
        </li>
        <li>
          <button><Icon05 className="inline-block me-4 text-xl"/>Text Analysis</button>
        </li>
      </ul>
    </div>
  );
}