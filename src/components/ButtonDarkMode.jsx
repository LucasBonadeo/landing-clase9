import MoonBlack from "../img/iconos/moon-solid-black-24.png";
import SunWhite from "../img/iconos/sun-solid-white-24.png";

export function ButtonDarkMode(props) {
  const { onClick, darkMode } = props;
  const icono = props.darkMode ? SunWhite : MoonBlack;

  return (
    <button className="btn" onClick={onClick}>
      <img src={icono} className="imagenNav" id="img-modo-oscuro" />
    </button>
  );
}
