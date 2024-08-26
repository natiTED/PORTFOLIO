import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://drive.google.com/file/d/172d440-EwN1ay0oFUIs5jsfsc_9B9pPL/view?usp=sharing"
          target="_blank"
        >
          <MagicButton
            title="want to know more about me?"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Natnael Tewodros
        </p>

        {/* trying to make link work? */}

        <div className="flex flex-row items-center md:gap-3 gap-6">
          <a href="https://github.com/natiTED" target="_blank">
            <img
              src="/git.svg"
              alt="git"
              className="w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            />
          </a>
          <a href="https://x.com/NaatyTed81560" target="_blank">
            <img
              src="/twit.svg"
              alt="x"
              className="w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-tewodros-50030826b/"
            target="_blank"
          >
            <img
              src="/link.svg"
              alt="linkedin"
              className="w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
