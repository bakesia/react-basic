import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  // 전체 fetch 데이터
  const [tdata, setTdata] = useState();

  // 대분류 데이터
  const [c1, setC1] = useState();

  // 선택된 대분류
  const [selC1, setSelC1] = useState();

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

  return (
    <div className="w-full h-full flex flex-col justify-start items-center ">
      {c1 && <TrafficNav title="대분류" c={c1} sel={selC1} setSel={setSelC1} />}
    </div>
  );
}
