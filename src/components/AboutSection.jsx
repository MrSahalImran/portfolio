import { Cloud, TrendingDown, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              DevOps &amp; Cloud Engineer
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              I design and automate cloud infrastructure, with a specialty in
              FinOps — building systems that measurably reduce cloud spend. At
              CloudKeeper I architected a multi-service Azure cost-optimization
              platform and a change-detection engine that confirmed a 12% cut in
              a client's monthly cloud bill. The platform flags idle and
              oversized resources across compute, storage, networking, and
              databases, and the detection engine verifies which fixes clients
              actually shipped.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              I work across Azure and AWS with Kubernetes, Docker, and CI/CD,
              and I keep hands-on full-stack skills (React, React Native,
              Node.js, Go, Python) that let me build the very tools I deploy and
              operate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Sahal_imran_resume.pdf"
                download="Sahal_Imran_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud &amp; DevOps</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Automating cloud infrastructure and CI/CD across Azure and
                    AWS, with Docker and Kubernetes (AKS).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    FinOps &amp; Cost Optimization
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building platforms that analyze and cut cloud spend — a
                    verified 12% reduction for an enterprise client.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building web and mobile apps end to end with React, React
                    Native, Node.js, Go, and Python.
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

export default AboutSection;
