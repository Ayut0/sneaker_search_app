import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-shoe-prints text-heading"
          className="transition rotate-90 text-heading"
        />
        <h1>Find your kicks</h1>
      </div>
    </header>
  );
};

export default Header;
