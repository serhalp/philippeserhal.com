import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import FolderIcon from "./icons/FolderIcon";
import GitHubIcon from "./icons/GitHubIcon";

const projectsData = [
  {
    title: "Release Train",
    description:
      "The latest and upcoming front-end framework major releases, in the style of a train station split-flap display for some reason.",
    tags: ["Astro", "Svelte"],
    links: {
      github: "https://github.com/serhalp/release-train",
      live: "https://release-train.netlify.app",
    },
  },
  {
    title: "Is this chess?",
    description:
      "Is this chess? You upload an image. Cutting-edge AI tells you if it's chess. That's it.",
    tags: ["Astro", "Solid.js", "OpenAI"],
    links: {
      github: "https://github.com/serhalp/is-this-chess",
      live: "https://is-this-chess.netlify.app",
    },
  },
  {
    title: "Artifice",
    description:
      "Guess the real source prompt for an image created by generative AI. Beware the decoy prompts also created by generative AI from that image.",
    tags: ["SolidStart", "OpenAI", "SolidUI", "TailwindCSS", "Netlify Blobs"],
    links: {
      github: "https://github.com/serhalp/artifice",
      live: "https://artificegame.netlify.app",
    },
  },
  {
    title: "Frameworkers",
    description:
      "Lists the top contributors to a selection of front-end frameworks, extracted from the GitHub API",
    tags: ["Astro", "GitHub API"],
    links: {
      github: "https://github.com/serhalp/frameworkers",
      live: "https://frameworkers.netlify.app",
    },
  },
  {
    title: "Netlify Cache Inspector",
    description:
      "Inspect & compare cache headers for requests to Netlify sites",
    tags: ["Vue", "Nuxt", "Netlify Blobs"],
    links: {
      github: "https://github.com/serhalp/netlify-cache-inspector",
      live: "https://cache-inspector.netlify.app",
    },
  },
  {
    title: "Mouthse",
    description:
      "Half-baked proof of concept for using your mouth (voice) to control your mouse (a cursor)",
    tags: ["React", "Next.js"],
    links: {
      github: "https://github.com/serhalp/mouthse",
      live: "https://mouthse.vercel.app/",
    },
  },
  {
    title: "pyn",
    description:
      "(old!) Spatial bias assessment and correction for oligonucleotide microarrays",
    tags: ["R", "C++", "Bioinformatics"],
    links: {
      github: "https://github.com/serhalp/pyn",
      live: null,
    },
  },
  {
    title: "beerlist.it",
    description:
      "(old!) Fetch the BeerAdvocate ratings for all the beers listed on a webpage",
    tags: ["Python", "Django", "Bioinformatics"],
    links: {
      github: "https://github.com/serhalp/beerlist.it",
      live: null,
    },
  },
  {
    title: "You Coined It!",
    description:
      "(old!) Reddit bot that congratulates people when they coin a new word on the Internet",
    tags: ["CoffeeScript"],
    links: {
      github: "https://github.com/serhalp/you-coined-it",
      live: null,
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary">
                  <FolderIcon size={40} />
                </div>
                <div className="flex gap-4">
                  {
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GitHubIcon size={20} />
                    </a>
                  }
                  {project.links.live != null ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  ) : null}
                </div>
              </div>

              <h4 className="text-lg font-bold mb-3">
                <a href={project.links.live ?? project.links.github}>
                  {project.title}
                </a>
              </h4>
              <p className="text-muted-foreground mb-6">
                <a href={project.links.live ?? project.links.github}>
                  {project.description}
                </a>
              </p>

              <ul className="flex flex-wrap gap-2 text-xs mt-auto">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
