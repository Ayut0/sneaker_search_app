
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center absolute xl:left-8 top-8 left-4">
      <FontAwesomeIcon
        icon={faShoePrints}
        className="transition -rotate-90 text-heading xl:text-5xl text-3xl"
      />
      <h1 className="text-heading xl:text-5xl font-bold text-3xl">
        Find your kicks
      </h1>
    </header>
  );
};

export default Header;
