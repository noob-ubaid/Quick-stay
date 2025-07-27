import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Hotel from "./components/Hotels/Hotel";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Hotel/>
    </div>
  );
}
