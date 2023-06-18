import Hero from "../components/Hero";
import Header from "../components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portifólio do Lucas</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
