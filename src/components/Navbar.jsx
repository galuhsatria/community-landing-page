import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="sticky top-0 lg:px-10 md:backdrop-blur-md bg-dark lg:bg-transparent z-50">
      <nav className="relative flex items-center justify-between py-4 px-7">
        <div className="logo">
          <h2 className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-green-600">{"{#}"}</h2>
        </div>

        <div className={`lg:static lg:border-none border-b border-zinc-400 menu lg:block bg-dark lg:bg-transparent top-14 lg:py-0 absolute py-5 lg:w-max w-full left-0  ${navbarOpen ? " block" : "hidden"}`}>
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            {menu.map((menu) => (
              <li key={menu.href} onClick={() => setNavbarOpen(!navbarOpen)}>
                <a href={menu.href} className="text-xl font-medium lg:text-base">
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="hidden px-8 py-2 bg-gradient-to-r from-green-400 to-green-600 rounded-xl lg:block">
            <a href="#">Join Us</a>
          </button>
        </div>
        <button className="block cursor-pointer lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
          <AiOutlineMenu className="text-2xl font-medium" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

const menu = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Upcoming Events",
    href: "#event",
  },
  {
    label: "Our Team",
    href: "#team",
  },
];
