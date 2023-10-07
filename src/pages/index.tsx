import * as React from "react";
import { FaLinkedin, FaGithub, FaComment, FaEnvelope } from "react-icons/fa6";
import type { HeadFC, PageProps } from "gatsby";

const links = [
  {
    text: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/philippe-serhal",
  },
  {
    text: "GitHub",
    icon: FaGithub,
    url: "https://www.github.com/serhalp",
  },
  {
    text: "Substack",
    icon: FaComment,
    url: "https://serhalp.substack.com",
  },
  {
    text: "Email",
    icon: FaEnvelope,
    url: "mailto:philippe.serhal+website@gmail.com",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full py-6 px-4 sm:p-6 md:py-10 md:px-8 font-sans">
      <h1 className="basis-20 text-3xl sm:text-6xl text-center">
        Philippe Serhal
      </h1>
      <h2 className="basis-20 py-6 text-xl sm:text-3xl text-gray-500 text-center">
        Experienced, product-minded full-stack dev shipping high-quality
        software daily.
      </h2>
      <ul className="basis-auto w-6/12 py-6 flex flex-row justify-evenly text-md sm:text-2xl text-blue-500 text-center">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>
              <link.icon className="inline-block align-middle" />
              &nbsp;
              <span className="align-middle">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
