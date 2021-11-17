import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import NavBar from '../Components/Navbar'

const Inicio = () => {
    return (
        <div >
            <NavBar/>
            <Header/>

            <h1 className="site-heading text-center text-white d-none d-md-block mt-5"> 
                <span className="site-heading-upper text-primary mb-3">Quienes Somos</span>
            </h1>

            <section className="page-section clearfix row">
                <div className="col-6 container">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/ardillaSlider.png" alt="vision"/>
                </div>
                <div className="col-6 intro-text2 right-0 text-center bg-faded p-5 rounded">
                    <h2 className="section-heading mb-1">
                        <span className="section-heading-lower">misión</span>
                    </h2>
                    <p className="mb-3 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum animi placeat fugit labore fugiat blanditiis, dicta vero sapiente praesentium at illum quia modi porro quod doloribus nisi cumque dolor.
                    </p>
                </div>
            </section>

            <section className="page-section clearfix row">
                <div className="col-6 intro-text2 right-0 text-center bg-faded p-5 rounded">
                    <h2 className="section-heading mb-1">
                        <span className="section-heading-lower">visión</span>
                    </h2>
                    <p className="mb-3 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum animi placeat fugit labore fugiat blanditiis, dicta vero sapiente praesentium at illum quia modi porro quod doloribus nisi cumque dolor.
                    </p>
                </div>
                <div className="col-6 container">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/aguilaSlider.png" alt="vision"/>
                </div>
            </section>

            <section className="page-section clearfix row">
                <div className="col-6 container">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/camaleonSlider.png" alt="vision"/>
                </div>
                <div className="col-6 intro-text2 right-0 text-center bg-faded p-5 rounded">
                    <h2 className="section-heading mb-1">
                        <span className="section-heading-lower">valores</span>
                    </h2>
                    <p className="mb-3 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum animi placeat fugit labore fugiat blanditiis, dicta vero sapiente praesentium at illum quia modi porro quod doloribus nisi cumque dolor.
                    </p>
                </div>
            </section>


            <Footer/>

        </div>
    )
}

export default Inicio
