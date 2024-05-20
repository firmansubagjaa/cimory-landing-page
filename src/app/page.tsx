import Article from "@/components/homeComponents/Article";
import Benefits from "@/components/homeComponents/Benefits";
import Carousel from "@/components/homeComponents/Carousel";
import Destination from "@/components/homeComponents/Destination";
import Explorer from "@/components/homeComponents/Explorer";
import Footer from "@/components/homeComponents/Footer";
import Navbar from "@/components/homeComponents/Navbar";
import Offering from "@/components/homeComponents/Offering";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <Main>
      <Navbar />
      <Carousel />
      <Benefits />
      <Destination />
      <Explorer />
      <Article />
      <div className="relative">
        <Offering />
        <Footer />
      </div>
    </Main>
  );
}
