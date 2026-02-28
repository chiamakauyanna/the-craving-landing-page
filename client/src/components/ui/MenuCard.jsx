import Button from "../common/Button";

const MenuCard = ({ name, price, image, tag }) => {
  return (
    <div className="group bg-secondary rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-heading font-bold md:text-lg">{name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-accent font-bold md:text-lg">₦{price}</p>
          <Button
            text="Order Now"
            className="text-primary hover:bg-accent/80 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
