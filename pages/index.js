import Head from "next/head";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import { createApi } from "unsplash-js";

const Home = () => {

 // initial state with an empty array - showing no photos to the user
  const [animalPhoto, setAnimalPhoto] = useState([]);

// function that gets a random animal photo from the unsplash API
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
    return unsplashPhotoUrl;
  };

// onClick event handler function, updates state to include previous animal photos, and adds a new one to the array
  const handleClick = async () => {
    setAnimalPhoto([...animalPhoto, await getAnimalPhoto()])
  }

// map through animalPhoto array and display photos to user from Image Component
  const renderedAnimals = animalPhoto.map((item, i) => (
    <ImageComponent key={i} url={item} />
  ))

  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={handleClick} />
        <div className="grid grid-cols-1 grid-rows-3 gap-[0.25rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderedAnimals}
        </div>
      </main>
    </div>
  );
};

export default Home;

//.urls['small']
