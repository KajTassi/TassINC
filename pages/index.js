import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tassi Inc | VW Auto Repair</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/vwicon.png" />
      </Head>

      <Navbar />
      <Hero />  
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Common services"
        title="Quotes">
        Some services and repairs are just more common than others, so we have pricing ready to go for you below.
      </SectionTitle>

      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what some our customers have said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;