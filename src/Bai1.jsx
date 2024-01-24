import React, { useState } from "react";

const Bai1 = ({ name, img, email }) => {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <p>{name}</p>
      {/* {click && <p>{email} </p>} */}
      <button onClick={handleClick}>{click ? "bat email" : "tat email"}</button>
      {click ? <p>{email} </p> : ""}
      <img src={img} alt="" width={200} height={200} />
    </>
  );
};

export default Bai1;
