import Button from "../common/Button";
import NavBar from "../common/NavBar";

const Header = () => {
  return (
    <div className=" flex justify-between py-4 px-4">
      {/* logo */}
      <div className="bg-accent py-1 px-4 rounded-bl-3xl rounded-tr-3xl text-lg text-primary font-bold">
        <h2>The Craving</h2>
      </div>

      {/* nav bar */}
      <NavBar />

      {/* call to action */}
      <div>
        <Button text="Order" className="text-primary" />
      </div>
    </div>
  );
};

export default Header;
