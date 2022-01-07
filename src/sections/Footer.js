import config from "../app.config.js";
// Components
import Icons from "../components/Icons";
// Icons
import { ReactComponent as LinkedinIcon } from "../icons/linkedin-icon-2.svg";
import { ReactComponent as GithubIcon } from "../icons/github-icon-1.svg";

function Footer() {
  return (
    <footer className="bg-first">
      <div className="flex items-center justify-end w-full p-2 bg-black/60">
        <p className="block p-2 mr-6 text-lg">
          <span>&copy;2022</span> Alejandro Serrano
        </p>
        <div className="flex justify-center">
          <Icons href={config.LINKEDIN_URL} dim="w-8 h-8">
            <LinkedinIcon />
          </Icons>
          <Icons href={config.GITHUB_URL} dim="w-8 h-8">
            <GithubIcon />
          </Icons>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
