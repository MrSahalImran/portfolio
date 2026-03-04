import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const workExperience = [
  {
    id: 1,
    company: "CloudKeeper",
    position: "DevOps Trainee",
    duration: "Jan 2026 - Present",
    location: "Noida (On Premise)",
    description:
      "Engaged in cloud-native development focusing on scalability ands secure deployment.",
    achievements: ["ongoing"],
    isRecent: true,
  },

  {
    id: 2,
    company: "InstaDigii.com",
    position: "React Native Developer",
    duration: "Sep 2025 – Jan 2026",
    location: "Remote (Norway based company)",
    description:
      "Worked as a developer building cross-platform mobile applications and backend integrations for client projects.",
    achievements: [
      "Developed cross-platform mobile applications using React Native with responsive UI and optimized performance",
      "Designed and implemented complete UI/UX independently for client applications",
      "Built and integrated backend APIs to support application functionality",
      "Implemented state management and efficient data synchronization between mobile apps and backend services",
    ],
    isRecent: true,
  },
  {
    id: 3,
    company: "Naman Digital Pvt. Ltd.",
    position: "Cloud & DevOps Intern",
    duration: "Sep 2025 – Oct 2025",
    location: "Remote",
    description:
      "Worked on cloud-native projects focusing on scalability, containerization, and secure deployments.",
    achievements: [
      "Engineered a distributed personal cloud storage system using modern cloud architecture",
      "Deployed Docker containerized applications on AWS EC2 with automated CI/CD pipelines",
      "Built a cloud-based file conversion service and implemented multi-region deployment with load balancing",
    ],
    isRecent: false,
  },
  {
    id: 4,
    company: "SaiKet Systems",
    position: "Web Development Intern",
    duration: "Aug 2025 – Sep 2025",
    location: "Remote",
    description:
      "Delivered client-focused projects during a one-month contract internship.",
    achievements: [
      "Designed and developed responsive, user-friendly web interfaces",
      "Contributed to full-stack feature implementation, ensuring scalability and performance",
      "Delivered production-ready solutions within strict timelines, collaborated effectively with team members",
    ],
    isRecent: false,
  },
  {
    id: 5,
    company: "Naman Digital Pvt. Ltd.",
    position: "Web Development Intern",
    duration: "Jul 2025 – Sep 2025",
    location: "Remote",
    description:
      "Completed a 2-month virtual internship with emphasis on modern full-stack development.",
    achievements: [
      "Built and deployed a scalable blog platform using Hono + Cloudflare Workers",
      "Developed a full-stack e-commerce application in Node.js with payment integration and admin panel",
      "Applied clean architecture principles and collaborated to deliver production-grade features",
    ],
    isRecent: false,
  },
  {
    id: 6,
    company: "FIL Industries Pvt. Ltd.",
    position: "Business Analytics Intern",
    duration: "May 2023 – Jul 2023",
    location: "On-Premise",
    description: "Focused on IT data management and process improvement.",
    achievements: [
      "Migrated enterprise records from hardcopy to structured digital formats",
      "Conducted data cleaning, organization, and validation for improved accuracy",
      "Established streamlined workflows that enhanced data accessibility and team efficiency",
    ],
    isRecent: false,
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          A journey through my professional experiences, internships, and
          contributions to various organizations.
        </p>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-card p-6 md:p-8 rounded-lg shadow-xs card-hover gradient-border"
            >
              {/* Timeline line for visual connection */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-4 md:left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Recent badge */}
              {job.isRecent && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    Recent
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Company icon */}
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10 w-fit">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {job.position}
                    </h3>
                    <h4 className="text-lg text-primary font-medium">
                      {job.company}
                    </h4>

                    {/* Duration and location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements or Current Responsibilities */}
                  <div className="space-y-2">
                    {job.achievements.includes("ongoing") ? (
                      <>
                        <h5 className="font-medium text-sm uppercase tracking-wide text-primary">
                          Current Responsibilities
                        </h5>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="font-medium text-green-600">
                            Currently working on exciting projects...
                          </span>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mt-3">
                          <p className="text-sm text-muted-foreground italic">
                            Actively contributing to cloud infrastructure and
                            DevOps initiatives.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <h5 className="font-medium text-sm uppercase tracking-wide text-primary">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {job.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="/Sahal_imran_resume.pdf"
              download="Sahal_Imran_resume.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
