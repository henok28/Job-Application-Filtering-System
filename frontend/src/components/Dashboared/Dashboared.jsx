import styles from "./Dashboared.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

export function Dashboared() {
  return (
    <main className={styles.mainSection}>
      <section className={styles.dashboared}>
        <Header />
        <Card />
      </section>
    </main>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <h1>Dashboared</h1>
    </div>
  );
}

function Card() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <IoCheckmarkCircleOutline className={styles.cardIcon} />
          <MdArrowOutward className={styles.cardIcon} />
        </div>
        <p>Total Applications</p>

        <div className={styles.cardDescription}>
          <p>420</p>
          <span>Total Applied Applicants </span>
        </div>
      </div>
      <div className={styles.card}>
        <div></div>
      </div>
    </div>
  );
}
