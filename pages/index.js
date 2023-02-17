import Head from "next/head";
import Button from "../components/Button";
import ListComponent from "../components/ListComponent";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Event Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button  />

        <div className="flex space-x-2 flex-wrap">
         <ListComponent />
        </div>
      </main>
    </div>
  );
};

export default Home;
