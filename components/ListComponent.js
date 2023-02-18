import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAnimalPhoto } from "../utils/getAnimalPhoto";

const ListComponent = (props) => {
  return (
    <div className="">
      <h1 className="text-white text-lg font-serif text-center bg-blue-800 rounded-xl p-3 m-3 w-[20rem] ">
        {props.text}
      </h1>
      {/* <Image src={animalPhoto} alt="photo" width={200} height={200} /> */}
    </div>
  );
};

export default ListComponent;
