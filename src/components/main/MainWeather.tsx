import useWeather, { Weather } from "../../hooks/useWeather";
import Spinner from "../needs/Spinner";
import location from "../../assets/location.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  city: string;
  hours: number;
}
const MainWeather = ({ city, hours }: Props) => {
  const { data, error, isLoading } = useWeather(city);

  if (error) {
    return (
      <div className="flex justify-center items-center gap-4 mt-5">
        <h1 className="text-white text-xl">Place does not exist !</h1>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-500 bg-opacity-70 p-[6px] rounded-xl text-white text-xs"
        >
          Relaod
        </button>
      </div>
    );
  }

  if (isLoading) return <Spinner />;

  const dateTime = new Date(data?.dt * 1000 + data?.timezone * 1000);

  const weekday = dateTime.toLocaleString("default", { weekday: "long" });
  const month = dateTime.toLocaleString("default", { month: "short" });
  const date = dateTime.getDate();

  const iconId = "01d";
  const iconSrc = "https://openweathermap.org/img/wn/" + iconId + ".png";

  if (data)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="Main grid place-content-center bg-[#4682B4] p-10 rounded-lg "
      >
        <div className="grid grid-cols-2 justify-around w-full gap-10">
          <div className="location flex justify-center items-center gap-2 ">
            <p className="text-2xl ">{(data as Weather)?.name ?? null}</p>
            <Image className="w-4 " src={location} alt="location icon" />
          </div>
          <p className="date text-2xl ">
            {month} {date}, {weekday}
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 text-4xl py-10">
          <p className="font-bold">{(data as Weather)?.main.temp}°C</p>
          <img src={iconSrc} alt="icon" />
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="px-4">
            <p className="text-xl">Humidity</p>
            <p className="text-center font-bold">
              {(data as Weather).main.humidity}%
            </p>
          </div>
          <div className="w-[1px] h-full bg-[#F2F2F2]  top-0 hidden sm:block"></div>
          <div className="px-4">
            <p className="text-xl">Air Pressure</p>
            <p className="text-center font-bold">
              {(data as Weather).main.pressure}hPa
            </p>
          </div>
          <div className="w-[1px] h-full bg-[#F2F2F2]  top-0 hidden sm:block"></div>
          <div className="px-4">
            <p className="text-xl">Wind</p>
            <p className="text-center font-bold">
              {(data as Weather).wind.speed}mph
            </p>
          </div>
        </div>
      </motion.div>
    );
};

export default MainWeather;
