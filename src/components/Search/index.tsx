import style from "./style.module.css";
import { ChangeEvent, useState, Dispatch, FC } from "react";

type Props = {
  setFilterValue: Dispatch<React.SetStateAction<string>>;
};

const Search: FC<Props> = ({ setFilterValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setFilterValue(inputValue);
  };

  return (
    <div className={style.container}>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <button onClick={handleClick}>Найти</button>
    </div>
  );
};

export default Search;
