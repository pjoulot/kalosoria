import icon from '../../assets/icon.png';
import './App.css';
import { Link } from "react-router-dom";

export default function Settings() {

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Settings</h1>
      <div className="Hello">
        <Link to="/">
            Back
        </Link>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Settingsss
          </button>
        </a>
      </div>
    </div>
  );
};
