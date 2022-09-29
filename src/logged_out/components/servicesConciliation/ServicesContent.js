import React, { Fragment, useEffect } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactDetailService from '../contact/ContactDetailService';
import CardListCustom from '../cards/CardListCustom';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

import AbogadoVirtual from '../../../images/zabogadoVirtual.jpg';
import ArbitrajeVirtual from '../../../images/zarbitrajeVirtual.jpg';
import MediacionOnline from '../../../images/zmediacionOnline.jpg';
import RedaccionCartasNotariales from '../../../images/zredaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/zconciliacionMype.jpg';
import ConciliacionResoluciónContrato from '../../../images/zconciliacionResolucionContrato.jpg';
import ConciliacionCobrarDeudasPrestacionServicios from '../../../images/zconciliacionCobrarDeudasPrestacionServicios.jpg';
import ConciliacionCobrarDeudasVentaBienes from '../../../images/zconciliacionCobrarDeudasVentaBienes.jpg';
import ConciliacionCobrarPrestamosDinero from '../../../images/zconciliacionCobrarPrestamosDinero.jpg';
import ConciliacionDesalojoFaltaPago from '../../../images/zconciliacionDesalojoFaltaPago.jpg';
import ConciliacionEmpresa from '../../../images/zconciliacionEmpresa.jpg';
import ConciliacionFamiliar from '../../../images/zconciliacionFamiliar.jpg';
import ConciliacionPensionAlimentos from '../../../images/zconciliacionPensionAlimentos.jpg';
import ConciliacionRegimenVisitasConExternamiento from '../../../images/zconciliacionRegimenVisitasConExternamiento.jpg';
import ConciliacionExoneracionPersionAlimentos from '../../../images/zconciliacionExoneracionPersionAlimentos.jpg';
import ConciliacionGastosEmbarazo from '../../../images/zconciliacionGastosEmbarazo.jpg';
import ConciliacionRegimenVisitasSinExternamiento from '../../../images/zconciliacionRegimenVisitasSinExternamiento.jpg';
import ConciliacionTenenciaHijos from '../../../images/zconciliacionTenenciaHijos.jpg';
import ConciliacionDivorcio from '../../../images/zconciliacionDivorcio.jpg';
import ConciliacionSocial from '../../../images/zconciliacionSocial.jpg';
import ConciliacionPersonaNarutal from '../../../images/zconciliacionPersonaNarutal.jpg';
import ConciliacionDivisionParticionBienes from '../../../images/zconciliacionDivisionParticionBienes.jpg';
import ConciliacionIndenmizacionDañosVehiculos from '../../../images/zconciliacionIndenmizacionDanosVehiculos.jpg';
import ConciliacionIndenmizaciónNegligenciaMedica from '../../../images/zconciliacionIndenmizacionNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../../images/zconciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../../images/zconciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../../images/zconciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionesEstado from '../../../images/zconciliacionContratacionesEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../../images/zconciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../../images/zconciliacionViciosOcultosContratacionesEstado.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../../images/zconciliacionIndenmizacionContratacionesEstado.jpg';
import ConciliacionPagoDeudasContratacionesEstado from '../../../images/zconciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../../images/zconciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciónConformidad from '../../../images/zconciliacionRecepcionConformidad.jpg';
import ConciliacionResoluciónContratosSuministrosServiciosObras from '../../../images/zconciliacionResolucionContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciónPlazo from '../../../images/zconciliacionAmpliacionPlazo.jpg';
import ConciliacionFueraCentroConciliacion from '../../../images/zconciliacionFueraCentroConciliacion.jpg';
import ConciliacionApoderado from '../../../images/zconciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../../images/zconciliacionHoyMismo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary.main,
        marginTop: "30px"
    },
    title: {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textAlign: "center"
    },
    subtitle: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
}));

const ServicesInfoNavbar = (props) => {
    const classes = useStyles();
    const { value } = props;
    const services = [
        {
            link: "conciliacionmype",
            img: ConciliacionMYPE,
            title: "Conciliación para MYPE",
            descriptionPrimary: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionResoluciónContrato,
                    title: "Conciliación de Resolución de Contrato",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/. 350"
                },

            ]
        },
        {
            link: "conciliacionempresarial",
            img: ConciliacionEmpresa,
            title: "Conciliación Empresarial",
            descriptionPrimary: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/. 300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/. 350"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliacion de Desalojo por Falta de Pago",
                    price: "S/. 300"
                },
            ]
        },
        {
            link: "conciliacionfamiliar",
            img: ConciliacionFamiliar,
            title: "Conciliación Familiar",
            descriptionPrimary: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionExoneracionPersionAlimentos,
                    title: "Conciliación de Exoneracion de persión de alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/.250"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para divorcio",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                }
            ]
        },
        {
            link: "conciliaciondivorcio",
            img: ConciliacionDivorcio,
            title: "Conciliación para Divorcio",
            descriptionPrimary: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
            descriptionSecondary: "",
            price: "S/.300",
            list: [],
            more: [
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: RedaccionCartasNotariales,
                    title: "Redaccion de cartas notariales",
                    price: "S/.100"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación por Régimen de Visitas sin externamiento",
                    price: "S/.300"
                },
                {
                    img: AbogadoVirtual,
                    title: "Abogado Virtual",
                    price: ""
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/.300"
                },
            ]
        },
        {
            link: "conciliacionsocial",
            img: ConciliacionSocial,
            title: "Conciliación Social",
            descriptionPrimary: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/.250"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
            ]
        },
        {
            link: "conciliacionpersonasnaturales",
            img: ConciliacionPersonaNarutal,
            title: "Conciliación para Personas Naturales",
            descriptionPrimary: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionDivisionParticionBienes,
                    title: "Conciliación de División y Partición de Bienes",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehículos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionAccidenteTransito,
                    title: "Conciliación por Indenmización de accidente de transito",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/.350"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoVencimientoContrato,
                    title: "Conciliación de Desalojo por Vencimiento de contrato",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/.250"
                },
            ]
        },
        {
            link: "conciliacioncontratacionesestado",
            img: ConciliacionContratacionesEstado,
            title: "Conciliación en Contrataciones del Estado",
            descriptionPrimary: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionLiquidacionesContratacionesEstado,
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionViciosOcultosContratacionesEstado,
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionIndenmizacionContratacionesEstado,
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionPagoDeudasContratacionesEstado,
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "S/.300"
                },
                {
                    img: ConciliacionValorazionesMetrados,
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "S/.499"
                },
                {
                    img: ConciliacionRecepciónConformidad,
                    title: "Conciliación de Recepción y Conformidad",
                    price: "S/.300"
                },
                {
                    img: ConciliacionResoluciónContratosSuministrosServiciosObras,
                    title: "Conciliación de Resolución de Contratos de Suministros, Servicios y Obras",
                    price: "S/.499"
                },
                {
                    img: ConciliacionAmpliaciónPlazo,
                    title: "Conciliación de Ampliación del Plazo",
                    price: "S/.499"
                }
            ]
        },
        {
            link: "conciliacionfueradelcentroconciliacion",
            img: ConciliacionFueraCentroConciliacion,
            title: "Conciliación fuera del Centro de Conciliación",
            descriptionPrimary: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
            ]
        },
        {
            link: "conciliacionapoderdo",
            img: ConciliacionApoderado,
            title: "Conciliación con Apoderado",
            descriptionPrimary: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionDivisionParticionBienes,
                    title: "Conciliación de División y Partición de Bienes",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación de Indenmización de Negligencia Médica",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/.350"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoVencimientoContrato,
                    title: "Conciliación de Desalojo por Vencimiento de Contrato",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },

            ]
        },
        {
            link: "conciliahoymismo",
            img: ConciliacionHoyMismo,
            title: "Concilia hoy mismo",
            descriptionPrimary: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
            descriptionSecondary: "",
            price: "",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasPrestacionServicios,
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarDeudasVentaBienes,
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "S/.300"
                },
                {
                    img: ConciliacionCobrarPrestamosDinero,
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "S/.350"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoOcupantePrecario,
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "S/.300"
                },
                {
                    img: ConciliacionExoneracionPersionAlimentos,
                    title: "Conciliación de Exoneración de pensión de alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDivorcio,
                    title: "Conciliación para Divorcio",
                    price: "S/.300"
                }
            ]
        },
        {
            link: "mediaciononline",
            img: MediacionOnline,
            title: "Mediación Online",
            descriptionPrimary: "Es un servicio para resolver conflictos en linea, por el que dos o mas personas con la ayuda de un mediador utilizan medios electrónicos para alcanzar acuerdos mutuamente satisfactorios, evitando contagios por la pandemia de la Covid -19 o por imposibilidad de viajar, etc",
            descriptionSecondary: "Materias que se pueden mediar:",
            price: "S/.350",
            list: [
                "Desalojo.",
                "Cobro de deudas.",
                "Indemnización.",
                "Otros derechos disponibles."
            ],
            more: [
                {
                    img: ConciliacionLiquidacionesContratacionesEstado,
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionViciosOcultosContratacionesEstado,
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionIndenmizacionContratacionesEstado,
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionPagoDeudasContratacionesEstado,
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "S/.499"
                },
                {
                    img: ConciliacionValorazionesMetrados,
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "S/.499"
                },
                {
                    img: ConciliacionRecepciónConformidad,
                    title: "Conciliación de Recepción y Conformidad",
                    price: "S/.300"
                },
                {
                    img: ConciliacionResoluciónContratosSuministrosServiciosObras,
                    title: "Conciliación de Resolución de Contratos de Suministros, Servicios y Obras",
                    price: "S/.300"
                },
                {
                    img: ConciliacionAmpliaciónPlazo,
                    title: "Conciliación de Ampliación del Plazo",
                    price: "S/.499"
                }
            ]
        },
        {
            link: "arbitrajevirtual",
            img: ArbitrajeVirtual,
            title: 'Arbitraje Virtual',
            descriptionPrimary: "Es un servicio enfocado en las micro y pequeñas empresas que les permite obtener soluciones vinculantes, rápidas y económicas en conflictos comerciales.",
            descriptionSecondary: "",
            price: "S/.5 500",
            list: [],
            more: [
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionGastosEmbarazo,
                    title: "Conciliación por Gastos de Embarazo",
                    price: "S/. 250"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "S/.300"
                },
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizaciónNegligenciaMedica,
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "S/.300"
                },
                {
                    img: ConciliacionDesalojoFaltaPago,
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "S/.300"
                },
            ]
        },
        {
            link: "abogadovirtual",
            img: AbogadoVirtual,
            title: 'Abogado Virtual',
            descriptionPrimary: "Es un servicio de asesoría y defensa legal virtual ante los tribunales de justicia del Perú eficiente, eficaz  y dedicación a sus clientes.",
            descriptionSecondary: "Cubrimos las siguientes áreas:",
            price: "",
            list: [
                "Área de derecho de familia.",
                "Área de derecho civil.",
                "Área de derecho arbitral.",
                "Área derecho internacional.",
                "Área derecha inversión finanzas empresarial.",
                "Área derecho penal.",
                "Área derecho laboral.",
                "Área previsional.",
                "Área contrataciones del Estado.",
            ],
            more: [
                {
                    img: ConciliacionTenenciaHijos,
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "S/.300"
                },
                {
                    img: RedaccionCartasNotariales,
                    title: "Redaccion de cartas notariales",
                    price: "S/. 100"
                },
                {
                    img: ConciliacionRegimenVisitasSinExternamiento,
                    title: "Conciliación por Régimen de Visitas sin externamiento",
                    price: "S/.300"
                },
                {
                    img: AbogadoVirtual,
                    title: "Abogado Virtual",
                    price: ""
                },
                {
                    img: ConciliacionRegimenVisitasConExternamiento,
                    title: "Conciliación por Pensión de Alimentos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionPensionAlimentos,
                    title: "Conciliación por Tenencia de hijos",
                    price: "S/.300"
                },
                {
                    img: ConciliacionHoyMismo,
                    title: "Concilia hoy mismo",
                    price: "S/.300"
                },
                {
                    img: ConciliacionIndenmizacionDañosVehiculos,
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "S/.300"
                },
            ]
        },
    ];

    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <br />
            <br />
            <br />
            {
                services.map((element, index) => {
                    if (element.link === value) {
                        return (<ContactDetailService
                            title={element.title}
                            subtitle={element.subtitle}
                            descriptionPrimary={element.descriptionPrimary}
                            descriptionSecondary={element.descriptionSecondary}
                            price={element.price}
                            list={element.list}
                            img={element.img}
                            key={index}
                        />)
                    }
                })
            }
            <br/>
            {
                services.map((element, index) => {
                    if (element.link === value) {
                        if (element.link === "mediaciononline" || element.link === "abogadovirtual" || element.link === "arbitrajevirtual") {
                            return (<Typography key={index} variant="h3" color="primary" className={classes.title}>Aquí te recomendamos más Servicios de Conciliación relacionados</Typography>)
                        }else{
                            return (<div key={index}>
                                <Typography variant="h3" color="primary" className={classes.title}>Aquí te mostramos los servicios en relación a</Typography>
                                <Typography variant="h3" color="primary" className={classes.title}>"{element.title}"</Typography>
                            </div>)
                        }
                    }
                })
            }

            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.subtitle}>
                Puedes comunicarte con nosotros directamente mediante nuestro <span style={{ color: "#FFB341" }}>WhatsApp</span>, donde podrás realizar cualquier consulta y asi resolver cada una de tus dudas
            </Typography>

            {
                services.map((element, index) => {
                    if (element.link === value) {
                        return (<CardListCustom data={element.more} key={index} />)
                    }
                })
            }
            <br />
        </Fragment>
    )
}

export default ServicesInfoNavbar;
