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
      name: "Mediación Online",
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
      name: "Mediación Online",
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
        name: "Conciliación MYPE",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionempresarial",
        name: "Conciliación Empresarial",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionfamiliar",
        name: "Conciliación Familiar",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliaciondivorcio",
        name: "Conciliación para Divorcio",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionsocial",
        name: "Conciliación Social",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionpersonasnaturales",
        name: "Conciliación para Personas Naturales",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacioncontratacionesestado",
        name: "Conciliación en Contrataciones del Estado",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionfueradelcentroconciliacion",
        name: "Conciliación fuera del Centro de Conciliación",
        icon: <i className="fas fa-handshake fa-lg" style={{color: "#FFB341"}}></i>
      },
      {
        link: "/conciliacionapoderdo",
        name: "Conciliación con Apoderado",
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
                Servicios de Conciliación
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
