// Components
import Buttons from "../components/Buttons";
import SectionTitle from "../components/SectionTitle";
// Images
import authorPic from "../images/sample-person.jpg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap min-h-screen px-4 py-8 cont-blue-gradient"
    >
      <SectionTitle text="About Me" />
      <div className="flex items-center justify-center w-full mt-8 lg:w-1/2">
        <img src={authorPic} className="rounded w-60 h-60 lg:w-80 lg:h-80" alt="Author" />
      </div>
      <div className="w-full text-center lg:w-1/2">
        <div className="mb-4">
          <p className="py-2">
            Hi there!, I want to thank you for visit my website, my name is
            Alejandro Serrano, I'm a Junior Front End Developer, and I'm in the
            journey of get my first job. I start to been interested in the
            programming since the 16 years old, I know the topic because a
            cousin start to interesting in this topic, I knew nothing of
            programming, I think that was something that make a group of people
            with a white bat in a lab, nothing that you can do from your home,
            something like write a lot of 1 and 0 in the computer.
          </p>
          <p className="py-2">
            What's something that blow up my mind when I start to learning by my
            self, I remember to start viewing videos on YouTube about JavaScript
            and struggling with the concept of what is a function or an
            iteration, then I see a video about what is a web developer, then I
            decide that I want to be one, I see videos of HTML and CSS and a
            little of JavaScript to start building little things, was a fun
            hobby, but then I let it for behind, because the school and my entry
            to the University.
          </p>
          <p className="py-2">
            A year ago I decide that this is the career I want to follow, and I
            start to put all my effort in it, trying to do little steps every
            day, and improve other soft skills like my English dominance,
            practice grammar and a little of speech every day.
          </p>
          <p className="py-2">
            I have the pride to say that I have been follow this path in the
            majority by my own and all the resources and help that provide the
            web and organizations like FreeCodeCamp, The Odin Project and all
            the docs of every framework and tool I have the interest to learn, I
            consider I have the discipline to learn every thing if I propose my
            self.
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
