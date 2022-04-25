import { useEffect, useState, useRef } from "react";
import { DiJsBadge } from "react-icons/di";
import { IoReloadOutline } from "react-icons/io5";
import Code from "./components/Code";
import Header from "./components/Header";
import { checkSpecialChar, netWPM, randomSnippet, startTimer } from "./utils";

type Time = {
  start: number;
  end: number;
};

type Results = {
  wpm: number;
  acc: number;
};

function App() {
  const [current, setCurrent] = useState<number>(0);
  const [pressed, setPressed] = useState<string>("");
  const [results, setResults] = useState<Results>({ wpm: 0, acc: 0 });
  const [errors, setErrors] = useState<number>(0);
  const [time, setTime] = useState<Time>({ start: 0, end: 0 });
  const [code, setCode] = useState<string>(() => randomSnippet());

  const spanContainer = useRef<any>(null);

  const handleKeyPress = (e: KeyboardEvent): void => {
    setPressed(e.charCode + "|" + Math.random() * e.charCode);
  };

  const reset = () => {
    setCurrent(0);
    setPressed("");
    setResults({ wpm: 0, acc: 0 });
    setErrors(0);
    setTime({ start: 0, end: 0 });
    setCode(randomSnippet());
    for (let i = 0; i < spanContainer.current.children.length; i++) {
      let elem: HTMLSpanElement = spanContainer.current.children[i];
      if (elem.className !== "tab") elem.className = "";
    }
  };

  useEffect(() => {
    if (pressed !== "" && current < code.length) {
      if (current === 0) {
        setTime((prevState) => ({ ...prevState, start: startTimer() }));
      }
      let key: number = Number(pressed.split("|")[0]);
      setCurrent(current + 1);
      let currentSpan: HTMLSpanElement =
        spanContainer.current.children[current];
      console.log(code[current], code[current].charCodeAt(0));
      if (checkSpecialChar(code, current)) {
        console.log("I made it here");
      } else {
        if (key === code[current].charCodeAt(0)) {
          currentSpan.className += " correct";
        } else if (currentSpan.textContent === "spa") {
        } else {
          if (
            code[current].charCodeAt(0) !== 32 &&
            code[current].charCodeAt(0) !== 10
          )
            setErrors(errors + 1);
          currentSpan.className += " wrong";
        }
        if (current === code.length - 1) {
          setTime((prevState) => ({ ...prevState, end: startTimer() }));
        }
      }
    }
  }, [pressed]);

  useEffect(() => {
    if (time.start !== 0 && time.end !== 0) {
      let minutes = (time.end - time.start) / 1000 / 60;
      let WPM = netWPM(code.length, minutes, errors);
      let ACC = ((code.length - errors) / code.length) * 100;
      ACC = Math.floor(ACC);
      setResults({ wpm: Math.round(WPM), acc: ACC });
    }
  }, [time]);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <Header results={results} />
        <div className="container">
          <p className="lang">
            <DiJsBadge color="#e2b714" />
            <span>javascript</span>
          </p>
          <Code code={code} spanContainer={spanContainer} />
        </div>
        <div onClick={reset} className="reload">
          <IoReloadOutline size={35} color="#e2b714" />
        </div>
      </main>
    </div>
  );
}

export default App;
