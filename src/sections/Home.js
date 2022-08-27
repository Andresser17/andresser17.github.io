// Sections
import Projects from "sections/Projects";
import Contact from "sections/Contact";

function Home() {
  return (
    <>
      <header
        id="home"
        className="flex items-center min-h-screen cont-blue-gradient"
      >
        <div className="flex flex-col w-full p-4 sm:w-2/4">
          <span className="block mb-2 text-2xl font-extralight">
            Hello, I'm
            <h1 className="text-5xl font-bold">Alejandro Serrano</h1>
          </span>
          <span className="inline-block text-2xl border-b border-fourth">
            Full Stack Developer
          </span>
        </div>
      </header>
      <main>
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
