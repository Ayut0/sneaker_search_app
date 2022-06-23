import { Link } from "react-router-dom";

const Footer = () =>{
    return (
      <footer className="bg-header h-20 text-center flex flex-wrap p-2">
        <span className="text-heading w-full">
          <Link to="/home">Home</Link>
        </span>
        <span className="text-heading w-full">
          Copyright &copy; 2022 Yuto Yamakita All rights Reserved
        </span>
      </footer>
    );
}

export default Footer;
