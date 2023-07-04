import Link from "next/link";
import Icon from "./icons/Icon";
import styles from "@/styles/Navbar.module.scss";
import Menu from "@/components/icons/Menu";
import Cart from "./icons/Cart";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Icon />

          <span>Kizbie</span>
        </div>

        <Menu />

        <div className={styles.links}>
          <Link href="#" className={styles.cart}>
            <div className={styles.count}>
              <span>2</span>
            </div>
            <Cart />
          </Link>
          <div>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
