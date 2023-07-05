import Layout from "@/components/Layout";
import styles from "@/styles/Book.module.scss";
import { poppins } from "../../fonts";
import { Star, Author, Cart } from "../../components/icons";
import Image from "next/image";
import beach from "../../../public/img/beach-rescue.jpeg";
import beach2 from "../../../public/img/beach-rescue-2.jpeg";
import user from "../../../public/img/user.webp";
import { Books } from "../../components/sections";
import title1 from "../../../public/img/title1.jpg";

const Book = () => {
  return (
    <Layout>
      <div className="main-wrapper">
        <div className={styles.bookWrapper}>
          <div className={styles.titleSection}>
            <div className={styles.top}>
              <p className="badge"> Adventure</p>

              <div className={styles.cover}>
                <Image src={title1} alt="Book title cover" />
              </div>

              <h3 className={styles.title} style={poppins.style}>
                Sami’s Beach Rescue
              </h3>

              <p className={styles.tagline}> - Help promotes water safety</p>

              <p className={styles.description}>
                Sami and his family take a trip to the sea, but when things take
                a turn for the worse, Sami’s quick thinking and recollection of
                his water safety training are put to the test. Will “Float to
                Live” save the day?
              </p>

              <div className={styles.details}>
                <div className={styles.left}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>

                  <div className={styles.author}>
                    <Author /> <span> Namm Khan </span>
                  </div>
                </div>

                <div className={styles.right}>
                  <button className={styles.add}>
                    <Cart /> <span>add</span>
                  </button>
                </div>
              </div>

              <div className={styles.reviewsWrapper}>
                <h3 className={styles.reviewTitle} style={poppins.style}>
                  Moms reviews
                </h3>
                <div className={styles.reviews}>
                  <div className={styles.review}>
                    <div className={styles.momWrapper}>
                      <div className={styles.mom}>
                        <Image src={user} alt="mom review" />
                      </div>
                    </div>
                    <div className={styles.commentWrapper}>
                      <p className={styles.comment}>
                        I also think it is a GREAT message! And can be useful
                        for adults and children, expressed well and
                        entertaining. Congrats on all the 5*s.
                      </p>

                      <span className={styles.date}>12th October, 2022</span>
                    </div>
                  </div>

                  <div className={styles.review}>
                    <div className={styles.momWrapper}>
                      <div className={styles.mom}>
                        <Image src={user} alt="mom review" />
                      </div>
                    </div>
                    <div className={styles.commentWrapper}>
                      <p className={styles.comment}>
                        I also think it is a GREAT message! And can be useful
                        for adults and children, expressed well and
                        entertaining. Congrats on all the 5*s.
                      </p>

                      <span className={styles.date}>12th October, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <h3 className={styles.previewTitle} style={poppins.style}>
                Preview pages
              </h3>
              <div className={styles.preview}>
                <Image src={beach} alt="book preview" />
              </div>

              <div className={styles.preview}>
                <Image src={beach2} alt="book preview" />
              </div>
            </div>
          </div>
        </div>
        <Books />
      </div>
    </Layout>
  );
};
export default Book;
