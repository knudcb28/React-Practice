import Head from "next/head";
import Button from "../components/Button";
import ListComponent from "../components/ListComponent";
import { useState } from "react";
import { getAnimalPhoto } from "../utils/getAnimalPhoto";
import ImageComponent from "../components/ImageComponent";

const Home = () => {
  const [components, setComponents] = useState(["Sample Component"]);
  const [animalPhoto, setAnimalPhoto] = useState([
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ]);

  function addComponent() {
    setComponents([...components, "Sample Component"]);
  }

  function addAnimal() {
    setAnimalPhoto([...animalPhoto, "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"])
  }
  
  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={() => {
          addComponent();
          addAnimal();
        }} />
        <div className="flex flex-wrap justify-start">
          {components.map((item, i) => (
            <ListComponent key={i} text={item} />
          ))}
          {animalPhoto.map((item, i) => (
            <ImageComponent key={i} url={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
