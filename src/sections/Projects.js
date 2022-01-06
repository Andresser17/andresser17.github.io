import { useState, useEffect } from "react";
// Components
import Icons from "../components/Icons";
import SectionTitle from "../components/SectionTitle";
// Icons
import { ReactComponent as GithubIcon } from "../icons/github-icon-1.svg";
import { ReactComponent as HerokuIcon } from "../icons/heroku-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow-down-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";

function ProjectLink(props) {
  return (
    <a
      href={props.href}
      className="flex py-2 my-4 bg-black/25 hover:bg-black/40 transition duration-300"
    >
      <span className="inline-block w-6 mx-4 text-white">{props.children}</span>
      <span className="inline-block">{props.text}</span>
    </a>
  );
}

function Card(props) {
  return (
    <article className="px-4 pb-8 mb-16 border-b border-fourth sm:border-none lg:flex lg:justify-around lg:even:flex-row-reverse">
      <div className="w-full py-10 lg:w-5/12">
        <img src={sampleImage} className="w-full" alt="" />

        {/* Source code and live code */}
        <div className="pt-8">
          <ProjectLink href="#" text="Source Code">
            <GithubIcon />
          </ProjectLink>

          <ProjectLink href="#" text="Live Code">
            <HerokuIcon />
          </ProjectLink>
        </div>
      </div>

      <div className="w-fit lg:w-96">
        <h3 className="text-xl font-semibold text-center">
          Hello World Project
        </h3>
        <p className="mt-4 mb-8">
          Sit consequatur sint delectus magnam iste, adipisicing a error
          praesentium pariatur! Iste fuga qui quibusdam dolore sed aliquam ipsa
          maiores! Deleniti hic reprehenderit praesentium ipsam vel reiciendis?
          Qui id aspernatur impedit provident tenetur aliquid? Necessitatibus
          quos odit ducimus eos reprehenderit Nihil.
        </p>
        {/* Used stack */}
        <div className="flex flex-wrap p-4 bg-black/40">
          <span className="block w-full mb-4 text-xl border-b">Used Stack</span>
          <Icons href="#" dim="w-8 h-8">
            <GithubIcon />
          </Icons>
          <Icons href="#" dim="w-8 h-8">
            <HerokuIcon />
          </Icons>
        </div>
      </div>
    </article>
  );
}

function DropdownButton(props) {
  const onDropdown = () => {
    if (props.dropdown) {
      props.setDropdown(false);
    } else {
      props.setDropdown(true);
    }
  };

  return (
    <button
      onClick={onDropdown}
      className="absolute bottom-0 w-12 m-4 fill-first stroke-fourth animate-bounce left-1/2"
    >
      <ArrowIcon />
    </button>
  );
}

function Projects() {
  const [dropdown, setDropdown] = useState(false);
  const basicStyles = "relative w-full px-4 py-8 overflow-hidden bg-first transition-all";
  const [toggle, setToggle] = useState(`${basicStyles}`);

  const changeHeight = () => {
    if (!dropdown) {
      setToggle(`${basicStyles} h-32`);
    } else {
      setToggle(`${basicStyles} h-96`);
    }
  };

  useEffect(() => {
    changeHeight();
  }, [dropdown])

  return (
    <section id="projects" className={toggle}>
      <SectionTitle text="Projects" />
      <div className="sm:grid sm:grid-cols-2 sm:gap-1 lg:block">
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
        <Card text="MODERN HTML & CSS FROM THE BEGINNING" />
      </div>
      <DropdownButton dropdown={dropdown} setDropdown={setDropdown} />
    </section>
  );
}

export default Projects;
