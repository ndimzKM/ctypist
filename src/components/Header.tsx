import { FaCopyright } from "react-icons/fa";
type PropType = {
  results: { wpm: number; acc: number };
};

const Header = (props: PropType) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <FaCopyright size={28} color="#e2b714" />
          <span>typist</span>
        </div>
        <ul className="navbar">
          <li>WPM: {props.results.wpm}</li>
          <li>ACC: {props.results.acc}%</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
