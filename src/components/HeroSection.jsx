import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-primary">Sahal{" "}</span>
            <span className="text-gradient ml-2">Imran{" "}</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-primary">
            DevOps Engineer · Cloud &amp; FinOps
          </p>

          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            I build and automate cloud infrastructure with a focus on FinOps —
            designing platforms that measurably cut cloud spend, including a
            verified 12% reduction for an enterprise client. Comfortable across
            Azure, AWS, Kubernetes, Docker, and CI/CD, with full-stack roots.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#experience" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 text-primary opacity-0 animate-fade-in-delay-1">
        <div className=" transform  -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
