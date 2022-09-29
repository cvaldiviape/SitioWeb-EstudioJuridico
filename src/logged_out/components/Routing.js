import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import MediacionOnline from "./servicesConciliation/MediacionOnline";
import AbogadoVirtual from "./servicesConciliation/AbogadoVirtual";
import ArbitrajeVirtual from "./servicesConciliation/ArbitrajeVirtual";
import MesaPartesVirtual from "./servicesConciliation/MesaPartesVirtual";

import ConciliacionApoderado from "./servicesConciliation/ConciliacionApoderado";
import ConciliacionContratacionesEstado from "./servicesConciliation/ConciliacionContratacionesEstado";
import ConciliacionDivorcio from "./servicesConciliation/ConciliacionDivorcio";
import ConciliacionEmpresarial from "./servicesConciliation/ConciliacionEmpresarial";
import ConciliacionFamiliar from "./servicesConciliation/ConciliacionFamiliar";
import ConciliacionFueraCentroConciliacion from "./servicesConciliation/ConciliacionFueraCentroConciliacion";
import ConciliacionHoyMismo from "./servicesConciliation/ConciliacionHoyMismo";
import ConciliacionMYPE from "./servicesConciliation/ConciliacionMYPE";
import ConciliacionPersonasNaturales from "./servicesConciliation/ConciliacionPersonasNaturales";
import ConciliacionSocial from "./servicesConciliation/ConciliacionSocial";

function Routing(props) {
  const { selectHome } = props;

  return (
    <Switch>
      <PropsRoute
        exact
        path="/"
        component={Home}
        selectHome={selectHome}
      />
      <PropsRoute
        exact
        path="/mediaciononline"
        component={MediacionOnline}
      />
     <PropsRoute
        exact
        path="/abogadovirtual"
        component={AbogadoVirtual}
      />
      <PropsRoute
        exact
        path="/arbitrajevirtual"
        component={ArbitrajeVirtual}
      />
      <PropsRoute
        exact
        path="/mesadepartesvirtual"
        component={MesaPartesVirtual}
      />
      <PropsRoute /* TODO: */
        exact
        path="/conciliacionmype"
        component={ConciliacionMYPE}
      />
      <PropsRoute
        exact
        path="/conciliacionempresarial"
        component={ConciliacionEmpresarial}
      />
      <PropsRoute
        exact
        path="/conciliacionfamiliar"
        component={ConciliacionFamiliar}
      />
      <PropsRoute
        exact
        path="/conciliaciondivorcio"
        component={ConciliacionDivorcio}
      />
      <PropsRoute
        exact
        path="/conciliacionsocial"
        component={ConciliacionSocial}
      />
      <PropsRoute
        exact
        path="/conciliacionpersonasnaturales"
        component={ConciliacionPersonasNaturales}
      />
      <PropsRoute
        exact
        path="/conciliacioncontratacionesestado"
        component={ConciliacionContratacionesEstado}
      />
      <PropsRoute
        exact
        path="/conciliacionfueradelcentroconciliacion"
        component={ConciliacionFueraCentroConciliacion}
      />
      <PropsRoute
        exact
        path="/conciliacionapoderdo"
        component={ConciliacionApoderado}
      />
      <PropsRoute
        exact
        path="/conciliahoymismo"
        component={ConciliacionHoyMismo}
      />
     

      )
      <PropsRoute path="/" component={Home} selectHome={selectHome} />)

    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectCompany: PropTypes.func.isRequired
};

export default Routing;
