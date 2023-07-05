import Layout from "@/components/Layout";
import BookStore from "../../components/BookStore";

const Index = () => {
  return (
    <Layout>
      <div className="main-wrapper">
        <BookStore />
      </div>
    </Layout>
  );
};
export default Index;
