import { FaAws, FaNodeJs } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import {
  // Frameworks/Libraries
  SiAnaconda, SiExpress, SiNextdotjs,
  SiReact, SiTailwindcss, SiThreedotjs, SiUnity, SiUnrealengine,
  // Languages
  SiC, SiCplusplus, SiCss3, SiHtml5, SiJavascript, SiPython,
} from "react-icons/si";

// Correct groups
const FRAMEWORKS = [
  { name: "Express", Icon: SiExpress },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
];

const LIBRARIES = [
  { name: "React", Icon: SiReact },
  { name: "ThreeJS", Icon: SiThreedotjs },
];

const RUNTIMES_ENGINES = [
  { name: "NodeJS", Icon: FaNodeJs }, 
  { name: "Unity",  Icon: SiUnity },  
  { name: "Unreal",  Icon: SiUnrealengine },
];

const CLOUD_TOOLING = [
  { name: "AWS",      Icon: FaAws },      
  { name: "Anaconda", Icon: SiAnaconda }, 
];

const LANGUAGES = [
  { name: "C",          Icon: SiC },
  { name: "C#",         Icon: TbBrandCSharp },
  { name: "C++",        Icon: SiCplusplus },
  { name: "CSS",        Icon: SiCss3 },
  { name: "HTML",       Icon: SiHtml5 },
  { name: "Java",       Icon: FaJava },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Python",     Icon: SiPython },
];

function SkillPill({ name, Icon }) {
  return (
    <div className="flex flex-col items-center hover:scale-110 transition-transform">
      <div className="w-12 h-12 rounded-full grid place-items-center
                      bg-primary/10 ring-1 ring-primary/20 text-primary">
        <Icon className="w-6 h-6" aria-label={name} />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{name}</span>
    </div>
  );
}

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>

        {/* Frameworks */}
        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md mb-8 bg-[hsl(var(--card))]/80">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {FRAMEWORKS.map((x) => <SkillPill key={x.name} {...x} />)}
          </div>
        </div>

        {/* Libraries */}
        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md mb-8 bg-[hsl(var(--card))]/80">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Libraries</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {LIBRARIES.map((x) => <SkillPill key={x.name} {...x} />)}
          </div>
        </div>

        {/* Runtimes & Engines */}
        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md mb-8 bg-[hsl(var(--card))]/80">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Runtimes & Engines</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {RUNTIMES_ENGINES.map((x) => <SkillPill key={x.name} {...x} />)}
          </div>
        </div>

        {/* Cloud & Tooling */}
        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md mb-8 bg-[hsl(var(--card))]/80">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Cloud & Tooling</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {CLOUD_TOOLING.map((x) => <SkillPill key={x.name} {...x} />)}
          </div>
        </div>

        {/* Languages */}
        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md mb-8 bg-[hsl(var(--card))]/80">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {LANGUAGES.map((x) => <SkillPill key={x.name} {...x} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
