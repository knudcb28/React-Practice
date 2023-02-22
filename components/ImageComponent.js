import { AiFillHeart } from "react-icons/ai";
import heartIcon from "../public/heartIcon.png";
import Image from "next/image";
import { useState } from "react";

const ImageComponent = ({ url }) => {
  const [style, setStyle] = useState(
    "absolute bottom-0 right-0 bg-white h-[2rem] w-[2rem]"
  );
  const [count, setCount] = useState(1)

  let style1 = "absolute bottom-0 right-0 bg-white h-[3rem] w-[3rem]";
  let style2 = "absolute bottom-0 right-0 bg-white h-[4rem] w-[4rem]";
  let style3 = "absolute bottom-0 right-0 bg-white h-[5rem] w-[5rem]";
  let style4 = "absolute bottom-0 right-0 bg-white h-[6rem] w-[6rem]";

  const changeStyle = () => {
    setCount(count + 1)
    console.log(count)
    if (count === 1) {
      setStyle(style1);
    } else if (count === 2) {
      setStyle(style2);
    } else if (count === 3) {
      setStyle(style3);
    } else if (count === 4) {
      setStyle(style4);
    }
  };

  return (
    <div className="relative bg-cover">
      <img src={url} className="bg-cover" />
      <div onClick={() => {
        changeStyle()
       }} >
        <Image src={heartIcon} className={style} alt="animal photo" />
      </div>
      {/* <AiFillHeart className="absolute bottom-0 left-0 bg-white" size={50}/>  */}
    </div>
  );
};

export default ImageComponent;
