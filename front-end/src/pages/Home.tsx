import GridCard from "../components/GridCard";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center p-4 pt-0">
      <div className="w-110 rounded-xl bg-white p-2 text-center text-3xl font-bold text-[#030101] m-10 shadow-[0px_4px_1px_#EE363C]">
        Top animes de 2026
      </div>
      <GridCard />
    </div>
  );
};

export default Home;
