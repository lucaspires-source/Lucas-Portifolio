import Hero from "../components/Hero";
import Header from "../components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Lucas, Full Stack Developer</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
    </div>
  );
};

export default Home;
