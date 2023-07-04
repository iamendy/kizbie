import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import About from "@/components/About";
import Books from "@/components/Books";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Sponsors />
      <About />
      <Books />
      <Testimonial />
    </Layout>
  );
}
