import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        paddingBottom: "60px"
    },
    title: {
        textAlign: "center",
        marginTop: "30px",
    },
    divider: {
        marginTop: "10px",
        marginBottom: "20px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
    imgLeft: {
        paddingRight: "2%",
        paddingLeft: "20%",
        fontFamily: "Montserrat,sans-serif",
        color: "#f1f1f7",
        fontSize: "16px",
        textAlign: "justify"
    },
    descriptionRight: {
        paddingLeft: "2%",
        paddingRight: "20%",
        textAlign: "justify"
    },
    inputWeb: {
        backgroundColor: "#ffffff",
        width: "100%",
        borderRadius: "5px",
        marginTop: "10px"
    },
    contentMovil: {
        paddingRight: "10%",
        paddingLeft: "10%",
        fontFamily: "Montserrat,sans-serif",
        color: "#f1f1f7",
        fontSize: "16px",
        textAlign: "justify"
    },
    formMovil: {
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "20px",
    },
    inputMovil: {
        backgroundColor: "#ffffff",
        width: "100%",
        borderRadius: "5px",
        marginTop: "10px"
    },
    button: {
        marginTop: "5px",
        width: "100%",
        color: theme.palette.common.darkBlack,
    },
    img: {
        width: "100%",
        borderRadius: "5px"
    },
    messageWhatsapp: {
        fontSize: "16px",
        textAlign: "justify",
        marginTop: "10px",
    },
    styleIconWhatsApps: {
        color: "#fff",
        background: "#0DC143",
        borderRadius: "6px",
    },
    list: {
        marginTop: "10px",
        marginBottom: "20px",
        marginLeft: "5%",
        color: "#fff",
    },
    textPrice: {
        margin: "10px",
        fontWeight: "bold",
        color: theme.palette.secondary.main,
    },
    link:{
        textDecoration: "none", 
        color: "#111E47", 
        fontSize: "15px",
        fontWeight: "bold"
    }
}));

const ContactDetailService = (props) => {
    const { title, subtitle, descriptionPrimary, descriptionSecondary, price, list, img } = props;
    const classes = useStyles();
    const phone = "+51962212903";
    const message = `Hola, quisiera consultar acerca del servicio de `;

    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h6">{subtitle}</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Hidden smDown>
                    <Grid item xs={6} className={classes.imgLeft}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }

                    </Grid>
                    <Grid item xs={6} className={classes.descriptionRight}>
                        <Typography variant="subtitle1" >{descriptionPrimary}</Typography>
                        {
                            price ? <Typography variant="subtitle1" className={classes.textPrice} >Precio: {price}</Typography> : <br/>
                        }
                        <Typography variant="subtitle1" >{descriptionSecondary}</Typography>
                        <List className={classes.list}>
                            {
                                list 
                                ?
                                list.map((element, index) => (
                                    <Box m={-3} key={index}>
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <DoneIcon style={{ color: "#FFB341" }} />
                                            </ListItemIcon>
                                            <ListItemText>
                                                {element}
                                            </ListItemText>
                                        </ListItem>
                                    </Box>
                                ))
                                :
                                ""
                            }
                        </List>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            size="small"
                            startIcon={<WhatsAppIcon className={classes.styleIconWhatsApps} style={{ fontSize: "30px" }} />}
                        >
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${title}`} className={classes.link}>
                                Contactar
                            </a>
                        </Button>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={12} className={classes.contentMovil}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }
                        <Typography variant="subtitle1" >
                            {descriptionPrimary}
                            <br />
                            <br />
                            {descriptionSecondary}
                        </Typography>
                        {/* aqui */}
                        <List className={classes.list}>
                            {
                                list 
                                ?
                                list.map((element, index) => (
                                    <Box m={-3} key={index}>
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <DoneIcon style={{ color: "#FFB341" }} />
                                            </ListItemIcon>
                                            <ListItemText>
                                                {element}
                                            </ListItemText>
                                        </ListItem>
                                    </Box>
                                ))
                                :
                                ''
                            }
                        </List>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<WhatsAppIcon className={classes.styleIconWhatsApps} style={{ fontSize: "30px" }} />}
                        >
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${title}`} style={{ textDecoration: "none", color: "#181717" }}>
                                Contactar
                            </a>
                        </Button>
                    </Grid>
                </Hidden>
            </Grid>
        </Fragment>
    )
}

export default ContactDetailService;
