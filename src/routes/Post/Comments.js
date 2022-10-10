import { useState, useEffect, useRef } from "react";
import { GoSettings } from "react-icons/go";

function Comment() {
  return <div></div>;
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
  return (
    <div className="w-full mt-12">
      <div className="flex justify-between mb-4">
        <span className="text-xl">76 Comments</span>
        <GoSettings className="w-8 h-8" />
      </div>
      <InputComment />
    </div>
  );
}

export default Comments;
