type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border-2 border-[#EE363C] bg-[#EE363C] py-2 text-sm text-white";
    } else if (variant === "outline") {
      return "w-full cursor-pointer rounded-md border-2 border-[#EE363C] bg-white py-2 text-sm text-[#EE363C]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
