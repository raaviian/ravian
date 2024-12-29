import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Profile";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <Hero />
      <WorkExperience />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
