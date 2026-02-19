export default function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}
function Main() {}
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src="/omnifood-logo.png" alt="Omnifood Logo" class="logo" />
        </a>
      </div>
      <div className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a class="main-nav-link" href="#how">
              Dashboared
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#meals">
              Email
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#testimonials">
              Task
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#pricing">
              Interview
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
