import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import MyClock from "./02/MyClock";
// import Mydiv1 from "./03/Mydiv1";
// import MyList from "./04/MyList";
import Lotto from "./05/Lotto";
import Traffic from "./06/Traffic";
// import MyRef from "./07/MyRef";
import MyRefAdd from "./07/MyRefAdd";
import Gallery from "./08/Gallery";
import RecoilMain from "./10/RecoilMain";
import Rest from "./12/Rest";

import { RiHomeHeartFill } from "react-icons/ri";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full min-h-screen mx-auto">
        <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
          <p>리액트 기초</p>
          <ul className="flex justify-center items-center">
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/">시계</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/lotto">로또</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/traffic">교통사고</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/add">더하기</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/gallery">갤러리</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/recoil">리코일</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/rest">레스트</Link>
            </li>
          </ul>
          <p>
            <Link to="/">
              <RiHomeHeartFill />
            </Link>
          </p>
        </header>
        <main className="grow w-full flex justify-center items-center overflow-y-auto">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/add" element={<MyRefAdd />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/recoil" element={<RecoilMain />} />
            <Route path="/rest" element={<Rest />} />
          </Routes>
        </main>
        <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
          copyright : ybh
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
