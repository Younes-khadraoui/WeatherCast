import { useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/main/Hero";
import Footer from "@/components/footer";
import Head from "next/head";

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <main>
      <Head>
        <title>WeatherCast</title>
      </Head>
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
