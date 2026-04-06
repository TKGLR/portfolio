import heroImage from "../assets/images/hero-bg.jpg";
import aboutImage from "../assets/images/john-doe-about.jpg";
import { useState, useEffect } from "react";

function Home() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  fetch("https://api.github.com/users/github-john-doe")
    .then(response => response.json())
    .then(data => setUser(data));
}, []);
  return (
    <>
      <div
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      ></div>

      {/* Contenu */}
      <div className="d-flex justify-content-center align-items-center h-100 text-white position-relative">
        <div className="text-center" style={{ marginTop: "-50px" }}>
          <h1 className="fw-bold display-3">Bonjour, je suis John Doe</h1>
          <h2 className="fw-bold display-5">Développeur web full stack</h2>
          <button className="btn btn-danger mt-3"
          onClick={() => setShow(true)}
          >
            En savoir plus
          </button>
        </div>
      </div>
      </div>
      <div className="container my-5">
      <div className="row">
        
        {/* A propos */}
        <div className="col-md-6">
          <h3>A propos</h3>
          <img 
            src={aboutImage}
            alt="John Doe"
            className="img-fluid mb-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Compétences */}
        <div className="col-md-6">
          <h3>Mes compétences</h3>

          <p>HTML 90%</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
          </div>

          <p>CSS 80%</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
          </div>

          <p>JavaScript 70%</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
          </div>

          <p>PHP 60%</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
          </div>

          <p>React 50%</p>
          <div className="progress mb-3">
            <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
          </div>

        </div>

      </div>
      </div>
      
      {show && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Profil GitHub</h5>
                <button onClick={() => setShow(false)} className="btn-close"></button>
              </div>

      {user ? (
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-5 text-center">
            <img 
              src={user.avatar_url} 
              alt="avatar" 
              className="img-fluid rounded-circle"
            />
          </div>

          {/* Infos */}
          <div className="col-md-7">

            <p><strong>{user.name}</strong></p>

            <hr />

            <p>{user.bio}</p>

            <hr />

            <p>Repositories : {user.public_repos}</p>
            <p>Followers : {user.followers}</p>
            <p>Following : {user.following}</p>

            </div>

          </div>
      ) 
              : 
              (
                <p>Chargement...</p>
              )
      }

              <div className="modal-footer">
                <button onClick={() => setShow(false)} className="btn btn-secondary">
                  Fermer
                </button>
              </div>

            </div>
          </div>
        </div>
)}
    </>
  );
}



export default Home;