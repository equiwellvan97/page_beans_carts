// import { useState } from "react";
// import Modal from "../Modal";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";

const Nav = () => {
  // const [isModal, setIsModal] = useState(true);

  return (
    <nav className={style.container}>
      <a>Beans</a>
      <a>Facts</a>
      <a>Recipes</a>
      <a>Combinations</a>
      <a>History</a>
      <SwitchTheme />
      {/* <Modal isModal={isModal} onClick={() => setIsModal(false)} /> */}
    </nav>
  );
};

export default Nav;
