import { Bean } from "../../types/bean";
import style from "./style.module.css";
import { FC } from "react";

type Props = {
  data: Bean;
};

const Card: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <img src={data.imageUrl} alt="" />
      <h2>{data.flavorName}</h2>
      <p>{data.description}</p>
      {data.sugarFree === true ? <p>Not sugar</p> : <p>With sugar</p>}
    </div>
  );
};

export default Card;
