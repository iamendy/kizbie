import Link from "next/link";
import Logo from "./icons/Logo";
import styles from "@/styles/Navbar.module.scss";
import Menu from "@/components/icons/Menu";
import Cart from "./icons/Cart";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Logo />

          <span>Kizbie</span>
        </Link>

        <div className={styles.menu}>
          <Link href="#" className={styles.cart}>
            <div className={styles.count}>
              <span>2</span>
            </div>
            <Cart />
          </Link>

          <Menu />

          <div className={styles.links}>
            <div>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
