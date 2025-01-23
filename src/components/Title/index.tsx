import { FC } from "react";

type Props = {
  value: number;
};

const Title: FC<Props> = ({ value }) => {
  return (
    <div className="title">
      <h1>{value}</h1>
    </div>
  );
};

export default Title;
