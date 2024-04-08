import "./style/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DataForCarousel from "../data/data";
function CatalogCarousel() {
  let catalog: {
    id: number;
    name: string;
    titleImage: string;
    genre: string;
    ageRestriction: string;
    image: string;
    discription: string;
  }[] = DataForCarousel();

  return (
    <>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {catalog.map((item) => (
          <div className="carousel-container">
            <img src={item.image} />
            <img
              className="logo-left-top"
              src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
            />
            <div className="info-container">
              <img className="title-image" src={item.titleImage} />
              <p className="genre-info">
                {item.genre}
                <span className="age-restriction">{item.ageRestriction}</span>
              </p>
              <p className="product-discription">{item.discription}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
export default CatalogCarousel;
