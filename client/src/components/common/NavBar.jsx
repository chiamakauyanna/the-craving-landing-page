const NavBar = () => {
  return (
    <div>
      <ul className="flex items-center gap-6 font-heading text-xs md:text-sm lg:text-base">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#booking">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
