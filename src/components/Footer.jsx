import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 bg-darkLight">
      <div>
        <h1 className="accent text-[3rem] font-bold">{"{#}"}</h1>
      </div>

      <div>
        <ul className="flex flex-col items-center gap-4 sm:flex-row">
          <li>
            <a href="#" className="hover:text-primary">
              Upcoming events
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Benefit
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex gap-3">
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            {" "}
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
