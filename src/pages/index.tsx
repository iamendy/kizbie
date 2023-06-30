import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Sponsors />
      <About />
    </Layout>
  );
}
