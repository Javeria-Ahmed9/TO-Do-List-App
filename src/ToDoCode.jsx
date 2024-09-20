import "bootstrap/dist/css/bootstrap.min.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";

export function ToDoCode() {
  let [input, setInput] = useState("");
  let [val, setVal] = useState(["breakfast done", "exercise done"]);

  useEffect(() => {
    document.addEventListener("keydown", fun);
    function fun(event) {
      if (event.key === "Enter") {
        AddData();
      }
    }
    return () => document.removeEventListener("keydown", fun);
  });

  let handleInput = (event) => {
    setInput(event.target.value);
  };
  let AddData = () => {
    if (input.trim() !== "") {
      setVal([...val, input]);
      setInput("");
    }
  };
  let DeleteFunction = (i) => {
    let u = val.filter((_, ind) => ind !== i);
    setVal(u);
  };

  let upFun = (i) => {
    let array = [...val];
    if (i > 0) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
      console.log(array);
      setVal(array);
    }
  };
  let downFun = (i) => {
    let array = [...val];
    if (i < array.length - 1) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      console.log(array);
      setVal(array);
    }
  };
  return (
    <div className="container text-center" id="maindiv">
      <h1>To Do List</h1>
      <div className="container">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={handleInput}
        />
        <button
          id="btn"
          className="btn btn-primary"
          type="submit"
          onClick={AddData}
        >
          Add
        </button>
      </div>
      <div id="mydiv">
        {val.map((v, i) => (
          <div key={i} className="container border bg-primary" id="innerdiv">
            <div id="contentid">
              <div className="container" id="main">
                {v}
              </div>
            </div>
            <span id="btn1div">
              <button
                style={{ marginRight: "2px" }}
                onClick={() => DeleteFunction(i)}
              >
                <RiDeleteBin6Line />
              </button>
              <button onClick={() => downFun(i)}>👇</button>
              <button onClick={() => upFun(i)}>👆</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
