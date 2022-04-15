import { FaCopyright } from "react-icons/fa";
import {
  HiRefresh,
  HiCog,
  HiInformationCircle,
  HiUserCircle,
} from "react-icons/hi";
import { MdLeaderboard } from "react-icons/md";
import { snippets } from "../faker/index";

const Header = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <FaCopyright size={28} color="#e2b714" />
          <span>typist</span>
        </div>
        <ul className="navbar">
          <li>WPM: 48</li>
          <li>ACC: 99</li>
        </ul>
      </nav>
      {/*
     Icons
     1. Refresh - to get new set of source code
     2. Leaderboard - to see rankings
     3. About - about page
     4. Settings - settings page
     5. Login - login page

      */}
    </header>
  );
};

export default Header;
