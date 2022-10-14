import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Components
import Pagination from "components/Pagination";
// Services
import postService from "services/post.service";
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

function Post({ data = {} }) {
  const link = `/post/${data.slug}`;

  return (
    <div className="w-full max-w-[28rem] mb-12">
      <h3 className="font-bold text-2xl mb-4 cursor-pointer">
        <Link to={link} className="font-bold mt-4 cursor-pointer">
          {data.title}
        </Link>
      </h3>
      <p>{data.summary}</p>
      <div className="mt-4">
        <Link to={link} className="font-bold mt-4 cursor-pointer">
          Read more
        </Link>
      </div>
    </div>
  );
}

function Blog() {
  const [posts, setPosts] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await postService.getPosts({ page, limit });
      if (response.status === 200) {
        setPosts(response.data.data);
        setPageCount(response.data.meta.count);
      }
      setRefresh(false);
    };
    if (refresh) {
      fetchData();
      return;
    }
    if (posts !== null && Object.keys(posts).length === 0) fetchData();
  }, [posts, page, refresh]);

  // manage pagination buttons
  const handlePage = (selected) => {
    setPage(selected);
    setRefresh(true);
  };

  if (Object.keys(posts).length === 0)
    return <div className="absolute top-0 left-0 w-full h-full bg-bg"></div>;

  return (
    <div className="min-h-screen mt-12 px-6 lg:mt-24 lg:flex lg:flex-wrap lg:justify-between lg:px-16">
      <div className="mb-12 min-h-[48rem] lg:m-0">
        <h2 className="font-bold mb-16 text-2xl">Blog Posts</h2>
        {Object.keys(posts).length > 0 ? (
          posts.map((post) => <Post data={post} key={post.slug} />)
        ) : (
          <span className="text-xl">No post available</span>
        )}
      </div>
      {/* <div className="mb-12 lg:m-0 lg:mt-24"> */}
      {/*   <h3 className="font-bold mb-12 text-xl lg:text-2xl"> */}
      {/*     Featured Projects */}
      {/*   </h3> */}
      {/*   <div className="flex overflow-auto lg:flex-col"> */}
      {/*     <Featured /> */}
      {/*     <Featured /> */}
      {/*     <Featured /> */}
      {/*   </div> */}
      {/* </div> */}
      <div className="w-full mb-12">
        <Pagination
          selected={page}
          setSelected={handlePage}
          pageCount={pageCount}
          limit={limit}
        />
      </div>
    </div>
  );
}

export default Blog;
