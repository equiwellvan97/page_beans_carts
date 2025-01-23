import { useRef } from "react";

const Example = () => {
  // const pRef = useRef<HTMLParagraphElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    // if (pRef.current) {
    //   pRef.current.textContent = "New text";
    // }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      {/* <p ref={pRef}>text</p> */}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Example;
