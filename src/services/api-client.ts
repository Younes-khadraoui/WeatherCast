import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "545c8ee9a48eb07fe0ac0550c652ea48",
  },
});
