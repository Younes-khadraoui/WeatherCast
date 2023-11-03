import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  clickedSearchBtn: (data: string) => void;
}
const SearchBar = ({ clickedSearchBtn }: Props) => {
  const iconStyles = {
    height: "100%",
    width: "22px",
    color: "#4682B4",
    backgroundOpacity: 70,
  };
  const [selectedCity, setselectedCity] = useState("");
  return (
    <div className="flex justify-center mt-5">
      <div className="flex bg-white bg-opacity-90 items-ceter justify-center gap-2 rounded-2xl p-2">
        <BiSearchAlt style={iconStyles} />
        <input
          className="bg-transparent w-2/3 lg:w-96 focus:outline-none text-black"
          type="search"
          placeholder="Search Location..."
          onChange={(city) => setselectedCity(city.target.value)}
        />
        <button
          onClick={() => clickedSearchBtn(selectedCity)}
          className="bg-[#4682B4] p-[6px] rounded-xl  text-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
