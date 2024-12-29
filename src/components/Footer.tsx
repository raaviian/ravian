import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white">
      <div>
        <p className="font-bold text-lg">Raviansyah Noorman</p>
        <p>Fullstack Software Developer</p>
        <p className="mt-2">© 2024 All rights reserved</p>
      </div>
      <div className="grid grid-flow-col gap-4 mt-4">
        <a
          href="https://github.com/raaviian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.301 3.438 9.8 8.207 11.385.599.113.82-.26.82-.578v-2.173c-3.338.727-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.666-.303-5.466-1.333-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23.958-.266 1.987-.398 3.006-.404 1.019.006 2.048.138 3.006.404 2.291-1.553 3.3-1.23 3.3-1.23.653 1.653.242 2.874.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.8 5.624-5.47 5.921.43.372.815 1.104.815 2.225v3.293c0 .32.22.694.824.576C20.565 22.092 24 17.595 24 12.297 24 5.67 18.627.297 12 .297z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/raaviian/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.045-1.855-3.045-1.855 0-2.141 1.448-2.141 2.946v5.668H9.343V9h3.413v1.561h.048c.475-.9 1.635-1.849 3.366-1.849 3.599 0 4.266 2.37 4.266 5.452v6.288zM5.337 7.433c-1.144 0-2.073-.93-2.073-2.073 0-1.144.93-2.073 2.073-2.073 1.144 0 2.073.93 2.073 2.073 0 1.144-.93 2.073-2.073 2.073zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.549C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.726V1.726C24 .774 23.204 0 22.225 0z" />
          </svg>
        </a>
        <a
          href="mailto:raviontv@gmail.com"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4.527 5.61L2 7.924V18h20V7.924l-2.527 1.685L12 13.727l-7.473-4.118zM2 6.236l9.682 5.33c.308.17.674.17.982 0L22 6.236V4H2v2.236z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
