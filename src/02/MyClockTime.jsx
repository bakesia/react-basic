function MyClockTime() {
  return (
    <div>
      <h4>현재 시각 : {new Date().toLocaleTimeString()}</h4>
    </div>
  );
}

export default MyClockTime;
