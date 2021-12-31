// Components
import Buttons from "../components/Buttons";
import SectionTitle from "../components/SectionTitle";
import Icons from "../components/Icons";
// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
import authorPic from "../images/sample-person.jpg";

function About() {
  return (
    <section id="about" className="flex flex-wrap min-h-screen px-4 py-8 cont-blue-gradient">
      <SectionTitle text="About Me" />
      <div className="flex justify-center w-full mt-8 lg:w-1/2">
        <img src={authorPic} className="rounded w-60 h-60" />
      </div>
      <div className="w-full text-center lg:w-1/2">
        <div className="mb-4">
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
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <Buttons src="#" text="Download my resume" />
        </div>
      </div>
    </section>
  );
}

export default About;
