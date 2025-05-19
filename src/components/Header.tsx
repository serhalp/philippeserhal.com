import BlueskyIcon from "./icons/BlueskyIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import SubstackIcon from "./icons/SubstackIcon";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <a href="/" className="font-mono text-lg font-bold">
            <span className="text-primary">~</span>/serhalp
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/serhalp"
            className="social-icon"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/philippe-serhal"
            className="social-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="https://bsky.app/profile/philippeserhal.com"
            className="social-icon"
            aria-label="Bluesky Profile"
            title="Bluesky Profile"
          >
            <BlueskyIcon size={20} />
          </a>
          <a
            href="https://serhalp.substack.com"
            className="social-icon"
            aria-label="Substack Blog"
            title="Substack Blog"
          >
            <SubstackIcon size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
