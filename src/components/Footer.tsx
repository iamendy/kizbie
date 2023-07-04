import styles from "@/styles/Footer.module.scss";
import Image from "next/image";
import call from "../../public/img/call.svg";
import { poppins } from "../fonts";
import Envelope from "./icons/Envelope";
import { useRouter } from "next/router";

const Footer = () => {
  //const router
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.call}>
          <Image src={call} alt="call us today" />
        </div>

        <div className={styles.action}>
          <h3 className={styles.title} style={poppins.style}>
            Time to Shine! Drop us a line!
          </h3>

          <button className="action">
            <Envelope />
            <span>Let's get started</span>
          </button>
        </div>
      </div>

      <div className={styles.copy}>
        <span>&copy; 2022 Kizbie Growth Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
