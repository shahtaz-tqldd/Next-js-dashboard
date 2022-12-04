import Head from "next/head";
import Body from "../Components/Candidates/Body";
import Filter from "../Components/Candidates/Filter";
import TopBar from "../Components/Candidates/TopBar";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head><title>Dashboard</title></Head>
      <Navbar />
      <TopBar />
      <div className="flex">
        <div className="w-[20%]">
          <Filter/>
        </div>
        <div className="w-[80%]">
          <Body/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
