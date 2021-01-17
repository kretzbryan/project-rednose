import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner carousel__content">
              <div className="carousel-item active">
                <img src="images/andrea-dillon.jpg" className="d-block w-100 carousel__image" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/david-nguyen-lyra.jpg" className="d-block w-100 carousel__image" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/joey-moore.jpg" className="d-block w-100 carousel__image" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/straps-pic.jpg" className="d-block w-100 carousel__image" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
