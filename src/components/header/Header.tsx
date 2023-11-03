import { motion } from "framer-motion";
import Logo from "./Logo";
interface Props {
  city: string;
}
const Header = ({ city }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full flex flex-col lg:flex-row text-white items-center justify-between">
      <Logo city={city || "London"} />
    </div>
  );
};

export default Header;
