import { useEffect, useState, useRef } from "react";
import { DiJsBadge } from "react-icons/di";
import { code } from "./faker/index";
import Code from "./components/Code";
import Header from "./components/Header";

function App() {
  const [current, setCurrent] = useState<number>(0);
  const [pressed, setPressed] = useState<string>("");

  const spanContainer = useRef<any>(null);

  const handleKeyPress = (e: KeyboardEvent): void => {
    setPressed(e.charCode + "|" + Math.random() * e.charCode);
  };

  useEffect(() => {
    if (pressed !== "" && current < code.length) {
      let key: number = Number(pressed.split("|")[0]);
      setCurrent(current + 1);
      let currentSpan: HTMLSpanElement =
        spanContainer.current.children[current];
      if (key == code[current].charCodeAt(0)) {
        currentSpan.className += " correct";
      } else {
        currentSpan.className += " wrong";
      }
    }
  }, [pressed]);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <p className="lang">
          <DiJsBadge color="#e2b714" />
          <span>javascript</span>
        </p>
        <Code code={code} spanContainer={spanContainer} />
      </div>
    </div>
  );
}

export default App;
