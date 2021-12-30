// Components
import Icons from "../components/Icons";
import SectionTitle from "../components/SectionTitle";
// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";

function Card(props) {
  return (
    <article className="w-full bg-third text-black even:bg-fourth even:text-white">
      <div className="w-full">
        <img src={sampleImage} className="w-full h-60" />
      </div>
      <div className="w-full p-2">
        <h2 className="text-center text-xl">Hello World Project</h2>
        <p className="my-4">
          <div>
            Elit placeat impedit sit possimus sit? Deserunt et corporis itaque
            nam quae libero Officia ipsa eaque ullam debitis ratione. Incidunt
            eius laudantium quasi consequatur nesciunt. Amet voluptate quis illo
            ab.
          </div>
          <div>
            Amet maxime ullam in aut blanditiis quo. Aspernatur quibusdam quo
            voluptate ut ut Tenetur a iste voluptatem sint exercitationem.
            Expedita neque beatae cumque totam enim? Eos doloremque aliquam quo
            qui.
          </div>
        </p>
        <div className="flex justify-center py-2">
          <Icons href="#" src={githubIcon} />
          {/* Replace with a heroku icon */}
          <Icons href="#" src={codepenIcon} />
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="w-full py-8">
      <SectionTitle text="Projects" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
    </section>
  );
}

export default Projects;
