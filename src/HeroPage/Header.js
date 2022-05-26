
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex absolute left-xl top-xl">
      <FontAwesomeIcon
        icon={faShoePrints}
        className="transition -rotate-90 text-heading text-5xl"
      />
      <h1 className="text-heading text-5xl font-bold">Find your kicks</h1>
    </header>
  );
};

export default Header;
