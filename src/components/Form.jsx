export function Form() {
  return (
    <div className="contenedor-hero-image-form" id="form">
      <div className="contenedor-opacidad">
        <section className="form">
          <h1 className="display-6 text-center">REGISTRO PARA EL EVENTO</h1>
          <form
            action="mailto:jesusnicolas.rios@unahur.edu.ar,gabriel.molina@unahur.edu.ar"
            method="post"
            encType="text/plain"
          >
            <div className="form-item">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-item">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Ingrese su apellido"
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="form-item">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <div className="form-btn-item">
              <button type="submit" className="btn">
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
