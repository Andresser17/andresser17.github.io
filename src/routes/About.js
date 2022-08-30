// Images
import authorPic from "images/personal-photo.webp";

function About() {
  return (
    <section className="px-4 pt-32 pb-8 flex flex-wrap min-h-screen sm:px-8 lg:px-12">
      <h2 className="w-full mb-10 text-5xl font-semibold sm:text-6xl">About</h2>
      <div className="w-full max-w-[50rem]">
        <div className="mb-4 min-h-[20rem]">
          <img
            src={authorPic}
            className="object-cover rounded w-60 h-64 mb-4 m-auto sm:float-left sm:mr-8"
            alt="Author"
          />
          <span className="block mb-2 text-xl font-semibold">
            Hello, my name is Alejandro Serrano.
          </span>
          <p className="leading-8 text-xl">
            Young Software engineer with more than Three years of experience
            learning programming as a hobby, with experience working with a team
            in academic projects applying SCRUM methodologies and Gitflow. With
            passion for clean code practices, and collaborate to Open Source.
          </p>
        </div>
        <div className="mb-8 w-full max-w-[40rem]">
          <h3 className="mb-4 text-3xl font-semibold sm:text-4xl">Skills</h3>
          <ul className="[&>li]:leading-8 text-xl">
            <li>
              Proficiency with the React and associated libraries (React-Router,
              Redux).
            </li>
            <li>More than Three years of experience with HTML/CSS and JS.</li>
            <li>Design and Creation of REST APIs using ExpressJS.</li>
            <li>Experience with NodeJS.</li>
            <li>Experience with Python.</li>
            <li>Experience with WordPress and PHP.</li>
          </ul>
        </div>
        <div className="mb-8 w-full max-w-[40rem]">
          <h3 className="mb-4 text-3xl font-semibold sm:text-4xl">Work</h3>
          <p className="leading-8 text-xl">
            Experience working on academic projects applying the best practices,
            and learning new technologies for solving the daily problems of a
            Software Developer. I have experience working on an E-commerce
            project collaborating with more than six co-workers applying SCRUM
            methodologies and a correct Gitflow using GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
