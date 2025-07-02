import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdateId, setIsUpdateId] = useState();

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const url = "http://localhost:3001/posts";

  const getFetchData = async () => {
    // const resp = await fetch(url);
    // const data = await resp.json();
    const { data } = await axios.get(url);

    setTdata(data);
  };

  const jsonPost = async () => {
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요.");
      txt1Ref.current.focus();
      return;
    }

    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      auth: txt2Ref.current.value,
    };

    // const resp = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(postData),
    // });

    // const data = await resp.json();
    // console.log(data);

    const { data } = await axios.post(url, postData);

    setTdata([...tdata, data]);
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt1Ref.current.focus();
  };

  const jsonDelete = async (id) => {
    // await fetch(`${url}/${id}`, {
    //   method: "DELETE",
    // });
    await axios.delete(`${url}/${id}`);

    setTdata(tdata.filter((item) => item.id !== id));
  };

  const jsonPut = async () => {
    const putData = {
      id: isUpdateId,
      title: txt1Ref.current.value,
      auth: txt2Ref.current.value,
    };

    // const resp = await fetch(`${url}/${isUpdateId}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(putData),
    // });
    // const data = await resp.json();
    const { data } = axios.put(`${url}/${isUpdateId}`, putData);

    setTdata(tdata.map((item) => (item.id === isUpdateId ? data : item)));

    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt1Ref.current.focus();

    setIsUpdate(false);
    setIsUpdateId("");
  };

  const handleUpdate = (item) => {
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.auth;

    setIsUpdate(true);
    setIsUpdateId(item.id);
  };

  const handleOk = () => {
    if (isUpdate) jsonPut();
    else jsonPost();
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    console.log(tdata);

    let tm = tdata.map((item) => (
      <tr className="h-10 border-b" key={item.id}>
        <td className="text-center">{item.title}</td>
        <td className="text-center">{item.auth}</td>
        <td className="text-center">
          <TailButton
            caption="삭제"
            bcolor="orange"
            handleClick={() => jsonDelete(item.id)}
          />
        </td>
        <td className="text-center">
          <TailButton
            caption="수정"
            bcolor="lime"
            handleClick={() => handleUpdate(item)}
          />
        </td>
      </tr>
    ));

    setTags(tm);
  }, [tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 bg-slate-100 text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">
          제목
        </label>
        <div className="flex col-span-3">
          <input
            type="text"
            id="txt1"
            ref={txt1Ref}
            className="form-input w-full"
          />
        </div>
        <label htmlFor="txt2" className="my-2">
          작성자
        </label>
        <div className="flex">
          <input
            type="text"
            id="txt2"
            ref={txt2Ref}
            className="form-input w-full"
          />
        </div>
        <TailButton
          caption={isUpdate ? "수정" : "입력"}
          bcolor="blue"
          handleClick={handleOk}
        />
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          {/* prettier-ignore */}
          <tr className="bg-black text-white font-bold text-center">
                <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
                <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
                <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
                <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
            </tr>
        </thead>
        <tbody>{tags}</tbody>
      </table>
    </div>
  );
}
