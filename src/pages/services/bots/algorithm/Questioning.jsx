import { useSelector, useDispatch } from "react-redux";
import {
  setAlgorithmSelect,
  setUserCount1,
  setUserCount2,
  setUserCount3,
  setUserCount4
} from "../../../../stores/algorithm.jsx";

export default function Questioning() {

  const algorithmStates = useSelector(state => state.algorithmSelectReducer);
  const dispatch = useDispatch();

  function algorithmSelectHandler(e) {
    dispatch(setAlgorithmSelect(e.target.value));
  }

  const res = useSelector(state => state.algorithmSelectReducer);

  function getBotsStates() {
    alert(`Algoritma Tipi : ${res.algorithmSelect}\nCount 1 : ${res.userCount1}\nCount 2 : ${res.userCount2}\nCount 3 : ${res.userCount3}\nCount 4 : ${res.userCount4}\n\nBu işlme henüz aktif edilmedi.`);
  }

  return (
    <>
      <p className="text-2xl font-bold">Algoritma Seçiniz</p>
      <div className="my-4 border-b-2 pb-4">
        <label>
          Algoritma Tipini Seçiniz *
          <select className="p-3 mt-1 w-full border rounded text-slate-500 bg-slate-100" name="select-algoritma"
                  id="algorithm" onChange={algorithmSelectHandler} defaultValue={algorithmStates.algorithmSelect}>
            <option value="" disabled hidden>Bot kullanıcı algoritması</option>
            <optgroup label="Yöntemler">
              <option value="yontemA">Yöntem A</option>
              <option value="yontemB">Yöntem B</option>
              <option value="yontemC">Yöntem C</option>
            </optgroup>
            <optgroup label="Sistemler">
              <option value="sistemKare">Sistem Kare</option>
              <option value="sistemUcgen">Sistem Üçgen</option>
              <option value="sistemSilindir">Yöntem Silindir</option>
            </optgroup>
          </select>
        </label>
      </div>
      <div className=" mt-10">
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border-2" type="text" placeholder="userCount"
                 onChange={(e) => dispatch(setUserCount1(e.target.value))} />
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border-2 mt-2" type="text"
                 placeholder="userCount" onChange={(e) => dispatch(setUserCount2(e.target.value))} />
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border-2 mt-2" type="text"
                 placeholder="userCount" onChange={(e) => dispatch(setUserCount3(e.target.value))} />
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border-2 mt-2" type="text"
                 placeholder="userCount" onChange={(e) => dispatch(setUserCount4(e.target.value))} />
        </label>
        <button className="mt-2 px-2 py-1 bg-blue-700 text-slate-100 rounded"

                onClick={getBotsStates}>Sorgulama Yap
        </button>
      </div>
    </>

  );
}