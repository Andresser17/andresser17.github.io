import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Sections
import Comments from "./Comments";
// Icons
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import {
  IoIosArrowForward as ArrowRight,
  IoIosArrowBack as ArrowLeft,
} from "react-icons/io";
// Services
import postService from "services/post.service";
import userService from "services/user.service";

function Contents() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 w-full h-full p-8 bg-bg transition-all duration-500 md:sticky md:top-24 md:left-auto md:right-0 md:w-96 md:h-fit ${
        show ? "left-0" : "-left-full"
      }`}
    >
      <span className="block text-2xl font-bold mb-8">Table of Contents</span>
      <ul className="border-l-2 border-border px-4 py-1 ml-2 text-lg">
        <li className="my-4 cursor-pointer">Installation</li>
        <li className="my-4 cursor-pointer">Basic component setup</li>
        <li className="my-4 cursor-pointer">Getting the users contact</li>
      </ul>
      {show ? (
        <ArrowLeft
          onClick={handleShow}
          className="absolute w-8 h-8 cursor-pointer bg-black/30 p-1 rounded-[50%] top-5 right-3 md:hidden"
        />
      ) : (
        <ArrowRight
          onClick={handleShow}
          className="absolute w-8 h-8 cursor-pointer bg-black/30 p-1 rounded-[50%] top-5 -right-10 md:hidden"
        />
      )}
    </div>
  );
}

function Author({ data }) {
  return (
    <div className="flex items-center">
      {/* <FaUserCircle className="w-20 h-20" /> */}
      <img src={data.avatar_urls ? data.avatar_urls["96"] : ""} alt="Author" />
      <div className="ml-4">
        <span className="block font-bold mb-2">{data.name}</span>
        <p className="text-sm">{data.description}</p>
      </div>
    </div>
  );
}

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const date = new Date(post.date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await postService.getPostById(id);
      setPost(response);
    };
    if (post !== null && Object.keys(post).length === 0) fetchData();
  }, [post, id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await userService.getUserById(1);
      setUser(response);
    };
    if (user !== null && Object.keys(user).length === 0) fetchData();
  }, [user]);

  return (
    <div className="w-full min-h-screen p-6 mt-16 flex justify-between flex-wrap lg:max-w-[72rem]">
      <div className="max-w-[48rem]">
        <div className="max-w-[32rem]">
          <h1 className="text-3xl font-bold">{post.title?.rendered}</h1>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-text/70 max-w-[10rem]">
              {user.name}
            </span>
            <span className="text-sm text-text/70 max-w-[10rem] sm:max-w-full">
              {date}
            </span>
          </div>
          <div className="flex flex-wrap my-8">
            <span className="block w-full">Share on:</span>
            <FaTwitterSquare className="text-4xl mr-2 cursor-pointer" />
            <FaLinkedin className="text-4xl cursor-pointer" />
          </div>
        </div>
        {/* Content */}
        <div
          className="my-8 [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
        ></div>
        <Author data={user} />
      </div>
      {/* <Contents /> */}
      {/* <Comments /> */}
    </div>
  );
}

export default Post;
