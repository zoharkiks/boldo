import type { NextPage } from "next";
import Head from "next/head";
import { Newsletter } from "../components";

// import components
import {
  Navbar,
  Footer,
  Hero,
  Services,
  Testimonials,
  Blog,
} from "../containers";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Boldo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <div className="h-screen bg-darkBlue px-[100px] pt-14 lg:px-[50px] md:px-[30px] md:pt-8">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Testimonials/>
<Blog/>
<Newsletter/>
<Footer/>
    </div>
  );
};

export default Home;
