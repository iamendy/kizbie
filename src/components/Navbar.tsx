import Link from "next/link";
import Icon from "./icons/Icon";
import styles from "@/styles/Navbar.module.scss";
import Menu from "@/components/icons/Menu";
import Cart from "./icons/Cart";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Icon />

          <span>Kizbie</span>
        </Link>

        <Menu />

        <div className={styles.links}>
          <Link href="#" className={styles.cart}>
            <div className={styles.count}>
              <span>2</span>
            </div>
            <Cart />
          </Link>
          <div>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
