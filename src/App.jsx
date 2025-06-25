import "./App.css";
import { DiAtom } from "react-icons/di";
import MyClock from "./02/MyClock";
import MyClockTime from "./02/MyClockTime";

function App() {
  return (
    <div className="app-container">
      <MyClock />
      <MyClockTime />
    </div>
  );
}

export default App;
