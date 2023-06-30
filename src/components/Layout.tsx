import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pancake">
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
};
export default Layout;
