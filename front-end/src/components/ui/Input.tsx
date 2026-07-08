const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-87.5 rounded-md bg-white px-2 py-2.5 text-xs text-[#32343e] placeholder-[#32343e] outline-none"
    />
  );
};

export default Input;
