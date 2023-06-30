import Link from "next/link";
import Icon from "./icons/Icon";
import styles from "@/styles/Navbar.module.scss";
import Menu from "@/components/icons/Menu";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Icon />

          <span>Kizbie</span>
        </div>

        <Menu />

        <div className={styles.links}>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
