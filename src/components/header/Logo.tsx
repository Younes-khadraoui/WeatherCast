import useWeather, { Weather } from "../../hooks/useWeather";
import cloudyDay from "../../assets/cloudy-day-2.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  city: string;
}

const Logo = ({ city }: Props) => {
  const { data, error, isLoading } = useWeather(city);

  if (error || isLoading)
    return (
      <div className="grow flex items-center">
        <Image className="w-20" src={cloudyDay} alt="cloud and sun logo" />
        <div className="relative">
          <h1 className="text-4xl font-medium">WeatherCast</h1>
        </div>
      </div>
    );

  const dateTime = new Date(data?.dt * 1000 + data.timezone * 1000);

  const hour = dateTime.getHours();
  const ampm = hour >= 12 ? "pm" : "am";
  const minutes = dateTime.getMinutes();

  return (
    <div className="grow flex items-center">
      <Image className="w-20" src={cloudyDay} alt="cloud and sun logo" />
      <div className="relative">
        <h1 className="text-4xl font-medium">WeatherCast</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-4 right-0"
        >
          {hour - 1}:{minutes}
          {ampm}
        </motion.p>
      </div>
    </div>
  );
};

export default Logo;
