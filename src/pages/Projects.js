// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";

function Card(props) {
  return (
    <article className="flex w-full even:bg-red-400">
      <div className="">
        <img src={sampleImage} className="w-2/4 h-full" />
      </div>
      <div className="flex items-center justify-center w-full bg-green-300 h-1/4">
        <span>{props.text}</span>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="w-full">
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
