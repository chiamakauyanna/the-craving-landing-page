const Button = ({ text, className }) => {
  return (
    <div
      className={`${className} bg-accent py-2 lg:px-4 text-sm lg:text-base rounded-2xl font-bold font-heading`}
    >
      {text}
    </div>
  );
};

export default Button;
