import { useState, useEffect } from "react";

function MyClockTime() {
  const [ctime, setCtime] = useState(new Date());

  useEffect(() => {
    const tm = setInterval(() => {
      setCtime(new Date());
    }, 1000);

    return () => {
      clearInterval(tm);
    };
  }, []);

  return (
    <div>
      <h4>현재 시각 : {ctime.toLocaleTimeString()}</h4>
    </div>
  );
}

export default MyClockTime;
