import Banner from "../components/Banner";   
import projet1 from "../assets/images/fresh-food.jpg";
import projet2 from "../assets/images/restaurant-japonais.jpg";
import projet3 from "../assets/images/espace-bien-etre.jpg";
import projet4 from "../assets/images/seo.jpg";
import projet5 from "../assets/images/coder.jpg";
import projet6 from "../assets/images/screens.jpg";

function Portfolio() {
  return (
  <>
    <Banner />

    <div className="container my-5">

      <div className="text-center mb-5">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>

        <div
          className="mx-auto bg-primary mb-5"
          style={{ width: "200px", height: "4px" }}
        ></div>
      </div>

      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet1}
            className="card-img-top"
            alt="Fresh Food"
          />

            <div className="card-body">
              <h5 className="card-title">Fresh Food</h5>
              <p className="card-text">
                Site de vente de produits frais en ligne
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              Site réalisé avec PHP et MySQL
            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet2}
            className="card-img-top"
            alt="Sushi"
          />

            <div className="card-body">
              <h5 className="card-title">Restaurant Akira</h5>
              <p className="card-text">
                Site de vente de produits frais en ligne
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              Site réalisé avec WordPress
            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet3}
            className="card-img-top"
            alt="Espace bien etre"
          />

            <div className="card-body">
              <h5 className="card-title">Espace bien-être</h5>
              <p className="card-text">
                Site de vente de produits en ligne
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              Site réalisé avec LARAVEL
            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet4}
            className="card-img-top"
            alt="Seo"
          />

            <div className="card-body">
              <h5 className="card-title">SEO</h5>
              <p className="card-text">
                Amélioration du référencement d'un site e-commerce
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              Utilisation des outils SEO
            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet5}
            className="card-img-top"
            alt="Code"
          />

            <div className="card-body">
              <h5 className="card-title">Création d'une API</h5>
              <p className="card-text">
                Création d'une API RESTFULL publique
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              PHP - SYMFONY
            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-center">
          <img
            src={projet6}
            className="card-img-top"
            alt="Ordinateur"
          />

            <div className="card-body">
              <h5 className="card-title">Maquette d'un site web</h5>
              <p className="card-text">
                Création du prototype d'un site
              </p>

              <button className="btn btn-primary">
                Voir le site
              </button>
            </div>

            <div className="card-footer text-center">
              Réalisé avec FIGMA
            </div>

          </div>
        </div>

      </div>

    </div>
  </>
  );
}

export default Portfolio;