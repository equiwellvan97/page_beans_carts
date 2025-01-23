import { Dispatch, FC } from "react";

type Props = {
  num: number;
  setValue: Dispatch<React.SetStateAction<number>>;
};

const Buttons: FC<Props> = ({ num, setValue }) => {
  const handleClick = (numb: number) => {
    setValue(num + numb);
  };
  return (
    <div className="buttons">
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
