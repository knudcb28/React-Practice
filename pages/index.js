import Head from "next/head";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import { createApi } from "unsplash-js";

const Home = () => {
  const [animalPhoto, setAnimalPhoto] = useState([]);

  const getAnimalPhoto = async () => {
    const unsplash = createApi({
      accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
    });

    const photos = await unsplash.photos.getRandom({
      collectionIds: [""],
      topicIds: [""],
      featured: true,
      username: "",
      query: "animal",
      count: 1,
    });

    const unsplashPhotoUrl = photos?.response[0].urls["small"];
    console.log(unsplashPhotoUrl);
    if (unsplashPhotoUrl) setAnimalPhoto([...animalPhoto, unsplashPhotoUrl]);
  };

  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={getAnimalPhoto} />
        <div className="grid grid-cols-1 grid-rows-3 gap-[0.25rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
