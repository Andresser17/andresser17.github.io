import { useState } from "react";
// Components
import Icons from "../components/Icons";
import SectionTitle from "../components/SectionTitle";
// Icons
import { ReactComponent as GithubIcon } from "../icons/github-icon-1.svg";
import { ReactComponent as ExternalLinkIcon } from "../icons/external-link-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow-down-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";
// Articles to iterate
import projectsArticles from "../projectsArticles";

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
    <article className="px-4 pb-8 my-16 border-b border-fourth sm:border-none md:flex md:justify-around md:even:flex-row-reverse">
      <div className="w-full md:w-5/12">
        <img src={props.image} className="w-full shadow-sm shadow-white/10" />
        {/* Source code and live code */}
        <div className="pt-8">
          <ProjectLink href={props.sourceCode} text="Source Code">
            <GithubIcon />
          </ProjectLink>

          <ProjectLink href={props.liveCode} text="Live Code">
            <ExternalLinkIcon />
          </ProjectLink>
        </div>
      </div>

      <div className="w-fit md:ml-8 md:w-96">
        <h3 className="text-xl font-semibold text-center">{props.title}</h3>
        <p className="mt-4 mb-8">{props.description}</p>
        {/* Used stack */}
        {/* <div className="flex flex-wrap p-4 bg-black/40"> */}
        {/*   <span className="block w-full mb-4 text-xl border-b">Used Stack</span> */}
        {/*   {props.children} */}
        {/* </div> */}
      </div>
    </article>
  );
}

function OpenButton(props) {
  const handleClick = () => {
    props.setOpen(!props.open);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-0 w-12 m-4 fill-first stroke-fourth animate-bounce left-1/2"
    >
      <ArrowIcon />
    </button>
  );
}

function Projects() {
  // const [open, setOpen] = useState(false);
  const basicStyles =
    "relative w-full px-4 py-8 overflow-hidden bg-first transition-all";
  const [toggle, setToggle] = useState(`${basicStyles}`);
  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // useEffect(() => {
  //   const animHeight = () => {
  //     if (!open) {
  //       setToggle(`${basicStyles} min-h-fit`);
  //     } else {
  //       setToggle(`${basicStyles} max-h`);
  //     }
  //   };
  //   animHeight(open);
  // }, [open]);

  const cards = projectsArticles.map((item) => {
    const usedStack = item.usedStack.map((Icon, key) => {
      return (
        <Icons key={key} dim="w-8 h-8">
          <Icon />
        </Icons>
      );
    });

    return (
      <Card
        image={item.image}
        key={item.title}
        title={item.title}
        description={item.description}
        sourceCode={item.sourceCode}
        liveCode={item.liveCode}
      >
        {usedStack}
      </Card>
    );
  });

  return (
    <section id="projects" className={toggle}>
      <SectionTitle text="Projects" />
      <div>{cards}</div>
      {/* <OpenButton open={open} setOpen={setOpen} /> */}
    </section>
  );
}

export default Projects;
