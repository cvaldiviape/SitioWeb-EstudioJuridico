import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import Contact from '../contact/Contact';

const MesaPartesVirtual = () => {

    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <br />
            <br />
            <br />
            <Contact />
        </Fragment>
    )
}

export default MesaPartesVirtual;
