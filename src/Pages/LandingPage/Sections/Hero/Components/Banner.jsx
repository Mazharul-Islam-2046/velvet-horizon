const Banner = () => {
  return (
    <div className="px-16">
      <div>
        <p>Movie</p>
        <h4>Star Wars: The Force Awaken</h4>
        <div className="flex gap-2 items-center">
          <p>2h40m</p>
          <div className="bg-[#f8f8f8] rounded-full p-[1px]"></div>
          <p>2022</p>
          <div className="bg-[#f8f8f8] rounded-full p-[1px]"></div>
          <p>Fantasy</p>
          <div className="bg-[#f8f8f8] rounded-full p-[1px]"></div>
          <p>Action</p>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur tempore illum omnis quod consequuntur rem ut molestiae maxime tempora, ullam quisquam fuga dolorem laboriosam eligendi recusandae cum delectus? Aliquam.
        </p>
        <div>
            <button>Watch Trailer</button>
            
            <button>Add Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
