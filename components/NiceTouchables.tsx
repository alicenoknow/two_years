import Link from "next/link";
import React from "react";

interface NiceLinkProps {
  text: string;
  link: string;
}

interface NiceButtonProps {
  text: string;
  onClick: () => void;
}

export const NiceLink: React.FC<NiceLinkProps> = ({ text, link }) => {
  return (
    <div className="flex items-center justify-center p-4 md:p-24">
      <Link
        href={link}
        className="relative z-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative font-bold px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl md:text-3xl">
          {text}
        </span>
      </Link>
    </div>
  );
};

export const NiceButton: React.FC<NiceButtonProps> = ({ text, onClick }) => {
  return (
    <div className="flex items-center justify-center p-1">
      <button
        onClick={onClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-2.5 md:px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {text}
        </span>
      </button>
    </div>
  );
};
