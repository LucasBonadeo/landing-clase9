import LogoFacebookBlack from "../img/iconos/facebook-circle-logo-black-24.png";
import LogoFacebookWhite from "../img/iconos/facebook-circle-logo-white-24.png";
import LogoInstaBlack from "../img/iconos/instagram-logo-black-24.png";
import LogoInstaWhite from "../img/iconos/instagram-logo-white-24.png";
import LogoTwitterBlack from "../img/iconos/twitter-logo-black-24.png";
import LogoTwitterWhite from "../img/iconos/twitter-logo-white-24.png";

export function RedesSociales(props) {
  const iconoFacebook = props.darkMode ? LogoFacebookWhite : LogoFacebookBlack;
  const iconoInstagram = props.darkMode ? LogoInstaWhite : LogoInstaBlack;
  const iconoTwitter = props.darkMode ? LogoTwitterWhite : LogoTwitterBlack;

  return (
    <div className="contenedor-redes">
      <a
        href="https://www.instagram.com/virbelahq/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconoInstagram} alt="" />
      </a>
      <a href="https://twitter.com/VirbelaHQ" target="_blank" rel="noreferrer">
        <img src={iconoTwitter} alt="" />
      </a>
      <a
        href="https://www.facebook.com/Virbela/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconoFacebook} alt="" />
      </a>
    </div>
  );
}
