const GeoLocation = () => {
  const handleSearch = () => {};
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <div className="flex flex-col justify-center items-center rounded-2xl w-10/12 h-[40%] bg-blue-300">
        <p>Nearby</p>
        <p>content</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default GeoLocation;
