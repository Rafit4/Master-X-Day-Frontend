import React from "react";
import Logo from "../../assets/icon.png";
import Notifications from "../../assets/Frame.png";
import Calendario from "../../assets/calendario.png";
import Members from "../../assets/Members.png";
import Star from "../../assets/star.png";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="container">
        <li className="items">
          <div className="icon_container">
            {" "}
            <img src={Logo} alt="logo" />
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            {" "}
            <img src={Notifications} alt="notifications" />
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            <img src={Calendario} alt="calendar" />
          </div>
        </li>
      </ul>
      <ul className="container2">
        <li className="items">
          <div className="icon_container">
            <img src={Members} alt="members" />
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            <img src={Star} alt="others" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
