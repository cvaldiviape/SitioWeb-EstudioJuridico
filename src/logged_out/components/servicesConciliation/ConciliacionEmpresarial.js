import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const ConciliacionEmpresarial = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'conciliacionempresarial'} />
        </Fragment>
    )
}

export default ConciliacionEmpresarial;
