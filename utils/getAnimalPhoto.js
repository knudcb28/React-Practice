import { createApi } from "unsplash-js";
import { useState } from "react";

export const getAnimalPhoto = async () => {
  const [animalPhoto, setAnimalPhoto] = useState([""]);

  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
  });

  const photos = await unsplash.photos.getRandom({
    collectionIds: [""],
    topicIds: [""],
    featured: true,
    username: "",
    query: "animals",
    count: 1,
  });

  const unsplashPhotoUrls = photos?.response[0].urls["small"];
  console.log(unsplashPhotoUrls);
  setAnimalPhoto([...animalPhoto, unsplashPhotoUrls]);
};
