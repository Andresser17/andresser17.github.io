import slide from "./site-video.jpg";
import githubIcon from "./github-icon-1.svg";
import codepenIcon from "./codepen-icon.svg";

function ExtendedCard(props) {
  return (
    <div className="flex flex-wrap content-around justify-center hidden w-full h-full">
      <div className="flex flex-wrap items-start justify-between w-full p-4">
        <img src={slide} className="w-64" />
        <img src={slide} className="w-64" />
        <img src={slide} className="w-64" />
      </div>
      <a href="#32" className="block w-12 h-12 mx-4">
        <img src={githubIcon} className="max-w-full max-h-full" />
      </a>
      <a href="#" className="block w-12 h-12 mx-4">
        <img src={codepenIcon} className="max-w-full max-h-full" />
      </a>
    </div>
  );
}

function Card(props) {
  return (
    <article className="w-full h-full">
      <div className="w-full h-3/4">
        <img src={slide} className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center w-full bg-green-300 h-1/4">
        <span>{props.text}</span>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="w-full h-screen grid grid-cols-3">
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

export default Work;
