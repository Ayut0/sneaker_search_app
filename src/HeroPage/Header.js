import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flightClub from "../pics/flightclub.png"

const Header = () => {
  return (
    <header>
        <FontAwesomeIcon
          icon="fa-solid fa-shoe-prints text-heading"
          className="transition rotate-90 text-heading"
        />
        <h1 className="text-heading">Find your kicks</h1>
    </header>
  );
};

export default Header;
