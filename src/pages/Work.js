// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
import sampleImage from "../images/sample-image.png";

function ExtendedCard(props) {
  return (
    <div className="flex flex-wrap content-around justify-center hidden w-full h-full">
      <div className="flex flex-wrap items-start justify-between w-full p-4">
        {/* <img src={slide} className="w-64" /> */}
        {/* <img src={slide} className="w-64" /> */}
        {/* <img src={slide} className="w-64" /> */}
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
    <article className="flex w-full bg-third h-96 even:flex-row-reverse even:bg-second">
      <div className="w-2/4">
        <img src={sampleImage} className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-around w-2/4">
        <h2 className="text-xl text-center">Hello World Project</h2>
        <p className="text-center">
          Dolor possimus quibusdam quis commodi eveniet. Sed at amet vel
          dignissimos qui Quibusdam sint possimus quaerat magnam praesentium
          Itaque beatae eligendi eligendi ratione commodi. Sit ipsum totam
          cupiditate ut tempore Ipsum rem inventore necessitatibus veniam ullam
          labore Nam veniam id doloremque iure nobis nobis, quia Nemo et quasi
          dignissimos voluptatem quaerat Iste a incidunt numquam dicta error?
          Eveniet quam officiis
        </p>
        <div className="flex justify-center">
          <a href="#32" className="block w-12 h-12 mx-4">
            <img src={githubIcon} className="max-w-full max-h-full" />
          </a>
          {/* change for a heroku icon */}
          <a href="#32" className="block w-12 h-12 mx-4">
            <img src={codepenIcon} className="max-w-full max-h-full" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="w-full">
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
