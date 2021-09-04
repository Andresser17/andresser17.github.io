import authorPic from "./person-circle.svg";
import githubIcon from "./github-icon-1.svg";
import codepenIcon from "./codepen-icon.svg";

function About() {
  return (
    <section className="flex p-4 bg-gray-400">
      <div className="w-1/2 author-pic">
        <img src={authorPic} className="block w-56 m-auto" />
      </div>
      <div id="author-descrip" className="w-1/2">
        <div>
          <p>
            Dolor laboriosam harum earum rem nostrum accusamus? Ducimus nostrum
            animi repellendus porro velit Cumque dolorum impedit deserunt
            tenetur quaerat. At voluptate architecto asperiores fugiat iste
            libero. Sit nobis nostrum corrupti?
          </p>
        </div>
        <div>
          <a href="#32" className="block w-12 h-12 mx-4">
            <img src={githubIcon} className="max-w-full max-h-full" />
          </a>
          <a href="#" className="block w-12 h-12 mx-4">
            <img src={codepenIcon} className="max-w-full max-h-full" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
