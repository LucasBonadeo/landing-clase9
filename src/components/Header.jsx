import LogoVirbela from "../img/logo-virbela.png";
import { RedesSociales } from "./RedesSociales";
import { ButtonDarkMode } from "./ButtonDarkMode";

export function Header({ darkMode, onDarkModeClick }) {
  const navbarClasses = darkMode
    ? "navbar navbar-expand-lg navbar-dark bg-dark"
    : "navbar navbar-expand-lg navbar-light bg-light";

  const toggleMenuButtonClasses = darkMode
    ? "dropdown-menu bg-dark"
    : "dropdown-menu";

  const toggleMenuClasses = darkMode
    ? "dropdown-item text-white bg-dark"
    : "dropdown-item text-dark bg-white";

  const handleDarkModeClick = () => {
    onDarkModeClick(!darkMode);
  };

  return (
    <header>
      <nav className={navbarClasses} id="navBar">
        <div className="container-fluid">
          <img src={LogoVirbela} alt="" width="30" height="24" />
          <a className="navbar-brand" href="index.html">
            VIRBELA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#navBar"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Temario Evento
                </a>
                <ul
                  className={toggleMenuButtonClasses}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className={toggleMenuClasses} href="#metaverso">
                      Metaverso
                    </a>
                  </li>
                  <li>
                    <a className={toggleMenuClasses} href="#mundos-virtuales">
                      Mundos virtuales
                    </a>
                  </li>
                  <li>
                    <a className={toggleMenuClasses} href="#tecnologias">
                      Nuevas tecnologías
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#footer"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <RedesSociales darkMode={darkMode} />
            <ButtonDarkMode darkMode={darkMode} onClick={handleDarkModeClick} />
          </div>
        </div>
      </nav>
    </header>
  );
}
