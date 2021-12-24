import authorPic from "./cara-y-cecula.jpg";
import githubIcon from "./github-icon-1.svg";
import codepenIcon from "./codepen-icon.svg";
import Buttons from "./Buttons";
import SectionTitle from "./SectionTitle";

function Icons(props) {
  return (
    <a href={props.href} className="block w-12 h-12 mx-4">
      <img src={props.src} className="max-w-full max-h-full" />
    </a>
  );
}

function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap items-start h-screen px-4 py-8 text-white bg-first"
    >
      <div className="flex justify-center w-full p-4">
        <SectionTitle text="About Me" />
      </div>
      <div className="w-1/2">
        <img src={authorPic} className="m-auto rounded w-72" />
      </div>
      <div className="w-1/2 text-center">
        <div className="p-4">
          <p className="py-2">
            Dolor laboriosam harum earum rem nostrum accusamus? Ducimus nostrum
            animi repellendus porro velit Cumque dolorum impedit deserunt
            tenetur quaerat. At voluptate architecto asperiores fugiat iste
            libero. Sit nobis nostrum corrupti?
          </p>
          <p className="py-2">
            Amet nobis reiciendis consectetur aliquid nobis eaque. Eum
            consequatur ipsum possimus sunt adipisci? Quo et eaque culpa modi
            non vitae Porro iste qui dignissimos dolorem delectus suscipit
            Dolorem corrupti optio
          </p>
          <p className="py-2">
            Ipsum quod pariatur alias quo voluptate vitae. Hic facere facilis
            dolores necessitatibus molestias. Fugit veritatis consequuntur
            dolores esse illo! Dolor quaerat soluta quo velit voluptates! Ullam
            blanditiis rerum soluta quasi!
          </p>
        </div>
        <div className="flex justify-center p-4">
          <Icons href="#" src={githubIcon} />
          <Icons href="#" src={codepenIcon} />
          <Buttons src="#" text="Download my resume" /> 
        </div>
      </div>
    </section>
  );
}

export default About;
