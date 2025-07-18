import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMyDiv3(props) {
  const [n, setN] = useRecoilState(AtomN);

  const handleUp = () => {
    setN((prev) => {
      const newVal = prev + 1;
      localStorage.setItem("n", newVal);
      return newVal;
    });
  };
  const handleDown = () => {
    setN((prev) => {
      const newVal = prev - 1;
      localStorage.setItem("n", newVal);
      return newVal;
    });
  };

  // const handleSave = () => {
  //   localStorage.setItem("n", n);
  // };
  const handleRemove = () => {
    localStorage.removeItem("n", n);
    setN(0);
  };

  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-500 text-white">
      {`${props.d1} > ${props.d2} > ${props.d3}`}
      <div className="grid grid-cols-4 mt-5">
        <TailButton caption="증가" bcolor="blue" handleClick={handleUp} />
        <TailButton caption="감소" bcolor="blue" handleClick={handleDown} />
        {/* <TailButton caption="저장" bcolor="blue" handleClick={handleSave} /> */}
        <TailButton caption="삭제" bcolor="blue" handleClick={handleRemove} />
      </div>
    </div>
  );
}
