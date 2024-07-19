import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Section1 } from "./_components/Section1";
import { Section2 } from "./_components/Section2";
import { SubscribeComp } from "./_components/SubscribeComp";

export default function Home() {
  return (
    <div className=" ">
      <div className=" lg:h-[100vh] md:h-[60vh] h-[50vh] bg-[#f9e8e9]">
        <Header/>
        <div className=" container h-full">
          <Hero/>
        </div>
      </div>
      <div className=" container">
        <Section1/>
        <Section2/>
      </div>
      <SubscribeComp/>
      <Footer/>
    </div>
  );
}
