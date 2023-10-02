import React, { useEffect } from "react";
import Hero from "./Hero";
import "../css/style.css";
import NewArrival from "./NewArrival";
import Card from "./Card";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-3 mt-4">
      <Hero />
      <NewArrival />
      <Card />
    </div>
  );
}

export default Home;
