import clsx from "clsx";
import styles from "./Dashboared.module.css";
import { IoArchiveOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

export function Dashboared() {
  return (
    <main>
      <section className={clsx(styles.sectionDashboared, styles.container)}>
        <DashboardInfoSection />
        <DashboardApplicantTable />
      </section>
    </main>
  );
}

function DashboardInfoSection() {
  return (
    <>
      <div className={styles.dashboaredInformationTab}>
        <DashboardHeader />
        <DashboardDataSection />
      </div>
    </>
  );
}

function DashboardHeader() {
  return (
    <div className={styles.dashboaredHeader}>
      <h1>Dashboared</h1>
    </div>
  );
}

function DashboardDataSection() {
  return (
    <div className={clsx(styles.dataSection, styles.cards)}>
      <DashboardCard />
    </div>
  );
}

function DashboardCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>Total Applicants</p>
        <MdArrowOutward className={styles.cardIcon} />
      </div>

      <div className={styles.cardDescription}>
        <span>200</span>
      </div>

      <div className={styles.cardInfo}>
        <span>Total number of applicants applied</span>
      </div>
    </div>
  );
}

function DashboardApplicantTable() {
  return (
    <div className={styles.dashboaredTable}>
      <div className={styles.filters}>
        <div>
          <button className={styles.importBtn}>
            <IoArchiveOutline className={styles.importBtnIcon} />
            Archive
          </button>
        </div>
        <div className={styles.filterRigthTab}>
          <div className={styles.queryTab}>
            <input type="search" placeholder="search" />
          </div>

          <div className={styles.sortBy}>
            <select name="sort" id="sortBy">
              <option value="" disabled selected>
                SortBy
              </option>
              <option value="name">Name</option>
              <option value="data">Data</option>
              <option value="start-data">Start-Date</option>
            </select>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {/* <!-- <td>&nbsp;</td> --> */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job-Title</th>
            <th>Experiance</th>
            <th>Site</th>
            <th>Type(In-person/Remote)</th>
            <th>Start-Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {/* <!-- <td><input type="checkbox" /></td> --> */}
            <td data-cell="name">Henok</td>
            <td data-cell="email">henok@gmail.com</td>
            <td data-cell="phone">0909090909</td>
            <td data-cell="job-title">Software Engineer</td>
            <td data-cell="experiance">0</td>
            <td data-cell="site">Addis Ababa</td>
            <td data-cell="type">Remote</td>
            <td data-cell="start-date">Immediately</td>
          </tr>

          <tr>
            {/* <!-- <td><input type="checkbox" /></td> --> */}
            <td data-cell="name">Henok</td>
            <td data-cell="email">henok@gmail.com</td>
            <td data-cell="phone">0909090909</td>
            <td data-cell="job-title">Software Engineer</td>
            <td data-cell="experiance">3</td>
            <td data-cell="site">Addis Ababa</td>
            <td data-cell="type">In-Person</td>
            <td data-cell="start-date">Immediately</td>
          </tr>
          <tr>
            {/* <!-- <td><input type="checkbox" /></td> --> */}
            <td data-cell="name">Henok</td>
            <td data-cell="email">henok@gmail.com</td>
            <td data-cell="phone">0909090909</td>
            <td data-cell="job-title">Software Engineer</td>
            <td data-cell="experiance">3</td>
            <td data-cell="site">Addis Ababa</td>
            <td data-cell="type">In-Person</td>
            <td data-cell="start-date">Immediately</td>
          </tr>
          <tr>
            {/* <!-- <td><input type="checkbox" /></td> --> */}
            <td data-cell="name">Henok</td>
            <td data-cell="email">henok@gmail.com</td>
            <td data-cell="phone">0909090909</td>
            <td data-cell="job-title">Software Engineer</td>
            <td data-cell="experiance">3</td>
            <td data-cell="site">Addis Ababa</td>
            <td data-cell="type">In-Person</td>
            <td data-cell="start-date">Immediately</td>
          </tr>
          <tr>
            {/* <!-- <td><input type="checkbox" /></td> --> */}
            <td data-cell="name">Henok</td>
            <td data-cell="email">henok@gmail.com</td>
            <td data-cell="phone">0909090909</td>
            <td data-cell="job-title">Software Engineer</td>
            <td data-cell="experiance">3</td>
            <td data-cell="site">Addis Ababa</td>
            <td data-cell="type">In-Person</td>
            <td data-cell="start-date">Immediately</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
