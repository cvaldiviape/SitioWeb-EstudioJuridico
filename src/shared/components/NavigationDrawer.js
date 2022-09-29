import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  isWidthUp,
  Toolbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  closeIcon: {
    marginRight: theme.spacing(0)
  },
  headSection: {
    width: "100%"
  },
  blackList: {
    backgroundColor: theme.palette.primary.main,
    /* height: "100%" */
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

class NavigationDrawer extends PureComponent {
  componentDidMount() {
    window.onresize = () => {
      const { width, open, onClose } = this.props;
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }

  render() {
    const {
      anchor,
      classes,
      open,
      onClose,
      menuItems,
      selectedItem,
      theme
    } = this.props;
    return (
      <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
          
        <Toolbar className={classes.headSection}>
          <ListItem
            style={{
              paddingTop: theme.spacing(0),
              paddingBottom: theme.spacing(0),
              height: "100%",
              justifyContent: "center"
            }}
            disableGutters
          >
            <ListItemIcon className={classes.closeIcon}>
              <IconButton onClick={onClose} aria-label="Close Navigation">
                <CloseIcon color="primary" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        
        </Toolbar>

        <List className={classes.blackList}>
          {menuItems.map(element => {
            if (element.link) {
              return (
                <Link
                  key={element.name}
                  to={element.link}
                  className={classes.noDecoration}
                  onClick={onClose}
                >
                  <ListItem
                    button
                    selected={selectedItem === element.name}
                    /**
                     * We disable ripple as it will make a weird animation
                     * with primary and secondary color
                     */
                    disableRipple
                    disableTouchRipple
                  >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" className="text-white">
                          {element.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
              );
            }
            return (
              <ListItem button key={element.name} onClick={element.onClick}>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" className="text-white">
                      {element.name}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectedItem: PropTypes.string
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(NavigationDrawer)
);
