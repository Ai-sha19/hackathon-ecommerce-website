import Image from "next/image";
// import { Montserrat } from 'next/font/google'
import Banner from "./components/hero";
import Features from "./components/features";
import NewCeramics from "./components/new-ceramics";
import PopularProduct from "./components/products";
import SignupSection from "./components/signup-section";
import GetInTouch from "./components/get-in-touch";

// const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Banner />
    <Features />
    <NewCeramics />
    <PopularProduct />
    <SignupSection />
    <GetInTouch />
    </main>
  );
}
