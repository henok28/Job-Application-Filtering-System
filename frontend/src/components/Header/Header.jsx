import { useState } from "react";
import styles from "./Header.module.css";
import profile from "./admin.jpg";
import logo from "./logo.png";
import { CiDark, CiLight } from "react-icons/ci";

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigtion />
      <Profile />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <a href="#">
        <img src={logo} alt="Omnifood Logo" class={styles.logo} />
      </a>
    </div>
  );
}

function Navigtion() {
  return (
    <div className={styles.navigationSection}>
      <ul className={styles.mainNavList}>
        <li>
          <a class={styles.mainNavLink} href="dashboared">
            Dashboared
          </a>
        </li>
        <li>
          <a class={styles.mainNavLink} href="#meals">
            Email
          </a>
        </li>
        <li>
          <a class={styles.mainNavLink} href="#testimonials">
            Task
          </a>
        </li>
        <li>
          <a class={styles.mainNavLink} href="#pricing">
            Interview
          </a>
        </li>
      </ul>
    </div>
  );
}

function Profile() {
  // const isDark = true;
  const [isDark, setIsDark] = useState(false);
  return (
    <div onClick={() => setIsDark(!isDark)} className={styles.profileSection}>
      {isDark ? (
        <CiLight className={styles.icons} />
      ) : (
        <CiDark className={styles.icons} />
      )}

      {/*  */}
      <img className={styles.profile} src={profile} alt="Admins Profile" />
    </div>
  );
}
