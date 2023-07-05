import mailbox from "../../public/img/mailbox.svg";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import { poppins, inter } from "../fonts";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <div className={styles.contactWrapper}>
          <div className={styles.top}>
            <div className="badge">Inquires?</div>
            <div className={styles.mail}>
              <Image src={mailbox} alt="send us a mail" />
            </div>
          </div>

          <div className={styles.bottom}>
            <h3 className={styles.title} style={poppins.style}>
              We would love to hear you!
            </h3>

            <p className={styles.body}>
              Whether you have a question, want to inquire about our services,
              or simply want to say hello, feel free to reach out to us.
            </p>

            <div className={styles.form}>
              <div className={styles.details}>
                <div className={styles.control}>
                  <input type="text" placeholder="Name" />
                </div>
                <div className={styles.control}>
                  <input type="text" placeholder="Email" />
                </div>
              </div>

              <div>
                <textarea
                  style={inter.style}
                  className={styles.message}
                  placeholder="Feel free to send us a message"
                ></textarea>
              </div>

              <button className={styles.send}>Send</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
