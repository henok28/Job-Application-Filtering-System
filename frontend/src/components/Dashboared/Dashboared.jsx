import clsx from "clsx";
import styles from "./Dashboared.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import { IoIosArrowRoundForward } from "react-icons/io";

export function Dashboared() {
  return (
    <main>
      <section className={clsx(styles.sectionDashboared, styles.container)}>
        <div className={styles.dashboaredHeader}>
          <h1>Dashboared</h1>
        </div>
        <div className={styles.dataSection}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p>Total Applicants</p>
              <IoIosArrowRoundForward className={styles.cardIcon} />
            </div>
            <div className={styles.cardDescription}>
              <span>200</span>
            </div>
            <div className={styles.cardInfo}>
              <span>Total number of applicants applied</span>
            </div>
          </div>
        </div>
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

function Table() {
  return (
    <div class="dashboared-table">
      <table>
        <caption>Applicants</caption>

        <thead>
          <tr>
            <td colspan="5">
              <div class="sortBy">
                <div class="filter-btns">
                  <button>⬇️Import To</button>
                  {/* <button>Starting Date</button>  */}
                </div>

                <input type="search" placeholder="search" />

                <select name="sort" id="sortBy" aria-placeholder="Hl">
                  <option value="" disabled selected>
                    SortBy
                  </option>
                  <option value="name">Name</option>
                  <option value="data">Data</option>
                  <option value="start-data">Start-Date</option>
                </select>
              </div>
            </td>
          </tr>
        </thead>

        <tr>
          {/* <td>&nbsp;</td>  */}
          <th>Name</th>
          <th>Email</th>
          <th>Job-Title</th>
          <th>Site</th>
          <th>Start-Date</th>
        </tr>

        <tr>
          {/* <td><input type="checkbox" /></td> */}
          <td data-cell="name">Henok</td>
          <td data-cell="email">henok@gmail.com</td>
          <td data-cell="job-title">Software Engineer</td>
          <td data-cell="site">Addis Ababa</td>
          <td data-cell="start-date">Immediately</td>
        </tr>

        <tr>
          {/* <td><input type="checkbox" /></td>  */}
          <td data-cell="name">Henok</td>
          <td data-cell="email">henok@gmail.com</td>
          <td data-cell="job-title">Software Engineer</td>
          <td data-cell="site">Addis Ababa</td>
          <td data-cell="start-date">Immediately</td>
        </tr>
      </table>
    </div>
  );
}
