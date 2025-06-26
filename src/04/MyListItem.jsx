import { useState } from "react";

export default function MyListItem(props) {
  let [cnt, setCnt] = useState(0);
  const handleClick = () => {
    cnt++;
    setCnt(cnt);
    console.log("cnt = ", cnt);
  };
  return (
    <div className="flex w-full h-full justify-center items-start p-2 border border-slate-400">
      <div className="flex w-1/3 m-2">
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div className="flex flex-col justify-between p-2 m-2 w-2/3 h-full ">
        <div>
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p>{props.content}</p>
        </div>
        <div className="flex justify-end items-center">
          <span onClick={handleClick}>👍</span>
          <span className="inline-flex mx-2 font-bold">like</span>
          <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
  );
}
