import Head from "next/head";
import Main from "./components/Main";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soran Raof | Full Stack Developer</title>
      </Head>
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
