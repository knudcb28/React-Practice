import heartIcon from "../public/heartIcon.png";
import Image from "next/image";
import { useState } from "react";

const ImageComponent = ({ url }) => {
  // This is the default styling for the heart image
  const [style, setStyle] = useState(
    "absolute bottom-0 right-0 bg-white h-[2rem] w-[2rem]"
  );

  // This is the default count
  const [count, setCount] = useState(1);

  //sets the styles for the heart image
  let style1 = "absolute bottom-0 right-0 bg-white h-[3rem] w-[3rem]";
  let style2 = "absolute bottom-0 right-0 bg-white h-[4rem] w-[4rem]";
  let style3 = "absolute bottom-0 right-0 bg-white h-[5rem] w-[5rem]";
  let style4 = "absolute bottom-0 right-0 bg-white h-[6rem] w-[6rem]";

  // This function is used in conjuction with the changeStyle function to determine previous size of the heart image and update
  const updateCount = () => {
    setCount(count + 1);
  };

  // This function increases the size of the heart every tiume the user clicks it
  const changeStyle = () => {
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
    <div className="relative bg-center bg-no-repeat ">
      <img src={url} className="h-[100%] w-[100%] object-cover" />
      <div
        onClick={() => {
          updateCount();
          changeStyle();
        }}
      >
        <Image src={heartIcon} className={style} alt="animal photo" />
      </div>
      {/* <AiFillHeart className="absolute bottom-0 left-0 bg-white" size={50}/>  */}
    </div>
  );
};

export default ImageComponent;
