import {ArrowDown} from "lucide-react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FibonacciCanvas from "./canvas/FibonacciCanvas";



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
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> 
                            Hello,</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                            {" "}
                            Welcome</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                            {" "}
                            </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I develop programs, study data & computer science 
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a herf="#projects" className="cosmic-button">
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
