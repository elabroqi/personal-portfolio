import { ArrowDown } from "lucide-react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FibonacciCanvas from "./canvas/FibonacciCanvas";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";



export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="absolute inset-0 w-full h-full z-0">
                <FibonacciCanvas />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24
                      bg-gradient-to-b from-transparent to-background/95 z-10" />

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-normal tracking-tight font-sans">

                        <span className="block text-foreground">
                            Hello, I'm
                        </span>

                        <span>
                            Aurela
                            <span className="text-primary"> Broqi</span>
                        </span>

                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Computer Science May 2026
                    </p>

                    <div className="flex justify-center gap-6 mt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="https://github.com/elabroqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition hover:scale-110"
                        >
                            <FaGithub size={28} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition hover:scale-110"
                        >
                            <FaLinkedin size={28} />
                        </a>

                        <a
                            href="https://devpost.com/YOUR-DEVPOST"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition hover:scale-110"
                        >
                            <SiDevpost size={28} />
                        </a>

                        <a
                            href="mailto:your@email.com"
                            className="text-foreground hover:text-primary transition hover:scale-110"
                        >
                            <FaEnvelope size={28} />
                        </a>
                    </div>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="animate-bounce flex flex-col items-center gap-1
                            rounded-lg bg-background/70 backdrop-blur-md
                            px-3 py-2 ring-1 ring-white/10 shadow-lg">
                    <span className="text-xs text-muted-foreground">SCROLL</span>
                    <ArrowDown className="h-4 w-4 text-primary" />
                </div>
            </div>

        </section>
    )
}
