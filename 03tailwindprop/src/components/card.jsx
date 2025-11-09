import React from "react";

function card(props) {
  return (
    <div className=" bg-gray-700 flex flex-col items-center gap-4 p-4 md:flex-row md:gap-8 rounded-md">
      <div>
        <img
          className="size-48  rounded-md"
          alt=""
          src="https://avatars.githubusercontent.com/u/95353094?v=4"
        />
      </div>
      <div className=" items-center md:items-start">
        <blockquote>
          <p className="text-xl  text-amber-300">
            Turning ideas into interactive web apps using React, Node.js,
            Express, and MongoDB.
          </p>
        </blockquote>
        <h2 className="text-2xl font-medium p-4 px-10">{props.username}</h2>

        <h2>📍 MERN Stack Learner & Full stack Developer</h2>
      </div>
    </div>
  );
}

export default card;
