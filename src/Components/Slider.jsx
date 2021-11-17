import React from 'react'

const Slider = () => {
    return (
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators" >
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <a href="/"><img src="img/aguilaSlider.png" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                
                <div className="carousel-item">
                    <a href="/"><img src="img/aguilaSlider.png" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <a href="/"><img src="img/aguilaSlider.png" className="d-block w-100" alt="..."/></a>
                    <div className="carousel-caption">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

            </div>
            
            <button className="carousel-control-prev" type="button" 
            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="sr-only">Next</span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

        </div>
    </div>
    
    )
}

export default Slider
