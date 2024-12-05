import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Home from "./components/Home";
import OAS from "./components/OAS"
import Header, { useActiveState } from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ROC from "./components/ROC"
import ROCAC from "./components/ROCAC";
import Prices from "./components/Prices";

function App() {
  const { active, handleSelect } = useActiveState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    try {
      await Promise.all(promises);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load images", error);
    }
  };

  return (
    <div>
      <Header active={active} handleSelect={handleSelect} />
      {isLoading ? (
        <div className="spinner-container">
          <Spinner className="spinner" />
        </div>
      ) : (
        <Container>
          {active === "home" && <Home />}
          {active === "oas" && <OAS />}
          {active === "about" && <About />}
          {active === "roc" && <ROC />}
          {active === "rocac" && <ROCAC />}
          {active === "prices" && <Prices />}
        </Container>
      )}
      <Footer/>
    </div>
  );
}

export default App;
