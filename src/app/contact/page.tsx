import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

import Development from "@/components/Development";

const LINKS = [{ icon: <AiFillGithub />, url: "https://github.com/jangg0627" }];

export default function ContactPage() {
  return (
    <>
      <Development isPage>
        <h2>Contact Me!</h2>
        <p>jangg0627@naver.com</p>
        <ul>
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{link.icon}</li>
            </a>
          ))}
        </ul>
        <h2>Or Send me an email</h2>
      </Development>
    </>
  );
}
