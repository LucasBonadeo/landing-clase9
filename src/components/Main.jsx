import VideoCampus from "../img/videos/video-multiverso.mp4";
import ImagenFortnite from "../img/fortnite1.png";
import ImagenMinecraft from "../img/minecraft-header.jpg";
import ImagenTecnoVr from "../img/tecno-vr.jpg";
import ImagenExperienciaRealidadVirtual from "../img/experiencias-realidad-virtual-evadirte.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main id="main-principal">
      <section id="metaverso">
        <div className="row align-items-center">
          <div className="container-fluid col-md-10 col-lg-5">
            <article data-aos="fade-right">
              <h2>METAVERSO</h2>
              <p className="fs-4">
                En muchos sentidos, el Metaverso ya está aquí. Pero, ¿Qué es el
                Metaverso? ¿Qué papel jugará en el futuro del trabajo?
              </p>
            </article>
          </div>
          <div className="container-fluid col-md-10 col-lg-5">
            <video data-aos="fade-left" autoplay muted loop>
              <source src={VideoCampus} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section id="mundos-virtuales">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-4 col-xl-4">
            <img
              data-aos="fade-right"
              className="img-fluid"
              src={ImagenFortnite}
              alt=""
            />
          </div>
          <div className="container-fluid col-md-12 col-lg-4 col-xl-4">
            <article
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2>EL METAVERSO Y LOS MUNDOS VIRTUALES</h2>
              <p className="fs-4">
                Los mundos virtuales como Roblox, Minecraft y Fortnite tienen
                miles de millones de usuarios y economías que rivalizan con
                países pequeños. ¿Por qué el Metaverso y los mundos virtuales se
                han convertido en un tema más relevante hoy que nunca?
              </p>
            </article>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4">
            <img
              data-aos="fade-left"
              src={ImagenMinecraft}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      <section id="tecnologias">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-4 col-xl-4">
            <img
              data-aos="fade-left"
              className="img-fluid"
              src={ImagenExperienciaRealidadVirtual}
              alt=""
            />
          </div>
          <div className="container-fluid col-md-12 col-lg-4 col-xl-4">
            <article
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2>NUEVAS TECNOLOGÍAS</h2>
              <p className="fs-4">
                ¿Cuáles son los avances tecnológicos que aún se necesitan para
                fomentar la adopción masiva?
              </p>
            </article>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4">
            <img
              data-aos="fade-right"
              className="img-fluid"
              src={ImagenTecnoVr}
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
