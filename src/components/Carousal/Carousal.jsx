import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/carousal/img1.jpg";
import banner2 from "../../assets/carousal/img2.jpg";
import banner3 from "../../assets/carousal/img3.jpg";
import banner4 from "../../assets/carousal/img4.jpg";
import banner5 from "../../assets/carousal/img5.png";
import "../Carousal/Carousal.scss";

export function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark" className="slider">
      <Carousel.Item className="sliderItem">
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="sliderItem">
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="sliderItem">
        <img className="d-block w-100" src={banner3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="sliderItem">
        <img className="d-block w-100" src={banner4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="sliderItem">
        <img className="d-block w-100" src={banner5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
