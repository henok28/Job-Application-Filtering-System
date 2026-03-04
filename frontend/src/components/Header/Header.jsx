import styles from "./Header.module.css";

import profile from "./admin.jpg";
import logo from "./logo.png";
import clsx from "clsx";
import { IoMailOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

export function Header() {
  return (
    <div className={clsx(styles.header, styles.container)}>
      <a href="#">
        <img src={logo} alt="Companies Logo" className={styles.logo} />
      </a>

      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li>
            <a className={styles.mainNavLink} href="#">
              Dashboared
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              Email
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              Task
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="#">
              Interview
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.rightHeaderSection}>
        <div className={styles.icons}>
          <IoMailOutline className={styles.icon} />
          <IoIosNotificationsOutline className={styles.icon} />
        </div>

        <div className={styles.profile}>
          <img
            className={styles.profileImg}
            src={profile}
            alt="Admins Profile"
          />

          <div className={styles.profileDescription}>
            <span>Henok Grima</span>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
