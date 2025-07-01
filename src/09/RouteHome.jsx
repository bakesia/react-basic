import { Link } from "react-router-dom";

export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RouteHome</h1>
      <div className="w-1/2 grid grid-cols-2 m-10">
        <div className="w-full flex flex-col m-2 p-2 justify-start items-center text-xl">
          <h2>page1 값</h2>
          <ul>
            <li>
              <Link to="/p1/🍎">🍎사과</Link>
            </li>
            <li>
              <Link to="/p1/🍌">🍌바나나</Link>
            </li>
            <li>
              <Link to="/p1/🥕">🥕당근</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/2 grid grid-cols-2 m-10">
        <div className="w-full flex flex-col m-2 p-2 justify-start items-center text-xl">
          <h2>page2 값</h2>
          <ul>
            <li>
              <Link to="/p2/?item1=🍎&item2=🍌&item3=🥕">🍎, 🍌, 🥕</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
