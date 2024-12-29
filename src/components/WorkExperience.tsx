import React from "react";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      company: "Evenesis",
      role: "Software Engineer Intern",
      duration: "Aug 2024 - Present",
      description:
        "Maintained and supported the company's main product (event management system) using the Angular framework for the front end and .NET API for the back end. Addressed bugs, implemented feature updates, and ensured the system remained operational and efficient.",
    },
    {
      company: "Rextsoft Inc",
      role: "Freelance Software Dev",
      duration: "Jan 2023 - Dec 2023",
      description:
        "Developed both the front end using React.js and backend using Node.js, with PostgreSQL as the database, based on app specification requirements.",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20 scroll-mt-16"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        Work Experience
      </h2>
      <p className="text-center text-gray-500 mt-2">
        A timeline of my professional journey and contributions.
      </p>

      <div className="relative mt-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 sm:top-6 top-0 bottom-0 w-1 bg-blue-500 hidden sm:block"></div>

        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center sm:${
              index % 2 === 0 ? "text-right" : "text-left"
            } text-center mb-10`}
          >
            <div className="w-6 h-6 bg-blue-500 rounded-full z-10 relative"></div>
            <div
              className={`mt-6 p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2 ${
                index % 2 === 0 ? "sm:self-end" : "sm:self-start"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {experience.role}
              </h3>
              <p className="text-gray-500">{experience.company}</p>
              <p className="text-sm text-gray-400">{experience.duration}</p>
              <p className="mt-2 text-gray-600">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
