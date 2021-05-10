import React from "react";
import image from "../wave.jpg";

export default function Home() {
  return (
    <div className="relative">
      <img
        src={image}
        alt="wave"
        className="absolute object-cover w-full h-full object-cover"
      />
      <div className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"
        >
          Welcome to ad-free browsing
        </h1>
      </div>
    </div>
  );
}
