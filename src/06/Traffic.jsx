import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  // 전체 fetch 데이터
  const [tdata, setTdata] = useState();

  // 대분류 데이터
  const [c1, setC1] = useState();

  // 선택된 대분류
  const [selC1, setSelC1] = useState();

  // 중분류 데이터
  const [c2, setC2] = useState();

  // 선택된 중분류
  const [selC2, setSelC2] = useState();

  // 상세정보
  const [info, setInfo] = useState();

  const getFetchData = () => {
    // prettier-ignore
    const key = import.meta.env.VITE_API_KEY;
    const encodedKey = encodeURIComponent(key); // 인코딩 필수!

    const url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=${encodedKey}`;

    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.data))
      .catch((err) => console.log(err));
  };

  // 컴포넌트 생성시 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  // tdata 변경되었을 때
  useEffect(() => {
    if (!tdata) return;

    // 대분류 생성
    let tm = tdata.map((item) => item["사고유형대분류"]);
    tm = [...new Set(tm)];

    setC1(tm);
    console.log("tm", tm);
  }, [tdata]);

  // 중분류 생성
  useEffect(() => {
    if (!tdata || !c1 || !selC1) return;

    let tm = tdata
      .filter((item) => item["사고유형대분류"] === selC1)
      .map((item) => item["사고유형"]);
    setC2(tm);
  }, [selC1]);

  useEffect(() => {
    if (!selC2) return;

    let tm = tdata.filter(
      (item) => item["사고유형대분류"] === selC1 && item["사고유형"] === selC2
    )[0];

    // console.log(tm);
    const infokey = [
      "사고건수",
      "사망자수",
      "중상자수",
      "경상자수",
      "부상신고자수",
    ];

    tm = infokey.map((item) => (
      <div key={item} className="flex p-10 rounded-md">
        <div className="w-1/2 h-10 flex justify-center items-center bg-lime-600 text-white font-bold">
          {item}
        </div>
        <div className="w-1/2 h-10 flex justify-center items-center border">
          {parseInt(tm[item]).toLocaleString()}
        </div>
      </div>
    ));
    setInfo(tm);
  }, [selC2]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center ">
      {c1 && <TrafficNav title="대분류" c={c1} sel={selC1} setSel={setSelC1} />}
      {c2 && (
        <TrafficNav title="사고유형" c={c2} sel={selC2} setSel={setSelC2} />
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  );
}
