import { Link } from "react-router";
type HeaderType = {
  title: string;
  route: string;
};

const Header = ({ title, route }: HeaderType) => {
  return (
    <div className="bg-[#030101] p-4">
      <div className="mx-auto flex w-full flex-col items-center gap-4 p-3 sm:flex-row sm:justify-between md:w-184.25 md:p-0">
        <img src="./logo.png" alt="Logotipo do site." className="h-21.5 w-25" />
        <Link to={route}>
          <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#EE363C] font-bold text-white">
            {title}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
