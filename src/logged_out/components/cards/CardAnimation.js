import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function CardAnimation(props) {
    const { link, img, title } = props;

    return (
        <Fragment>
            <div id="cardAnimation" >
                <div className="ui-card">
                    <img src={img} alt="no hay imagen" />
                    <div className="description">
                        <h3>{title}</h3>
                        <Link to={link} style={{ textDecoration: "none" }}>
                            <Button className="mi-link" style={{ color: "#fff" }} size="small">
                                Más información
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}