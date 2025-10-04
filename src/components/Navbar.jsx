import React from "react";
import githubIcon from "../assets/github-mark-white.svg";
export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-20 py-4 text-3xl flex items-center justify-between">
        
        <div className="font-bold">WordFun</div>
        
        <ul className="flex">
          <li>
            <a
              href="https://github.com/adityapaul26/wordle-clone"
              target="_blank"
              className="hover:text-gray-400"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-8 h-8 hover:text-gray-400"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
