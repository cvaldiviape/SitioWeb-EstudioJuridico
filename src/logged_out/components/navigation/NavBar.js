import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useHistory } from 'react-router';

import AbogadoVirtual from '../../../images/zabogadoVirtual.jpg';
import RedaccionCartasNotariales from '../../../images/zredaccionCartasNotariales.jpg';
import ConciliacionMYPE from '../../../images/zconciliacionMype.jpg';
import ConciliacionResoluciĆ³nContrato from '../../../images/zconciliacionResolucionContrato.jpg';
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
import ConciliacionIndenmizacionDaĆ±osVehiculos from '../../../images/zconciliacionIndenmizacionDanosVehiculos.jpg';
import ConciliacionIndenmizaciĆ³nNegligenciaMedica from '../../../images/zconciliacionIndenmizacionNegligenciaMedica.jpg';
import ConciliacionIndenmizacionAccidenteTransito from '../../../images/zconciliacionIndenmizacionAccidenteTransito.jpg';
import ConciliacionDesalojoOcupantePrecario from '../../../images/zconciliacionDesalojoOcupantePrecario.jpg';
import ConciliacionDesalojoVencimientoContrato from '../../../images/zconciliacionDesalojoVencimientoContrato.jpg';
import ConciliacionContratacionesEstado from '../../../images/zconciliacionContratacionesEstado.jpg';
import ConciliacionLiquidacionesContratacionesEstado from '../../../images/zconciliacionLiquidacionesContratacionesEstado.jpg';
import ConciliacionViciosOcultosContratacionesEstado from '../../../images/zconciliacionViciosOcultosContratacionesEstado.jpg';
import ConciliacionIndenmizacionContratacionesEstado from '../../../images/zconciliacionIndenmizacionContratacionesEstado.jpg';
import ConciliacionPagoDeudasContratacionesEstado from '../../../images/zconciliacionPagoDeudasContratacionesEstado.jpg';
import ConciliacionValorazionesMetrados from '../../../images/zconciliacionValorazionesMetrados.jpg';
import ConciliacionRecepciĆ³nConformidad from '../../../images/zconciliacionRecepcionConformidad.jpg';
import ConciliacionResoluciĆ³nContratosSuministrosServiciosObras from '../../../images/zconciliacionResolucionContratosSuministrosServiciosObras.jpg';
import ConciliacionAmpliaciĆ³nPlazo from '../../../images/zconciliacionAmpliacionPlazo.jpg';
import ConciliacionFueraCentroConciliacion from '../../../images/zconciliacionFueraCentroConciliacion.jpg';
import ConciliacionApoderado from '../../../images/zconciliacionApoderado.jpg';
import ConciliacionHoyMismo from '../../../images/zconciliacionHoyMismo.jpg';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },  
  noDecoration: {
    textDecoration: "none !important",
  },
  logo : { width: 57, cursor:'pointer' },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 32,
    width: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }
  },
  address: {
    // position: 'relative',
    display: 'block',
    paddingBottom: theme.spacing(2.5),
    // whiteSpace: 'nowrap',
    // overOflow: 'hidden',
    // textOverflow: 'ellipsis',
    //width: '100px'
  },
  caja: {
    position: 'float',
    display: 'block',
  },
  menuServices: {
    color: theme.palette.primary.main,
    "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    }
  },
  buttonContact: {
    color: "#FFF !important",
    backgroundColor: theme.palette.primary.main, 
    borderRadius: "20px", 
    padding: "10px 20px",
    "&:hover": {
        background: theme.palette.secondary.main,
        color: '#111E47 !important',
    }
  }
  
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
 
  const history = useHistory();
  const [anchorButtonServices, setAnchorButtonServices] = useState(null);
  const [menuItems, setMenuItems] = useState([
    {
      link: "/mediaciononline",
      name: "MediaciĆ³n Online",
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
      link: "/arbitrajevirtual",
      name: "Arbitraje Virtual",
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
      link: "/abogadovirtual",
      name: "Abogado Virtual",
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
      link: "/mesadepartesvirtual",
      name: "Mesa de Partes Virtual",
      icon: <EmailIcon className="text-white" />
    }
  ]);

  const [menuItemsDrawer, setMenuItemsDrawer] = useState([
    {
        link: "/",
        name: "Inicio",
        icon: <i className="fas fa-home fa-lg" style={{color: "#FFB341"}}></i>
    },
    {
      link: "/mediaciononline",
      name: "MediaciĆ³n Online",
      icon: <i className="fas fa-balance-scale fa-lg" style={{color: "#FFB341"}}></i>
    },
    {
      link: "/arbitrajevirtual",
      name: "Arbitraje Virtual",
      icon: <i className="fas fa-gavel fa-lg" style={{color: "#FFB341"}}></i>
    },
    {
      link: "/abogadovirtual",
      name: "Abogado Virtual",
      icon: <i className="fas fa-layer-group fa-lg" style={{color: "#FFB341"}}></i>
    },
    {
      link: "/mesadepartesvirtual",
      name: "Mesa de Partes Virtual",
      icon: <i className="far fa-envelope fa-lg" style={{color: "#FFB341"}}></i>
    }, 
    { /* TODO: */
        link: "/conciliacionmype",
        name: "ConciliaciĆ³n MYPE",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionempresarial",
        name: "ConciliaciĆ³n Empresarial",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionfamiliar",
        name: "ConciliaciĆ³n Familiar",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliaciondivorcio",
        name: "ConciliaciĆ³n para Divorcio",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionsocial",
        name: "ConciliaciĆ³n Social",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionpersonasnaturales",
        name: "ConciliaciĆ³n para Personas Naturales",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacioncontratacionesestado",
        name: "ConciliaciĆ³n en Contrataciones del Estado",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionfueradelcentroconciliacion",
        name: "ConciliaciĆ³n fuera del Centro de ConciliaciĆ³n",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionapoderdo",
        name: "ConciliaciĆ³n con Apoderado",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliahoymismo",
        name: "Concilia hoy mismo",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
  ]);

  const servicesConciliation = [
    {
        link: "conciliacionmype",
        img: ConciliacionMYPE,
        title: "ConciliaciĆ³n para MYPE",
        descriptionPrimary: "Servicio enfocado en las micro y pequeĆ±as empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionResoluciĆ³nContrato,
                title: "ConciliaciĆ³n de ResoluciĆ³n de Contrato",
                price: "S/. 300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "ConciliaciĆ³n para Cobrar Deudas por PrestaciĆ³n de Servicios",
                price: "S/. 300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "ConciliaciĆ³n para Cobrar Deudas por Venta de Bienes",
                price: "S/. 300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "ConciliaciĆ³n para Cobrar PrĆ©stamos de Dinero",
                price: "S/. 350"
            },

        ]
    },
    {
        link: "conciliacionempresarial",
        img: ConciliacionEmpresa,
        title: "ConciliaciĆ³n Empresarial",
        descriptionPrimary: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vĆ­as no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "ConciliaciĆ³n para Cobrar Deudas por PrestaciĆ³n de Servicios",
                price: "S/. 300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "ConciliaciĆ³n para Cobrar Deudas por Venta de Bienes",
                price: "S/. 300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "ConciliaciĆ³n para Cobrar PrĆ©stamos de Dinero",
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
        title: "ConciliaciĆ³n Familiar",
        descriptionPrimary: "Servicio de conciliaciĆ³n extrajudicial de  conflictos familiares mediante diĆ”logo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionRegimenVisitasConExternamiento,
                title: "ConciliaciĆ³n por RĆ©gimen de Visitas con externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionExoneracionPersionAlimentos,
                title: "ConciliaciĆ³n de Exoneracion de persiĆ³n de alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionGastosEmbarazo,
                title: "ConciliaciĆ³n por Gastos de Embarazo",
                price: "S/.250"
            },
            {
                img: ConciliacionRegimenVisitasSinExternamiento,
                title: "ConciliaciĆ³n de RĆ©gimen de Visias sin externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionTenenciaHijos,
                title: "ConciliaciĆ³n por Tenencia de hijos",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "ConciliaciĆ³n para divorcio",
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
        title: "ConciliaciĆ³n para Divorcio",
        descriptionPrimary: "Servicio dirigido a cĆ³nyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensiĆ³n de alimentos, tenencia y rĆ©gimen de visitas de hijos.",
        descriptionSecondary: "",
        price: "S/.300",
        list: [],
        more: [
            {
                img: ConciliacionTenenciaHijos,
                title: "ConciliaciĆ³n por RĆ©gimen de Visitas con externamiento",
                price: "S/.300"
            },
            {
                img: RedaccionCartasNotariales,
                title: "Redaccion de cartas notariales",
                price: "S/.100"
            },
            {
                img: ConciliacionRegimenVisitasSinExternamiento,
                title: "ConciliaciĆ³n por RĆ©gimen de Visitas sin externamiento",
                price: "S/.300"
            },
            {
                img: AbogadoVirtual,
                title: "Abogado Virtual",
                price: ""
            },
            {
                img: ConciliacionRegimenVisitasConExternamiento,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por Tenencia de hijos",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDaĆ±osVehiculos,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de daĆ±os a vehiculos",
                price: "S/.300"
            },
        ]
    },
    {
        link: "conciliacionsocial",
        img: ConciliacionSocial,
        title: "ConciliaciĆ³n Social",
        descriptionPrimary: "Servicio destinado a personas de escasos recursos econĆ³micos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliaciĆ³n extrajudicial a precios accesibles y de calidad.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionRegimenVisitasConExternamiento,
                title: "ConciliaciĆ³n por RĆ©gimen de Visitas con externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionGastosEmbarazo,
                title: "ConciliaciĆ³n por Gastos de Embarazo",
                price: "S/.250"
            },
            {
                img: ConciliacionRegimenVisitasSinExternamiento,
                title: "ConciliaciĆ³n de RĆ©gimen de Visias sin externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionTenenciaHijos,
                title: "ConciliaciĆ³n por Tenencia de hijos",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizaciĆ³nNegligenciaMedica,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de Negligencia MĆ©dica",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "ConciliaciĆ³n de Desalojo por Falta de Pago",
                price: "S/.300"
            },
        ]
    },
    {
        link: "conciliacionpersonasnaturales",
        img: ConciliacionPersonaNarutal,
        title: "ConciliaciĆ³n para Personas Naturales",
        descriptionPrimary: "Servicio de conciliaciĆ³n extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionDivisionParticionBienes,
                title: "ConciliaciĆ³n de DivisiĆ³n y ParticiĆ³n de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDaĆ±osVehiculos,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de daĆ±os a vehĆ­culos",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizaciĆ³nNegligenciaMedica,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de Negligencia MĆ©dica",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionAccidenteTransito,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de accidente de transito",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "ConciliaciĆ³n para Cobrar Deudas por PrestaciĆ³n de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "ConciliaciĆ³n para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "ConciliaciĆ³n para Cobrar PrĆ©stamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "ConciliaciĆ³n de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "ConciliaciĆ³n de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoVencimientoContrato,
                title: "ConciliaciĆ³n de Desalojo por Vencimiento de contrato",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionGastosEmbarazo,
                title: "ConciliaciĆ³n por Gastos de Embarazo",
                price: "S/.250"
            },
        ]
    },
    {
        link: "conciliacioncontratacionesestado",
        img: ConciliacionContratacionesEstado,
        title: "ConciliaciĆ³n en Contrataciones del Estado",
        descriptionPrimary: "Servicio de conciliaciĆ³n que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionLiquidacionesContratacionesEstado,
                title: "ConciliaciĆ³n de Liquidaciones en Contrataciones del Estado",
                price: "S/.499"
            },
            {
                img: ConciliacionViciosOcultosContratacionesEstado,
                title: "ConciliaciĆ³n de Vicios Ocultos en Contrataciones del Estado",
                price: "S/.499"
            },
            {
                img: ConciliacionIndenmizacionContratacionesEstado,
                title: "ConciliaciĆ³n de IndenmizaciĆ³n en Contrataciones del Estado",
                price: "S/.499"
            },
            {
                img: ConciliacionPagoDeudasContratacionesEstado,
                title: "ConciliaciĆ³n de Pago de Deudas en Contrataciones del Estado",
                price: "S/.300"
            },
            {
                img: ConciliacionValorazionesMetrados,
                title: "ConciliaciĆ³n de Valoraziones y Metrados",
                price: "S/.499"
            },
            {
                img: ConciliacionRecepciĆ³nConformidad,
                title: "ConciliaciĆ³n de RecepciĆ³n y Conformidad",
                price: "S/.300"
            },
            {
                img: ConciliacionResoluciĆ³nContratosSuministrosServiciosObras,
                title: "ConciliaciĆ³n de ResoluciĆ³n de Contratos de Suministros, Servicios y Obras",
                price: "S/.499"
            },
            {
                img: ConciliacionAmpliaciĆ³nPlazo,
                title: "ConciliaciĆ³n de AmpliaciĆ³n del Plazo",
                price: "S/.499"
            }
        ]
    },
    {
        link: "conciliacionfueradelcentroconciliacion",
        img: ConciliacionFueraCentroConciliacion,
        title: "ConciliaciĆ³n fuera del Centro de ConciliaciĆ³n",
        descriptionPrimary: "Servicio de conciliaciĆ³n extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. AdemĆ”s, internamiento en centro de salud, etc.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "ConciliaciĆ³n para Divorcio",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "ConciliaciĆ³n de Desalojo por Falta de Pago",
                price: "S/.300"
            },
        ]
    },
    {
        link: "conciliacionapoderdo",
        img: ConciliacionApoderado,
        title: "ConciliaciĆ³n con Apoderado",
        descriptionPrimary: "Servicio de conciliaciĆ³n extrajudicial que permite participar de un procedimiento conciliatorio a travĆ©s de un apoderado. Del mismo modo, como lo harĆ­a el poderdante.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionDivisionParticionBienes,
                title: "ConciliaciĆ³n de DivisiĆ³n y ParticiĆ³n de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDaĆ±osVehiculos,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de daĆ±os a vehiculos",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizaciĆ³nNegligenciaMedica,
                title: "ConciliaciĆ³n de IndenmizaciĆ³n de Negligencia MĆ©dica",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "ConciliaciĆ³n para Cobrar Deudas por PrestaciĆ³n de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "ConciliaciĆ³n para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "ConciliaciĆ³n para Cobrar PrĆ©stamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "ConciliaciĆ³n de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "ConciliaciĆ³n de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "ConciliaciĆ³n para Divorcio",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoVencimientoContrato,
                title: "ConciliaciĆ³n de Desalojo por Vencimiento de Contrato",
                price: "S/.300"
            },
            {
                img: ConciliacionHoyMismo,
                title: "Concilia hoy mismo",
                price: "S/.300"
            },
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },

        ]
    },
    {
        link: "conciliahoymismo",
        img: ConciliacionHoyMismo,
        title: "Concilia hoy mismo",
        descriptionPrimary: "Servicio de conciliaciĆ³n extrajudicial que posibilita conciliar el mismo dĆ­a que presentas la solicitud de conciliaciĆ³n. En conclusiĆ³n, te liberas del conflicto el mismo dĆ­a.",
        descriptionSecondary: "",
        price: "",
        list: [],
        more: [
            {
                img: ConciliacionPensionAlimentos,
                title: "ConciliaciĆ³n por PensiĆ³n de Alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionRegimenVisitasConExternamiento,
                title: "ConciliaciĆ³n por RĆ©gimen de Visitas con externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionRegimenVisitasSinExternamiento,
                title: "ConciliaciĆ³n de RĆ©gimen de Visias sin externamiento",
                price: "S/.300"
            },
            {
                img: ConciliacionIndenmizacionDaĆ±osVehiculos,
                title: "ConciliaciĆ³n por IndenmizaciĆ³n de daĆ±os a vehiculos",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasPrestacionServicios,
                title: "ConciliaciĆ³n para Cobrar Deudas por PrestaciĆ³n de Servicios",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarDeudasVentaBienes,
                title: "ConciliaciĆ³n para Cobrar Deudas por Venta de Bienes",
                price: "S/.300"
            },
            {
                img: ConciliacionCobrarPrestamosDinero,
                title: "ConciliaciĆ³n para Cobrar PrĆ©stamos de Dinero",
                price: "S/.350"
            },
            {
                img: ConciliacionDesalojoFaltaPago,
                title: "ConciliaciĆ³n de Desalojo por Falta de Pago",
                price: "S/.300"
            },
            {
                img: ConciliacionDesalojoOcupantePrecario,
                title: "ConciliaciĆ³n de Desalojo por Ocupante Precario",
                price: "S/.300"
            },
            {
                img: ConciliacionExoneracionPersionAlimentos,
                title: "ConciliaciĆ³n de ExoneraciĆ³n de pensiĆ³n de alimentos",
                price: "S/.300"
            },
            {
                img: ConciliacionTenenciaHijos,
                title: "ConciliaciĆ³n por Tenencia de hijos",
                price: "S/.300"
            },
            {
                img: ConciliacionDivorcio,
                title: "ConciliaciĆ³n para Divorcio",
                price: "S/.300"
            }
        ]
    },
  ];

  const handleMenuClose = () => {
    setAnchorButtonServices(null);
  }

  const handleOpenMenu = (event) => {
    setAnchorButtonServices(event.currentTarget);    
  }

  const onHome = () => {
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{display: "flex"}}>
              <Button onClick={onHome}>
                <img src='logo.png' alt="Logo" className={classes.logo}/> 
                <Typography variant="h5" color="primary" style={{fontWeight: "bold", marginLeft: "4px"}}>SCMC</Typography>
              </Button>
            
          </div>
                 
          <div className={classes.caja}>

            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
        
            <Hidden smDown>

              <Link
                to="/"
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                <Button
                  color="primary"
                  size="large"
                  classes={{ text: classes.menuButtonText }}
                  value={"example"}
                >
                  Inicio
                </Button>
              </Link>

              {/* ---- MenuButton servicesConciliacion ----*/}
              <Button
                aria-controls="menu"
                onClick={handleOpenMenu}
                disableRipple
                variant="contained"
                style={{color: "#111E47", backgroundColor:"#fff", boxShadow: "none"}}
                size="large"
                endIcon={<KeyboardArrowDownIcon/>}
              >
                Servicios de ConciliaciĆ³n
              </Button>
              <Menu style={{marginTop: "35px", width: "1000px", color: "#111E47"}} id="menu" onClose={handleMenuClose} anchorEl={anchorButtonServices} open={Boolean(anchorButtonServices)}>
                  {
                    servicesConciliation.map((element, index) => (
                        <Link key={index} to={element.link} className={classes.noDecoration} onClick={handleMenuClose}>
                            <MenuItem data-my-value={element.title} className={classes.menuServices}>
                                {element.title}
                            </MenuItem>
                        </Link>
                    ))
                  }
              </Menu>
              {/* ---- ------------------------------- ----*/}

              {
                menuItems.map(element => (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                        {
                            element.name==="Mesa de Partes Virtual" 
                            ?
                            <Button
                              color="primary"
                              size="large"
                              className={classes.buttonContact}
                            >
                              {element.name}
                            </Button>
                            :
                            <Button
                              color="primary"
                              size="large"
                              classes={{ text: classes.menuButtonText }}
                              value={"example"}
                            >
                              {element.name}
                            </Button>
                        }
                    </Link>
               ))
              }
            </Hidden>
          
          </div>
        </Toolbar>
      </AppBar>
      
      <NavigationDrawer
        menuItems={menuItemsDrawer}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
