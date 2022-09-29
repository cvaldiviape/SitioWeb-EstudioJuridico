import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const ConciliacionFueraCentroConciliacion = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'conciliacionfueradelcentroconciliacion'} />
        </Fragment>
    )
}

export default ConciliacionFueraCentroConciliacion;
