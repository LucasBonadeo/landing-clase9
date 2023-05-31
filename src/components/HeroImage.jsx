import EdificiosImage from "../img/future-3d-2.png";

export function HeroImage() {
  return (
    <div className="contenedor-hero-image">
      <div className="contenedor-opacidad">
        <h1 className="display-3 text-center">
          <strong>EVENTO VIRBELA METAVERSO 2023</strong>
        </h1>
        <h2 className="display-5 text-center">El Metaverso ya está aquí.</h2>
        <a href="register.html" className="rotate-360">
          ¡Quiero ir!
        </a>
      </div>
      <img src={EdificiosImage} alt="" />
    </div>
  );
}
