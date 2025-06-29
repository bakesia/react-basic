import TailButton from "../UI/TailButton";
import { useRef, useEffect } from "react";

export default function MyRefAdd() {
  const x1 = useRef(0);
  const x2 = useRef(0);
  const x3 = useRef(0);

  const handleAdd = () => {
    if (!x1.current.value) {
      alert("첫번째 값을 입력하시오.");
      x1.current.focus();
      return;
    }
    if (!x2.current.value) {
      alert("두번째 값을 입력하시오.");
      x2.current.focus();
      return;
    }
    x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
  };

  const handleFocus = (x) => {
    x3.current.value = "";
    x.current.value = "";
  };

  useEffect(() => {
    x1.current.focus();
  }, []);

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="grid bg-slate-50 grid-cols-5 gap-2 m-5 p-5">
        <input
          type="number"
          id="txt1"
          ref={x1}
          onFocus={() => handleFocus(x1)}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5"
        />
        <div className="flex justify-center items-center text-xl font-bold">
          +
        </div>
        <input
          type="number"
          id="txt2"
          ref={x2}
          onFocus={() => handleFocus(x2)}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5"
        />
        <TailButton caption="=" bcolor="orange" handleClick={handleAdd} />
        <input
          type="number"
          id="txt3"
          ref={x3}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-center text-xl p-2.5"
        />
      </div>
    </div>
  );
}
