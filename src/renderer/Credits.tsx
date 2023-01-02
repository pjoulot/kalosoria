import icon from '../../assets/icon.png';
import './App.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>{t('credits.title')}</h1>
      <div className="Hello">
        <Link to="/">
            Back
        </Link>
        <p>Built with Kalosoria</p>
      </div>
    </div>
  );
};
