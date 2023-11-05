import { useState } from "react";
import MainWeather from "./MainWeather";
import SearchBar from "./SearchBar";

interface Props {
  setCityF: (city: any) => void;
}
const Hero = ({ setCityF }: Props) => {
  const [city, setCity] = useState("");
  const sendCity = (city: any) => {
    setCityF(city);
  };
  sendCity(city);

  return (
    <div className="Hero mx-4 min-h-screen grid place-content-center gap-5">
      <SearchBar
        clickedSearchBtn={(city) => {
          setCity(city);
        }}
      />
      <MainWeather city={city || "London"} hours={1} />
    </div>
  );
};

export default Hero;
