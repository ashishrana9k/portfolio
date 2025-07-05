// import Image from "next/image";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./Contact/page"
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
