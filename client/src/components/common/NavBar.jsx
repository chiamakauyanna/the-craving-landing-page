const NavBar = () => {
  return (
    <div>
      <ul className="flex items-center gap-6 font-heading">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
