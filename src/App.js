import React from "react";
import Analystics from "./components/Analystics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Analystics />
      <News />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
