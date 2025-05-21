import { useState } from "react";

const experienceData = [
  {
    company: "Netlify",
    title: "Staff Software Engineer",
    period: "2024 –",
    responsibilities: [
      "On the team responsible for front-end frameworks and the entire build & deploy system",
      "Collaborate with framework maintainers & OSS community to deliver world-class DX on Netlify's CDN & serverless infra for 6M+ users",
      "Maintain a build & deploy system processing hundreds of thousands of builds per day (Go, k8s)",
      "Maintain bleeding-edge expertise in React, Next.js, Remix, Astro, Vue, Nuxt, Svelte, SvelteKit, Angular, and more",
      "Core maintainer of Gatsby.js front-end framework, used by hundreds of thousands of sites",
    ],
  },
  {
    company: "Good Eggs",
    title: "Staff Software Engineer, Developer Experience",
    period: "2021 – 2022",
    responsibilities: [
      "Reported to Dir. of Eng., with a broad mandate to proactively identify \
      problem areas across the org (5+ teams, 50+ headcount) and drive to solutions with teams",
      "Proposed, founded & led a new DX team with 4 engineers, with a mission to reduce cognitive load for product eng \
      teams (freeing up focus on their problem domains), via libs, services, docs, training, research, prototyping — whatever is needed",
      "Planned, authored, disseminated & got buy-in across the org on a long-term vision for system architecture, \
      a roadmap for cross-team tech debt, and quarterly technical OKRs",
      "Member of eng. leadership group accountable for org structure, resourcing, and planning",
      "Consulted on dozens of projects across the org, providing SME feedback, architectural guidance \
      & alternative solutions, identifying risks, roadblocks & potential cross-team conflicts & opportunities",
      "→ e.g. Consulted on expansion to new markets, replacement of in-house transportation management system \
      (TMS) with an off-the-shelf solution, design & implementation of a membership program, etc.",
    ],
  },
  {
    company: "Good Eggs",
    title: "Senior Software Engineer",
    period: "2014 – 2021",
    responsibilities: [
      "Good Eggs delivers same-day groceries. The entire supply chain is run in house. \
      I developed software that scaled it from $15M revenue to $150M, from negative margin \
      to the best unit economics in the industry.",
      "As Tech Lead, led technical planning of several major projects: gathered requirements, \
      coordinated with cross-functional stakeholders, wrote tech specs, wrote user stories, \
      guided implementation, ran agile ceremonies, and contributed to code review & implementation",
      "Designed & developed a suite of guided warehouse management & order fulfillment apps \
      (to pick, consolidate, sort & ship barcoded orders; to receive, putaway, value-add & cycle \
      count barcoded inventory). The system was used to fulfill 30M+ cumulative order items.",
      "Contributed to 20+ services, with an event-driven architecture (RabbitMQ), MongoDB, NodeJS, \
      Express, TypeScript, GraphQL, Redis, Docker, AWS, and ECS",
      "Contributed to 10+ front-end apps, with TypeScript, React, Redux, and GraphQL—and a legacy stack \
      of CoffeeScript, AngularJS, Backbone, and Heroku",
    ],
  },
  {
    company: "IRIC",
    title: "Graduate Research Assistant",
    period: "2010 – 2013",
    responsibilities: [
      "Functional and Structural Bioinformatics Lab @ Institute for Research in Immunology and Cancer (IRIC), \
      supervised by Dr. Sébastien Lemieux",
      "Developed an algorithm for quantification, visualization, and correction of spatial \
      bias in DNA microarray raw data; published in peer-reviewed journal, presented at multiple \
      conferences, and released as free software (R/C++).",
      "Worked on developing a modern approach to integrative analysis of multiple, dispersed, \
      interrelated, heterogeneous, voluminous biological data sets. Developed proof of concept \
      with distributed Node.js data servers and lightweight Bootstrap + d3.js integrative data \
      visualization front-end, serving live clinical research data to a group of 40 leukemia researchers.",
    ],
  },
  {
    company: "Gov. of Canada",
    title: "Junior Programmer/Analyst",
    period: "2007 – 2008",
    responsibilities: [
      "On team responsible for auditing government websites for accessibility, usability, and interoperability standards",
      "Developed web apps for automated and manual verification and reporting (ColdFusion, Perl, JavaScript)",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="pb-8 bg-secondary/20">
      <div className="container">
        <h2 className="section-title">Where I've Worked</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible">
            {experienceData.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 border-b-2 md:border-l-2 md:border-b-0 border-muted hover:bg-secondary/50 transition-all text-left whitespace-nowrap ${
                  activeTab === index
                    ? "text-primary border-primary bg-secondary/30"
                    : "text-muted-foreground"
                }`}
              >
                {job.company}{" "}
                <span className="float-end text-muted-foreground font-mono text-sm">
                  {job.period}
                </span>
              </button>
            ))}
          </div>

          <div className="md:w-3/4 mr-32">
            {experienceData[activeTab] && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold pb-2">
                  {experienceData[activeTab].title}{" "}
                  <span className="text-primary">
                    @ {experienceData[activeTab].company}
                  </span>
                </h3>

                <ul className="space-y-2">
                  {experienceData[activeTab].responsibilities.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
