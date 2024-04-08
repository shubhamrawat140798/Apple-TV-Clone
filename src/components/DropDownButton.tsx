import SettingsIcon from "./Icons/SettingsIcon";
import "./style/DropDownButton.css";
function DropDownButton() {
  return (
    <>
      <div className="dropdown">
        <div
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle" />
        </div>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              Settings <SettingsIcon />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default DropDownButton;
