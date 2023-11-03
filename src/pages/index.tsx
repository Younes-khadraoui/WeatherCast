import { useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/main/Hero";
import Footer from "@/components/footer";

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <main>
      <div className="absolute main -z-10"></div>
      <Header city={city || "London"} />
      <Hero
        setCityF={(city) => {
          setCity(city);
        }}
      />
      <Footer />
    </main>
  );
}
