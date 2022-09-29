import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const ConciliacionDivorcio = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'conciliaciondivorcio'} />
        </Fragment>
    )
}

export default ConciliacionDivorcio;
