import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  const fruits = ["🍎", "🍌", "🍉"];

  const loc = useLocation();
  console.log(loc.search);
  console.log(loc.pathname);
  const [sParams] = useSearchParams();

  const qlist = [...sParams];
  const lis = qlist.map((item) => (
    <li key={item[0]}>
      {item[1]}
      {fruits.includes(item[1]) ? ": 과일입니다." : ": 과일이 아닙니다."}
    </li>
  ));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RoutePage2</h1>
      <div className="w-full flex flex-col m-2 p-2 justify-start items-center text-xl">
        <ul>{lis}</ul>
      </div>
    </div>
  );
}
