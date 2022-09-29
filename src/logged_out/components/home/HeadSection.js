import React, { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MediacionOnline from "../../../images/fondoMediacionOnline.jpg";
import AbogadoVirtual from "../../../images/fondoAbogadoVirtual.jpg";
import ArbitrajeVirtual from "../../../images/fondoArtibrajeVirtual.jpg";
import Nosotros from "../../../images/nosotros.jpg";
import Hidden from '@material-ui/core/Hidden';

const Slider = () => {

    const info = [
        {
            img: Nosotros,
            title: "Centro de Concilacion EX LEGE",
            description: "EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.",
        },
        {
            img: MediacionOnline,
            title: "Mediación Online",
            description: "Es un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
        },
        {
            img: AbogadoVirtual,
            title: "Abogado Virtual",
            description: "Es un servicio de asesoría y defensa legal virtual ante los tribunales de justicia del Perú eficiente, eficaz  y dedicación a sus clientes.",
        },
        {
            img: ArbitrajeVirtual,
            title: "Arbitraje Virtual",
            description: "Es un servicio enfocado en las micro y pequeñas empresas que les permite obtener soluciones vinculantes, rápidas y económicas en conflictos comerciales.",
        }
    ]

    return (
        <Fragment>
            <Hidden smDown>
                <div id="my-carousel-web">
                    <Carousel autoPlay interval={5000} infiniteLoop showIndicators={false} showStatus={false} showThumbs={false}>
                        {
                            info.map((element, index) => (
                                <div key={index}>
                                    <img src={element.img} alt="" />
                                    <div className="overlay">
                                        <h2 className="overlay-title">{element.title}</h2>
                                        <p className="overlay-description">{element.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div id="my-carousel-movil">
                    <Carousel autoPlay interval={5000} infiniteLoop showIndicators={false} showStatus={false} showThumbs={false}>
                        {
                            info.map((element, index) => (
                                <div key={index}>
                                    <img src={element.img} alt="" />
                                    <div className="overlay">
                                        <h2 className="overlay-title">{element.title}</h2>
                                        <p className="overlay-description">{element.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </Hidden>
        </Fragment>


    )
}

export default Slider
