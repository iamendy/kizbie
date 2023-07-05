import Layout from "@/components/Layout";
import {
  Hero,
  Sponsors,
  About,
  Books,
  Testimonial,
} from "@/components/sections";

export default function Home() {
  return (
    <Layout>
      <main className="main-wrapper">
        <Hero />
        <Sponsors />
        <About />
        <Books />
        <Testimonial />
      </main>
    </Layout>
  );
}
