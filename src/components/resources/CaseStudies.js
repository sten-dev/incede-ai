import React from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const CaseStudies = () => {
  return (
    <section className="resources-library-content gap-y-half" id="1">
      <Container>
        <h1 className="text-left heading mb-5">Case Studies</h1>
        {/* <div className="bg-grey">
          <Row></Row>
        </div> */}
      </Container>
    </section>
  );
};

export default CaseStudies;
