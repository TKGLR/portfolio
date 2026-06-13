import Banner from "../components/Banner";

function Contact() {
  return (
    <>
      <Banner />

      <div className="container my-5">

        <div className="text-center mb-5">
          <h1>Contact</h1>

          <p>
            Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact.
          </p>

          <div
            className="mx-auto bg-primary"
            style={{ width: "250px", height: "4px" }}
          ></div>
        </div>

        <div className="row g-4">

          {/* Formulaire */}
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">

              <h3>Formulaire de contact</h3>

              <hr />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Votre nom"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Votre adresse email"
              />

              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Votre numéro de téléphone"
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Sujet"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Votre message"
              ></textarea>

              <button className="btn btn-primary">
                Envoyer
              </button>

            </div>
          </div>

          {/* Coordonnées */}
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">

              <h3>Mes coordonnées</h3>

              <hr />

              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>

              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Lyon&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;