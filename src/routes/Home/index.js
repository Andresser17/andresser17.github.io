// Sections
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div id="home" className="flex items-center min-h-screen">
        <div className="flex flex-col w-full p-4 sm:w-2/4">
          <span className="block mb-2 text-2xl font-extralight">
            Hello, I'm
            <h1 className="text-5xl font-bold">Alejandro Serrano</h1>
          </span>
          <span className="inline-block text-2xl border-b border-border">
            Full Stack Developer
          </span>
        </div>
      </div>
      <main>
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
