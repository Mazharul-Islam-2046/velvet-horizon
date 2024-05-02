const Banner = () => {
  return (
    <div className="px-16 py-16 h-[620px] text-left flex items-end bg-[url('https://preview.redd.it/i-found-this-super-cool-star-wars-poster-online-and-set-it-v0-f46xrb44ysn81.jpg?auto=webp&s=fecd1c897e14ba38ad4afc94eb71031ecc11b0b1')] bg-cover relative">
      <div className="z-10 w-3/5 py-12 pr-12 bg-gradient-to-b from-transparent via-[#22222260] to-transparent">
        <p className="text-xs py-2 px-4 tracking-wider font-bold rounded-full bg-[#222] w-fit">Movie</p>
        <h4 className="mt-8 mb-4 text-3xl font-bold drop-shadow-lg tracking-wider">Star Wars: The Force Awaken</h4>
        <div className="flex gap-2 items-center mb-4 font-bold drop-shadow-xl tracking-wider">
          <p>2h40m</p>
          <div className="bg-[#f8f8f8] rounded-full p-[2px]"></div>
          <p>2022</p>
          <div className="bg-[#f8f8f8] rounded-full p-[2px]"></div>
          <p>Fantasy</p>
          <div className="bg-[#f8f8f8] rounded-full p-[2px]"></div>
          <p>Action</p>
        </div>
        <p className="mb-8 font-semibold drop-shadow-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur tempore illum omnis quod consequuntur rem ut molestiae maxime tempora, ullam quisquam fuga dolorem laboriosam eligendi recusandae cum delectus? Aliquam.
        </p>
        <div className="flex gap-8">
            <button className="bg-green-700 py-2 px-6 rounded-xl">Watch Trailer</button>
            
            <button className=" py-2 px-6 rounded-xl border-2 border-[#f8f8f8]">Add Watchlist</button>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[#22222260] from-37% via-transparent via-60% to-[#222222] to-3% top-0 left-0 right-0 bottom-0">

      </div>
    </div>
  );
};

export default Banner;
