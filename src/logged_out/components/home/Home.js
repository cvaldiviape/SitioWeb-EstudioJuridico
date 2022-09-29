import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import ServicesConciliation from "./ServicesConciliation";
import We from "./We";
import OurProfessionals from "./OurProfessionals";
import Contact from "../contact/Contact";

class Home extends PureComponent {

    componentDidMount() {
        const { selectHome } = this.props;
        selectHome();
    }
    render() {
        return (
            <Fragment>
                <HeadSection/>
                <br />
                <ServicesConciliation />
                <br />
                <We />
                <br />
                <OurProfessionals />
                <br />
                <Contact />
            </Fragment>
        );
    }
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired
};

export default Home;
