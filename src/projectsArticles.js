// Personal Site imports
import personalPageImage from "./images/personal-page.png";

const personalPage = {
  image: { url: personalPageImage, alt: "personal project" },
  title: "Portfolio",
  description: "Get high-quality and customizable Gatsby themes",
  links: {
    github: "https://github.com/Andresser17/react-portfolio",
    deploy: "",
    blogPost: "",
  },
};

const articles = [1, 2, 3, 4, 5, 6, 7].map((_, i) => ({
  ...personalPage,
  title: personalPage.title + i,
}));

export default articles;
