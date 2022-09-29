import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const ConciliacionFamiliar = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'conciliacionfamiliar'} />
        </Fragment>
    )
}

export default ConciliacionFamiliar;
