import React, { useState } from "react";
import Logo from "../../assets/icon.png";
import Notifications from "../../assets/Frame.png";
import Calendario from "../../assets/calendario.png";
import Members from "../../assets/Members.png";
import Star from "../../assets/star.png";
import Modal from "react-modal";
import "./Menu.css";

const Menu = () => {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="menu">
      <ul className="container">
        <li className="items">
          <div className="icon_container">
            {" "}
            <a href="" onClick={handleSubmit}>
              {" "}
              <img src={Logo} alt="logo" />
            </a>
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            {" "}
            <a href="" onClick={handleSubmit}>
              <img src={Notifications} alt="notifications" />
            </a>
            <Modal isOpen={modalisOpen}></Modal>
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            <a href="" onClick={handleSubmit}>
              <img src={Calendario} alt="calendar" />
            </a>
          </div>
        </li>
      </ul>
      <ul className="container2">
        <li className="items">
          <div className="icon_container">
            <a href="" onClick={handleSubmit}>
              {" "}
              <img src={Members} alt="members" />
            </a>
          </div>
        </li>
        <li className="items">
          <div className="icon_container">
            <a href="" onClick={handleSubmit}>
              <img src={Star} alt="others" />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
