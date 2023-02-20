import Head from "next/head";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import { createApi } from "unsplash-js";

const Home = () => {
  const [animalPhoto, setAnimalPhoto] = useState([""]);

  const getAnimalPhoto = async () => {
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
    // if (unsplashPhotoUrls) setAnimalPhoto(unsplashPhotoUrls);
  };

  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button
          onClick={() => {
            getAnimalPhoto();
          }}
        />
        <div className="flex flex-wrap justify-start">
          {animalPhoto.map((item, i) => (
            <ImageComponent key={i} url={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

//.urls['small']
