import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <Terminal
            command="whois serhalp"
            output={
              <>
                <p>
                  Full name: <span className="font-bold">Philippe Serhal</span>
                </p>
                <p>
                  Location:{" "}
                  <span className="font-bold">Montréal, QC, Canada</span>
                </p>
                <p>
                  Role:{" "}
                  <span className="font-bold">Staff Software Engineer</span>
                </p>
                <p>
                  Company: <span className="font-bold">Netlify</span>
                </p>
                <p>
                  Team:{" "}
                  <span className="font-bold">
                    Front-end Frameworks & Build System
                  </span>
                </p>
              </>
            }
            showCursor={false}
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mt-3 mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          Philippe Serhal
        </h1>

        <h2
          className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          I make computers solve problems.
        </h2>

        <div
          className="max-w-5xl animate-fade-in opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-lg text-foreground mb-4">
            I like to <strong>build</strong> things. I like to{" "}
            <strong>fix</strong> things. I <strong>really</strong> like to solve
            problems.
          </p>
          <p className="text-lg text-foreground mb-4">
            I <strong>love to deeply, truly understand</strong> things.
          </p>
          <p className="text-lg text-foreground mb-4">
            I currently work as a Staff Engineer on the team responsible for the
            build & deploy system at{" "}
            <a href="https://netlify.com" className="link-highlight">
              Netlify
            </a>
            , where millions of sites are developed, built, and deployed—with
            dozens of different tech stacks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
