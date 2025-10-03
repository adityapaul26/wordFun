import React from "react";
import githubIcon from "../assets/github-mark-white.svg";
export const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span class="ml-3 text-2xl text-amber-50">MyWordGuessGame</span>
          </a>
          <p class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            2025 MyWordGuessGame - Aditya
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500" href="https://github.com/adityapaul26"
              target="_blank">
            <img
                src={githubIcon}
                alt="github"
                className="w-8 h-8 hover:text-gray-400"
              />
            </a>
          </span>
              <span className="text-amber-50 pl-4">adityapaul26</span>
        </div>
      </footer>
    </>
  );
};
