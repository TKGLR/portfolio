function Footer() {
  return (
    <footer className="bg-dark text-white py-5">

      <div className="container">
        <div className="row">

          {/* Coordonnées */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">John Doe</h5>

            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>

            <div className="d-flex gap-3 fs-4">
              <i className="bi bi-github"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liens utiles</h5>

            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Mentions légales</li>
            </ul>
          </div>

          {/* Réalisations */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Mes dernières réalisations</h5>

            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d’une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;