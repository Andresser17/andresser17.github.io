// Images
import authorPic from "images/PersonalPhoto-02.jpg";

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
          <span className="block mb-4 text-lg font-semibold">
            Hi, I'm Alejandro
          </span>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="mb-8 w-full max-w-[40rem]">
          <h3 className="mb-4 text-3xl font-semibold sm:text-4xl">Skills</h3>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="mb-8 w-full max-w-[40rem]">
          <h3 className="mb-4 text-3xl font-semibold sm:text-4xl">Work</h3>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
