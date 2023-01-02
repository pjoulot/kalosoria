import icon from '../../assets/icon.png';
import bg from '../../assets/home-bg.jpg';
import './App.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  function closeWindow() {
    window.close();
  }

  return (
    <div>
      <div className="Home">
        <div className="ImageFit ScreenBg">
          <img width="200" alt="background" src={bg} />
        </div>
        <div className="Home__logo">
          <div className="Home__logo__inner">
            <img width="200" alt="icon" src={icon} />
          </div>
        </div>
        <div className="Home__actions">
          <div className="Home__actions__inner">
            <Link to="settings">
              Settings
            </Link>
            <Link to="credits">
              Credits
            </Link>
            <button onClick={closeWindow}>{t('exit')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
