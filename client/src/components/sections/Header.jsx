import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../common/Button";
import NavBar from "../common/NavBar";
import { navLinks } from "../../data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-primary z-10">
      
      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-6 lg:px-20">
        
        {/* Logo */}
        <div className="font-bold text-2xl">
          <h2>
            The <span className="text-accent">Craving</span>
          </h2>
        </div>

        {/* Desktop NavBar */}
        <div className="hidden md:block">
          <NavBar />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#booking">
            <Button text="Order Online" className="text-primary" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary px-6 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 font-heading">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#booking" onClick={() => setMenuOpen(false)}>
            <Button text="Order Online" className="text-primary w-fit" />
          </a>
        </div>
      )}

    </header>
  );
};

export default Header;