import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel.css"


const Carrusel = () => {
    return (
        <div className="container-fluid">
            <Carousel >
        <Carousel.Item>
          <img className='img' src="src/assets/ImagenCarrusel/carrusel1.jpg" text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='img' src='src/assets/ImagenCarrusel/carrusel2.jpg' text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='img' src='src/assets/ImagenCarrusel/carrusel3.jpg' text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Carrusel;

