import GridCard from "../components/GridCard";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center p-4 pt-0">
      <div className="m-10 w-full max-w-md rounded-xl bg-white p-2 text-center text-2xl font-bold text-[#030101] shadow-[0px_4px_1px_#EE363C] sm:text-3xl">
        Top animes de 2026
      </div>

      <GridCard />
    </div>
  );
};

export default Home;
