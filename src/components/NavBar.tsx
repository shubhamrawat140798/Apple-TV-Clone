import DropDownButton from "./DropDownButton";
import Logo from "./Icons/logo";
import "./style/NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <Logo />

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link live" aria-current="page" href="#">
                Apple TV+
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MLS Season Pass
              </a>
            </li>
          </ul>
          <div className="d-flex items-center" role="search">
            <form>
              {/* <span className="bi bi-search" /> */}
              <input
                className="search-form"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {/* <button className="btn btn-outline-success" type="drop" icon="">
              <span className="bi bi-person-circle" />
            </button> */}
            <DropDownButton />
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
