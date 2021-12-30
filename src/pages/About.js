// Components
import Buttons from "../components/Buttons";
import SectionTitle from "../components/SectionTitle";
import Icons from "../components/Icons";
// Icons
import githubIcon from "../icons/github-icon-1.svg";
import codepenIcon from "../icons/codepen-icon.svg";
// Images
// import authorPic from "./cara-y-cecula.jpg";

function About() {
  return (
    <section id="about" className="px-4 py-8 bg-first">
      <SectionTitle text="About Me" />
      <div className="w-1/2">
        {/* <img src={authorPic} className="m-auto rounded w-72" /> */}
      </div>
      <div className="text-center">
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
        <div className="flex flex-wrap justify-center">
          <Icons href="#" src={githubIcon} />
          {/* Change to linkedin icon */}
          <Icons href="#" src={codepenIcon} />
          <div className="my-4">
            <Buttons src="#" text="Download my resume" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
