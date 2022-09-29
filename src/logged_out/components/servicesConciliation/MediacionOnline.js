import React, { Fragment, useEffect } from 'react';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import ServicesContent from './ServicesContent';

const MediacionOnline = () => {
  
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <Fragment>
            <ServicesContent value={'mediaciononline'} />
        </Fragment>
    )
}

export default MediacionOnline;
