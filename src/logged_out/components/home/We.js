import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import nosotros from '../../../images/nosotros.jpg';


const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "100%"
    },
    paper: {
        margin: theme.spacing(3, 4),
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontWeight: "bold"
    },
    subtitle: {
        fontWeight: "bold",
        marginTop: "10px"
    },
    paragraph: {
        color: "#7C99C1",
        marginTop: "20px",
        textAlign: "justify",
    },
    divider: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
    list: {
        marginTop: "10px",
        marginLeft: "5%",
        color: "#7C99C1",
    }

}));

export default function We() {
    const classes = useStyles();
    const infoValues = [
        {
            info: "Responsabilidad."
        },
        {
            info: "Iniciativa."
        },
        {
            info: "Respeto."
        },
        {
            info: "Honestidad."
        },
        {
            info: "Empatía."
        },
        {
            info: "Reserva profesional."
        }
    ];

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}>
                <img src={nosotros} alt="no hay imagen" className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <div className={classes.paper}>
                    <Typography variant="h3" color="primary" className={classes.title}>Que es el Centro de Conciliación EX LEGE?</Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle1" color="initial" className={classes.paragraph}>EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.</Typography>
                    <Typography variant="h6" color="primary" className={classes.subtitle}>Nuestros valores</Typography>
                    <List className={classes.list}>
                        {
                            infoValues.map((element, index) => (
                                <Box m={-3} key={index}>
                                    <ListItem >
                                        <ListItemIcon>
                                            <DoneIcon style={{color: "#FFB341"}}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            {element.info}
                                        </ListItemText>
                                    </ListItem>
                                </Box>

                            ))
                        }
                    </List>
                </div>
            </Grid>
        </Grid>
    );
}
