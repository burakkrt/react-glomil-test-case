export default function Questioning() {

  return (
    <>
      <p className="text-2xl font-bold">Algoritma Seçiniz</p>
      <div className="my-4 border-b border-b-2 pb-4">
        <label>
          Algoritma Tipini Seçiniz *
          <select className="p-3 mt-1 w-full border rounded text-slate-500 bg-slate-100" name="select-algoritma"
                  id="algorithm">
            <option value="" disabled selected hidden>Bot kullanıcı algoritması</option>
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
          <input className="w-full bg-slate-100 p-3 rounded border border-2" type="text" placeholder="userCount"/>
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border border-2 mt-2" type="text"
                 placeholder="userCount"/>
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border border-2 mt-2" type="text"
                 placeholder="userCount"/>
        </label>
        <label>
          <input className="w-full bg-slate-100 p-3 rounded border border-2 mt-2" type="text"
                 placeholder="userCount"/>
        </label>
        <button className="mt-2 px-2 py-1 bg-blue-700 text-slate-100 rounded"
                onClick={() => alert("button passive")}>Sorgulama Yap
        </button>
      </div>
    </>

  );
}