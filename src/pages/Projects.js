// Components
import Icons from "../components/Icons";
import Buttons from "../components/Buttons";
import SectionTitle from "../components/SectionTitle";
// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";

function Card(props) {
  return (
    <article className="pb-8 mb-16 border-b border-fourth px-4 sm:border-none lg:flex lg:justify-around lg:even:flex-row-reverse">
      <div className="w-full py-10 lg:w-5/12">
        <img src={sampleImage} className="w-full" alt="" />

        {/* Source code and live code */}
        <div className="flex pt-8">
          <div className="mr-4">
            <Buttons href="#" text="Source Code" />
          </div>
          <div className="mr-4">
            <Buttons href="#" text="Live Code" />
          </div>
        </div>
      </div>

      <div className="w-fit lg:w-96">
        <h2 className="text-center text-xl">Hello World Project</h2>
        <p className="my-4">
          Sit consequatur sint delectus magnam iste, adipisicing a error
          praesentium pariatur! Iste fuga qui quibusdam dolore sed aliquam ipsa
          maiores! Deleniti hic reprehenderit praesentium ipsam vel reiciendis?
          Qui id aspernatur impedit provident tenetur aliquid? Necessitatibus
          quos odit ducimus eos reprehenderit Nihil.
        </p>
        {/* Used stack */}
        <div className="flex flex-wrap">
          <span className="block w-full mb-4 text-xl">Stack</span>
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
    <section id="projects" className="w-full py-8 px-4 bg-first">
      <SectionTitle text="Projects" />
      <div className="sm:grid sm:grid-cols-2 sm:gap-1 lg:block">
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      </div>
      {/* <Card text="MODERN HTML & CSS FROM THE BEGINNING" /> */}
      {/* <Card text="MODERN HTML & CSS FROM THE BEGINNING" /> */}
      {/* <Card text="MODERN HTML & CSS FROM THE BEGINNING" /> */}
      {/* <Card text="MODERN HTML & CSS FROM THE BEGINNING" /> */}
      {/* <Card text="MODERN HTML & CSS FROM THE BEGINNING" /> */}
    </section>
  );
}

export default Projects;
