import React from "react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "FloodWise",
      description:
        "An ESP8266-based Flood Alert and Monitoring System with real-time flood detection and monitoring.",
      image: "https://assets.hotfm.audio/2024/09/c8ecc4a0-banjir-kedah-bernama-210924.webp.webp",
    },
    {
      title: "Medical Image Processing Enhancer",
      description: "A Jupyter Notebook project to enhance medical scan images.",
      image: "https://us.medical.canon/resources/img/products/magnetic-resonance/technology/advanced-post-processing/advanced-post-processing-neuro-01.jpg",
    },
    {
      title: "PharmaApp",
      description:
        "An IoT project for pharmacy medicine collection using React and Node.js.",
      image: "https://www.researchgate.net/publication/345347015/figure/fig3/AS:954633933561863@1604613874799/Design-of-the-smart-medicine-dispenser-showing-its-hardware-components-and-connections.png",
    },
  ];

  return (
    <div id="portfolio" className="p-10 bg-gray-50 scroll-mt-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">My Work</h2>
      <p className="text-center text-gray-500 mt-2">
        A showcase of my latest projects demonstrating skills in web development.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="card glass w-96 shadow-xl">
            <figure>
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn more</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
