// Components
import Pagination from "components/Pagination";
// Images
import featuredImage from "images/aleron-ui.png";

function Featured() {
  return (
    <div className="w-52 mr-4 flex-none cursor-pointer lg:w-64 lg:m-0 lg:mb-8">
      <img
        src={featuredImage}
        className="w-full h-36 cover lg:h-48"
        alt="featured project"
      />
      <p>How to create a super awesome project</p>
    </div>
  );
}

function Post() {
  return (
    <div className="w-full max-w-[28rem] mb-12">
      <h3 className="font-bold text-2xl cursor-pointer">
        How to create a list of users in React
      </h3>
      <span className="block text-sm mb-6 mt-2">This is my subtitle</span>
      <p>
        This is my one hundred percent original descriptions, here I will make a
        little resume about how to program a simple list of users in React.
      </p>

      <div className="mt-4">
        <span className="font-bold mt-4 cursor-pointer">Read more</span>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="min-h-screen mt-12 px-6 lg:mt-24 lg:flex lg:flex-wrap lg:justify-between lg:px-16">
      <div>
        <h2 className="font-bold mb-16 text-2xl">Blog Posts</h2>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="mb-12 lg:m-0 lg:mt-24">
        <h3 className="font-bold mb-12 text-xl lg:text-2xl">
          Featured Projects
        </h3>
        <div className="flex overflow-auto lg:flex-col">
          <Featured />
          <Featured />
          <Featured />
        </div>
      </div>
      <div className="w-full mb-12">
        <Pagination />
      </div>
    </div>
  );
}

export default Blog;
