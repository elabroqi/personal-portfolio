import { X } from "lucide-react";
import { useState } from "react";

import { TbBrandCSharp, TbBrain, TbBrandThreejs } from "react-icons/tb";
import { SiNumpy } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import {
    SiUnity,
    SiUnrealengine,
    SiPython,
    SiAnaconda,
    SiReact,
    SiGit,
    SiDocker,
} from "react-icons/si";

function TechPill({ name, Icon }) {
    return (
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                        bg-primary/10 ring-1 ring-primary/20 text-primary text-base">

            {Icon ? (
                <Icon className="w-6 h-6" aria-hidden />
            ) : (
                <img
                    src="/images/metil.png"
                    alt="METIL"
                    className="w-6 h-6 object-contain"
                />
            )}

            <span>{name}</span>
        </div>
    );
}

function TextPill({ label }) {
    return (
        <span
            className="px-4 py-2 rounded-full text-sm font-medium
                 bg-primary/10 text-primary
                 ring-1 ring-primary/20
                 hover:bg-primary/20 transition-colors"
        >
            {label}
        </span>
    );
}

const IST_SE_TECH = [
    { name: "Unity", Icon: SiUnity },
    { name: "Unreal", Icon: SiUnrealengine },
    { name: "C#", Icon: TbBrandCSharp },
    { name: "Git", Icon: SiGit },
];

const IST_BACKEND_TECH = [
    { name: "Python", Icon: SiPython },
    { name: "Unity", Icon: SiUnity },
    { name: "Git", Icon: SiGit },
];

export const AboutSection = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Professional <span className="text-primary"> Experience </span>
                </h2>

                <div className="flex flex-col gap-8">

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
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
                                <button
                                    onClick={() => setShowResume(false)}
                                    className="absolute top-3 right-3 text-black text-2xl"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Cards */}
                    <div className="flex flex-col gap-8">

                        {/* AFRL */}
                        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md bg-[hsl(var(--card))]/80">
                            <div className="flex items-start gap-4"><div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                <img
                                    src="/images/afrl.png"
                                    alt="Air Force Research Lab"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                                <div className="text-left max-w-3xl">
                                    <h4 className="font-semibold text-lg">Software Developer Intern</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Air Force Research Laboratory
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Remote
                                    </p>

                                    <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
                                        <li>Developing an AI-assisted Uncorrelated Track Processing (UCTP) benchmarking framework.</li>
                                        <li>Integrating the OpenEvolve evolutionary coding framework to improve Python-based track association algorithms.</li>
                                        <li>Building an evaluation pipeline measuring precision, recall, F1 score, and association accuracy.</li>
                                        <li>Collaborating on the analytics web application homepage using React and Three.js.</li>
                                    </ul>

                                    <p className="mt-4 text-sm font-semibold text-muted-foreground">
                                        August 2025 – Present
                                    </p>

                                    <div className="mt-4 flex items-center gap-2">

                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiPython className="w-4 h-4" />
                                        </span>

                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiReact className="w-4 h-4" />
                                        </span>

                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <TbBrandThreejs className="w-4 h-4" />
                                        </span>

                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <TbBrain className="w-4 h-4" />
                                        </span>

                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <FaGithub className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiDocker className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IST */}
                        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md bg-[hsl(var(--card))]/80">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                    <img
                                        src="/images/ucfBadge.png"
                                        alt="Institute of Simulation & Training"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="text-left max-w-3xl">
                                    <h4 className="font-semibold text-lg">Software Developer Intern</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Institute of Simulation & Training
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        3100 Technology Pkwy, Orlando, FL
                                    </p>
                                    <a
                                        href="https://www.metil.org/quickstart-students"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary underline"
                                    >
                                        METIL Quickstart Students
                                    </a>


                                    <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
                                        <li>Developed and deployed software components supporting simulation based training systems.</li>
                                        <li>Containerized and deployed OpenWebUI using Docker configuring host level networking to enable centralized access.</li>
                                        <li>Implemented C# scripts in Unity to support interactive training simulations and performance driven system behavior.</li>
                                        <li>Analyzed and documented military training elements into quantifiable scenario complexity metrics supporting backend design planning.</li>
                                        <li>Utilized Unreal Engine to enhance immersive features for virtual reality interactions.</li>
                                    </ul>
                                    <p className="mt-4 text-sm font-semibold text-muted-foreground">
                                        May 2025 – Present
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiUnity className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiUnrealengine className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <TbBrandCSharp className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiPython className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <FaGithub className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiAnaconda className="w-4 h-4" />
                                        </span>
                                        <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary">
                                            <SiDocker className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UCF */}
                        <div className="gradient-border rounded-2xl p-8 card-hover backdrop-blur-md bg-[hsl(var(--card))]/80">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-1 ring-primary/20">
                                    <img
                                        src="/images/ucfLogo.png"
                                        alt="University of Central Florida"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="text-left max-w-3xl">
                                    <h4 className="font-semibold text-lg">University of Central Florida</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Bachelor of Science in Computer Science student with coursework in Data Structures, Operating Systems, and Systems Software.
                                    </p>

                                    <p className="mt-4 text-sm font-semibold text-muted-foreground">
                                        August 2022 – Present
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};