import banner from "../assets/images/banner.jpg";

function Banner() {
  return (
    <img
      src={banner}
      alt="Bannière"
      className="img-fluid w-100"
      style={{ height: "250px", objectFit: "cover" }}
    />
  );
}

export default Banner;