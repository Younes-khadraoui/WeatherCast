import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

export interface Weather {
  name: string;
  dt: number;
  timezone: number;
  weather: {
    icon: string;
  };
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
}

const useWeather = (city: string) => {
  const [data, setData] = useState<Weather | null>({
    name: "",
    dt: 0,
    timezone: 0,
    weather: {
      icon: "",
    },
    main: {
      temp: 0,
      humidity: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [geo, setGeo] = useState({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=545c8ee9a48eb07fe0ac0550c652ea48`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setGeo({
            lat: res.data[0].lat,
            lon: res.data[0].lon,
          });
        } else {
          throw new Error("City not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [city]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    if (geo.lat) {
      apiClient
        .get("/weather", {
          params: {
            lat: geo.lat,
            lon: geo.lon,
            units: "metric",
          },
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
    return () => controller.abort();
  }, [geo]);

  return { data: data as Weather, error, isLoading };
};

export default useWeather;
