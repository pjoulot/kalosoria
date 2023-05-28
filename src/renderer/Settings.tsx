import icon from '../../assets/icon.png';
import './App.css';
import { Link } from "react-router-dom";
import { SelectSettings } from 'kalosoria/features/settings/SelectSettings';
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t, i18n } = useTranslation()


  let languages = {
    'en': 'English',
    'fr': 'French',
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Settings</h1>
      <div className="">
        <Link to="/">
          {t('back')}
        </Link>

        <div>
          <label htmlFor="language">{t('kalosoria.settings.language')}</label>
          <SelectSettings name="language" options={languages} />
        </div>

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
