import { createPortal } from "react-dom";
import style from "./style.module.css";
import { FC } from "react";

type Props = {
  isModal: boolean;
  onClick: () => void;
};

const Modal: FC<Props> = ({ isModal, onClick }) => {
  if (!isModal) {
    return null;
  }

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div className={style.container} onAuxClick={onClick}>
      <div className={style.modal}></div>
    </div>,
    modalRoot
  );
};

export default Modal;
