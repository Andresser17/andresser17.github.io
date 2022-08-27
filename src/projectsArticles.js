import henryDogsImage from "images/henry-dogs.png";
import vlixesImage from "images/vlixes-ecommerce.png";
import aleronLibraryImage from "images/aleron-ui.png";

const henryDogs = {
  image: { url: henryDogsImage, alt: "Henry personal project" },
  title: "Henry Dogs",
  description: "Find your favorites dog breeds",
  links: {
    github: "https://github.com/Andresser17/dogs",
    deploy: "https://andresser17.github.io/dogs/",
    blogPost: "",
  },
};

const vlixes = {
  image: { url: vlixesImage, alt: "Vlixes E-commerce" },
  title: "Vlixes E-commerce",
  description: "Buy sport clothes at the best price on the market",
  links: {
    github: "https://github.com/Andresser17/vlixes",
    deploy: "https://andresser17.github.io/vlixes/",
    blogPost: "",
  },
};

const aleronLibrary = {
  image: { url: aleronLibraryImage, alt: "Personal UI Library" },
  title: "Aleron UI Library",
  description:
    "Customizable React UI Components save time in your development project",
  links: {
    github: "https://github.com/Andresser17/aleron-ui",
    deploy: "https://62ffb5526e73f5739030b5e5-hbokwqhteb.chromatic.com/",
    blogPost: "",
  },
};

const articles = [henryDogs, vlixes, aleronLibrary];

export default articles;
