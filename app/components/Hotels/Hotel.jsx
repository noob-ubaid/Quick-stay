import React from "react";
import SingleHotel from "./SingleHotel";
async function getHotels() {
  const res = await fetch(`${process.env.NEXT_API_URL}/data.json`);
  const hotels = await res.json();
  return hotels;
}
const Hotel = async () => {
  const hotels = await getHotels();
  return (
    <div className="py-14 md:py-24 bg-[#E4EEF84F] px-4 2xl:px-0">
      <div>
        <h2 className="text-2xl text-center font-semibold md:text-3xl lg:text-4xl text-[#252525]">
          Featured Hotels
        </h2>
        <p className="text-[#6B7280E6] max-w-[800px] mt-2 mx-auto text-center">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-[1500px] mt-10 md:mt-14 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-12">
        {hotels.map((hotel) => (
          <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
