import { useState, useEffect, useRef } from "react";
// Modals
import ModalContainer from "modals/ModalContainer";
// Icons
import { GoSettings } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { BiLike, BiDislike, BiReply, BiArrowFromBottom } from "react-icons/bi";

function Subcomment() {
  return (
    <div className="flex my-8 text-sm last:m-0 last:mt-8">
      <div className="w-16">
        <FaUserCircle className="block w-12 h-12" />
      </div>
      <div className="w-[calc(100%-4rem)]">
        <div className="w-full flex items-center">
          <span className="mr-2">Edgar Salazar</span>
          <span className="text-sm text-text/60">6 hours ago</span>
        </div>
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center">
          <span className="flex mr-4">
            <BiLike className="w-5 text-green-600 h-5 mr-2 cursor-pointer" /> 20
          </span>
          <span className="flex mr-4">
            <BiDislike className="w-5 h-5 mr-2 cursor-pointer" /> 2
          </span>
          <span className="flex cursor-pointer">
            <BiReply className="w-5 h-5 mr-1" /> Reply
          </span>
        </div>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="flex flex-wrap mb-24 last:m-0 last:mt-8">
      <div className="w-20">
        <FaUserCircle className="block w-14 h-14" />
      </div>
      <div className="w-[calc(100%-5rem)]">
        <div className="w-full flex items-center">
          <span className="mr-2">Edgar Salazar</span>
          <span className="text-sm text-text/60">6 hours ago</span>
        </div>
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-wrap items-center">
          <span className="flex mr-4">
            <BiLike className="w-6 text-green-600 h-6 mr-2 cursor-pointer" /> 20
          </span>
          <span className="flex mr-4">
            <BiDislike className="w-6 h-6 mr-2 cursor-pointer" /> 2
          </span>
          <span className="flex cursor-pointer">
            <BiReply className="w-6 h-6 mr-1" /> Reply
          </span>
          <div className="w-full">
            <span className="flex items-center w-fit mt-4 text-bg font-semibold cursor-pointer primary">
              <BiArrowFromBottom className="w-8 h-8 mr-2" /> 12 replies
            </span>
          </div>
        </div>
      </div>
      {/* Subcomments */}
      <div className="w-full pl-8">
        <Subcomment />
        <Subcomment />
      </div>
    </div>
  );
}

function InputComment({ value, onChange }) {
  const inputRef = useRef();

  useEffect(() => {
    const input = inputRef.current;
    const handleInput = () => {
      const scrollHeight = input.scrollHeight;
      input.style.height = `${scrollHeight}px`;
    };
    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, [value]);

  return (
    <textarea
      value={value}
      onChange={onChange}
      ref={inputRef}
      rows="1"
      placeholder="Add a comment"
      className="overflow-hidden bg-transparent w-full min-h-[100p] border-b border-border p-1 focus:outline focus:outline-1 focus:outline-border focus:border-transparent"
    />
  );
}

function Comments() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full mt-12">
      <div className="flex justify-between mb-4">
        <span className="text-xl">76 Comments</span>
        <GoSettings
          onClick={() => setShow(true)}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
      <InputComment />
      <div className="mt-12">
        <Comment />
        <Comment />
      </div>
      <ModalContainer show={show} onShow={setShow} />
    </div>
  );
}

export default Comments;
