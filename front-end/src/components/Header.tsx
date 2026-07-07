import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#030101] p-4">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <img src="./logo.png" alt="Logotipo do site." className="h-21.5 w-25" />
        <Link to="/login">
          <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#EE363C] text-white font-bold">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
