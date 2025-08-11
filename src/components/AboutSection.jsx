import { X } from "lucide-react";
import { useState } from "react";
import resumePdf from "@/assets/Aurela_Broqi_Resume.pdf";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNodeJs, FaAws, FaJava } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6"; 
import {
  SiUnity,
  SiUnrealengine,
  SiPython,
  SiAnaconda,
  SiReact,
  SiThreedotjs,
  SiGit,
} from "react-icons/si";

function TechPill({ name, Icon }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                    bg-primary/10 ring-1 ring-primary/20 text-primary text-xs">
      <Icon className="w-4 h-4" aria-hidden />
      <span>{name}</span>
    </div>
  );
}

const IST_SE_TECH = [
  { name: "Unity",  Icon: SiUnity },
  { name: "Unreal", Icon: SiUnrealengine },
  { name: "C#",     Icon: TbBrandCSharp },
  { name: "Git",    Icon: SiGit },
];

const IST_BACKEND_TECH = [
  { name: "Python", Icon: SiPython },
  { name: "Unity",  Icon: SiUnity },   // if applicable
  { name: "Git",    Icon: SiGit },
];

export const AboutSection = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Professional <span className="text-primary"> Experience </span>
                </h2>

                  {/* stack everything vertically */}
                    <div className="flex flex-col gap-8">

                        {/**Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-0 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                {" "} 
                                Get In Touch </a>
                            <a
                                onClick={() => setShowResume(true)}
                                className="cursor-pointer px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View Resume
                            </a>
                        </div>
                    
                        {/* Modal */}
                        {showResume && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[90vh] relative">
                            {/* Close button */}
                            <button
                                onClick={() => setShowResume(false)}
                                className="absolute top-3 right-3 text-black text-2xl"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* PDF viewer */}
                            <iframe
                                src={resumePdf}
                                className="w-full h-full rounded-lg"
                                title="Resume"
                            />
                            </div>
                        </div>
                        )}

                    {/**Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                    <img
                                        src="/images/ucfBadge.png"   // put files in /public/images/companies
                                        alt="Acme logo"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Engineer Intern</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Institute of Simulation & Training
                                    </p>

                                    {/* bullets */}
                                    <ul className="list-disc list-inside text-md mt-1">
                                        Built a Google Earth-based speech-to-text application in a team of two using C# and Python, enabling dynamic scene  rendering in Unity based on user voice commands.  Upgraded an existing HaptX project from Unreal Engine 4.27 to 5.4 and integrated SenseGlove 2.5, enhancing system responsiveness and realism for the ORTECC emergency training simulations used by interns for continued  development. 
                                    </ul>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span  title="Unity" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiUnity className="w-4 h-4" aria-label="Unity" />
                                        </span>
                                        <span title="Unreal Engine" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiUnrealengine className="w-4 h-4" aria-label="Unreal Engine" />
                                        </span>
                                        <span title="C#" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <TbBrandCSharp className="w-4 h-4" aria-label="C#" />
                                        </span>
                                        <span title="Python" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiPython className="w-4 h-4" aria-label="Python" />
                                        </span>
                                        <span title="github" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <FaGithub className="w-4 h-4" aria-label="github" />
                                        </span>
                                        <span title="Anaconda" className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiAnaconda className="w-4 h-4" aria-label="Anaconda" />
                                        </span>
                                        </div>
                                    <p className="mt-2 font-semibold text-sm text-muted-foreground">May 2025 – Present</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                    <img
                                        src="/images/ucfBadge.png"   // put files in /public/images/companies
                                        alt="Acme logo"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Research Intern</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Institute of Simulation & Training
                                    </p>

                                    {/* bullets */}
                                    <ul className="list-disc list-inside text-md mt-1">
                                        Analyzed and documented military training elements into quantifiable scenario complexity metrics, supporting backend design planning for a shooting range simulation. Wrote technical documentation linking task outcomes to scenario complexity factors, enabling adaptive difficulty scaling and improving training alignment with skill level.
                                    </ul>
                                    <p className="mt-2 font-semibold text-sm text-muted-foreground">December 2024 – January 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                    <img
                                        src="/images/ucfLogo.jpg"   // put files in /public/images/companies
                                        alt="Acme logo"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">University of Central Florida</h4>
                                    <p className="text-md text-muted-foreground">
                                        Bachelor of Science in Computer Science student with coursework in Data Structures, Operating Systems, and Systems Software.
                                    </p>
                                    <p className="mt-2 font-semibold text-sm text-muted-foreground">August 2022 – Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};