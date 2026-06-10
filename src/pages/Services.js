import Banner from "../components/Banner";   

function Services() {
  return (
  <>

    <Banner />

    <div className="container my-5">

      <div className="text-center mb-5">
        <h1>Mon offre de services</h1>

        <p>
          Voici les prestations que je propose.
        </p>

        <div
          className="mx-auto bg-primary"
          style={{
            width: "250px",
            height: "4px"
          }}
        ></div>
      </div>

      <div className="row">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center p-5">

            <i className="bi bi-palette-fill fs-1 text-primary mb-3"></i>

            <h3>UX Design</h3>
            <p>
              Création d'interfaces modernes et ergonomiques.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center p-5">

            <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>

            <h3>Développement Web</h3>
            <p>
              Réalisation de sites web modernes et responsives.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center p-5">

            <i className="bi bi-search fs-1 text-primary mb-3"></i>

            <h3>Référencement</h3>
            <p>
              Optimisation SEO pour améliorer votre visibilité.
            </p>
          </div>
        </div>

      </div>

    </div>

  </>
  );
}

export default Services;