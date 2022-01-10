import React, { useState } from "react";
// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { BsWordpress } from "react-icons/bs";
// Helpers
import deviceType from "helpers/deviceType";
// Styles
import styles from "./Projects.module.css";
// Envs
import { GITHUB_PROFILE } from "app.config";
// Articles to iterate
import projectsArticles from "projectsArticles";

function CardImage({ image, links }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      className={`w-full text-text flex justify-center h-80 lg:h-[32rem] xl:h-[36rem] relative ${styles["card-image"]} primary`}
    >
      <img
        src={image.url}
        alt={image.src}
        className="w-auto h-full object-cover"
      />
      {/* open when user hover */}
      <div
        className={`absolute top-0 bg-black/70 w-full h-full justify-center items-center ${
          showLinks ? "flex" : "hidden"
        } ${styles["links-container"]}`}
      >
        <a
          className="mx-4"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          className="mx-4"
          href={links.deploy}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdWebAsset className="w-8 h-8" />
        </a>
        <a
          className="mx-4"
          href={links.blogPost}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWordpress className="w-8 h-8" />
        </a>
      </div>
      {/* open button */}
      {deviceType() !== "desktop" && (
        <AiOutlineMenu
          onClick={() => setShowLinks((prev) => !prev)}
          className="w-10 h-10 bg-bg p-2 rounded-sm absolute right-4 bottom-4 z-10 cursor-pointer"
        />
      )}
    </div>
  );
}

function Card({ image, links, title, description }) {
  return (
    <article className="w-80 mb-8 lg:w-[28rem] xl:w-[32rem]">
      <CardImage {...{ image, links }} />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="font-light text-[0.85rem] text-zinc-400">{description}</p>
      </div>
    </article>
  );
}

function Projects() {
  const cards = projectsArticles.map((art) => {
    return (
      <Card
        key={art.title}
        image={art.image}
        title={art.title}
        description={art.description}
        links={art.links}
      />
    );
  });

  return (
    <section id="projects" className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-[76rem]">
        <div className="w-full text-center mb-12 sm:flex sm:justify-between sm:px-8">
          <h2 className="text-3xl font-semibold tracking-wide">
            Featured Projects
          </h2>
          <a
            href={GITHUB_PROFILE}
            className="hidden sm:flex items-center text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-6 h-6 mr-2 cursor-pointer" />
            GitHub
          </a>
        </div>
        <div className="max-w-[66rem] md:flex md:flex-wrap md:justify-between">
          {cards}
        </div>
      </div>
    </section>
  );
}

export default Projects;
