import React, { Fragment, useEffect } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import ContactDetailService from '../contact/ContactDetailService';
import CardListCustom from '../cards/CardListCustom';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary.main,
        marginTop: "30px"
    },
    title: {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textAlign: "center"
    },
    subtitle: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
}));

const ServicesInfo = () => {
    const history = useHistory();
    const classes = useStyles();
 
    useEffect(() => {
        smoothScrollTop();
    }, []);
    
    return (
        <Fragment>
            <br />
            <br />
            <br />
            <ContactDetailService
                title={history.location.state.title}
                subtitle={history.location.state.subtitle}
                descriptionPrimary={history.location.state.descriptionPrimary}
                descriptionSecondary={history.location.state.descriptionSecondary}
                price={history.location.state.price}
                list={history.location.state.list}
                img={history.location.state.img}
            />
            {
                (history.location.state.title==="Mediacion Online" || history.location.state.title==="Arbitraje Virtual")
                ?
                <div>
                    <Typography variant="h3" color="primary" className={classes.title} style={{marginTop: "5%"}}>Aquí te recomendamos más Servicios de Conciliación relacionados</Typography>
                </div>
                :
                <div>
                    <Typography variant="h3" color="primary" className={classes.title} style={{marginTop: "5%"}}>Aquí te mostramos los servicios en relación a</Typography>
                    <Typography variant="h3" color="primary" className={classes.title}>"{history.location.state.title}"</Typography>
                </div>   
            }
            
            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.subtitle}>
                Puedes comunicarte con nosotros directamente mediante nuestro <span style={{ color: "#FFB341" }}>WhatsApp</span>, donde podrás realizar cualquier consulta y asi resolver cada una de tus dudas
            </Typography>
            <CardListCustom data={history.location.state.more} />
            <br />
        </Fragment>
    )
}

export default ServicesInfo;
