export default function MyDiv3(props) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-500 text-white">
      {`${props.d1} > ${props.d2} > ${props.d3}`}
    </div>
  );
}
