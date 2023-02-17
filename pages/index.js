import Head from "next/head";
import Button from "../components/Button";
import ListComponent from "../components/ListComponent";
import { useState } from "react";

const Home = () => {
  const [components, setComponents] = useState(["Sample Component"]);

  function addComponent() {
    setComponents([...components, "Sample Component"]);
  }

  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={addComponent} />
      <div className="flex flex-wrap justify-start">
        {components.map((item, i) => (
          <ListComponent key={i} text={item} />
        ))}
        
      </div>
      </main>
    </div>
  );
};

export default Home;
