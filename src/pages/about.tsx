import Layout from "../components/Layout";
import styles from "../styles/About.module.scss";
import announce from "../../public/img/about.svg";
import Image from "next/image";
import { poppins } from "../fonts";

const about = () => {
  return (
    <Layout>
      <main className="main-wrapper">
        <div className={styles.aboutWrapper}>
          <div className={styles.top}>
            <div>
              <div className="badge">calling All Moms</div>

              <div className={styles.announce}>
                <Image src={announce} alt="a woman announcing through a PA" />
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div>
              <h3 className={styles.title} style={poppins.style}>
                Transforming ideas into digital results
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                blanditiis perferendis adipisci possimus iste debitis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. In blanditiis
                perferendis adipisci possimus iste debitis.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <h3 style={poppins.style}>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus quas consectetur eum saepe eligendi illo unde itaque
                  alias tempora tenetur.
                </p>
              </div>

              <div className={styles.feature}>
                <h3 style={poppins.style}>Build with Framer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  harum quo iusto nam deleniti culpa, libero asperiores. Porro
                  minus consequatur ipsum, similique error incidunt esse?
                </p>
              </div>

              <div className={styles.feature}>
                <h3 style={poppins.style}>Build with Webflow</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam saepe non fugit? Enim aspernatur dolores quos
                  inventore dicta odit recusandae aut doloremque asperiores,
                  consequuntur adipisci dolorum itaque iste perferendis fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default about;
