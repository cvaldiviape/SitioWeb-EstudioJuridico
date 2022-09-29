import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const ConciliacionPersonasNaturales = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'conciliacionpersonasnaturales'} />
        </Fragment>
    )
}

export default ConciliacionPersonasNaturales;
