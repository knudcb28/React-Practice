import React,  { useEffect, useState } from "react";
import Image from "next/image";
import {getAnimalPhoto} from "../utils/getAnimalPhoto"

const ListComponent =  () => {

  const [animalPhoto, setAnimalPhoto] = useState({})

  useEffect(() => {
    getAnimalPhoto()
    .then(unsplashPhotoUrl => 
      setAnimalPhoto(unsplashPhotoUrl)
    );
  }, [])

  return (
    <div className="">
      <Image src={animalPhoto} alt="photo" width={200} height={200} />
    </div>
  );
};

export default ListComponent;
