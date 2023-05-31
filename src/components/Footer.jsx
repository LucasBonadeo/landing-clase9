import { RedesSociales } from "./RedesSociales";

export function Footer() {
  return (
    <footer id="footer" className="container-fluid">
      <div className="row align-items-center justify-content-evenly">
        <div className="contenedor-home rotate-360 d-inline-block col-12 text-center">
          <a href="index.html" className="home rotate-360">
            Home
          </a>
        </div>
        <div className="container row align-items-center justify-content-evenly">
          <div className="contenedor-contacto col-md-10 col-lg-5 align-items-center justify-content-center">
            <h4>Teléfono</h4>
            <a href="tel:+1 (844) 714-4210">1 (844) 714-4210</a>
            <h4>Email</h4>
            <a href="mailto:media@virbela.com">media@virbela.com</a>
            <h4>Redes Sociales</h4>
            <RedesSociales darkMode={true} />
          </div>
          <div className="contenedor-iframe col-md-10 col-lg-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5615.188205749211!2d-122.46323254638543!3d48.744638001376124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485962ef2458717%3A0xd57a9ca9cd39e0f0!2sBellingham%2C%20Washington%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1683842665582!5m2!1ses!2sar"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
