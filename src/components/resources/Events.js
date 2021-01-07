import React, { useState } from "react";
import PropTypes from "prop-types";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import ResourcesLibraryCard from "./ResourcesLibraryCard";
import { graphql, StaticQuery } from "gatsby";

const Events = ({ data }) => {
  const { edges: resourcesEvents } = data.allMarkdownRemark;
  console.log(resourcesEvents);
  // const [type, setType] = useState("Webinar");
  const [events, setEvents] = useState(resourcesEvents);
  const [state, setState] = useState({
    eventsType: "All",
    typeOfServices: "All",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    // let filteredEvents;
    // if (state.eventsType === "All" && state.typeOfServices === "All") {
    //   filteredEvents = events;
    //   // setEvents(events)
    // } else if (state.eventsType === "All" && state.typeOfServices !== "All") {
    //   filteredEvents = events?.filter(
    //     (e) => e.node.frontmatter.typeOfServices === state.typeOfServices
    //   );
    //   // setEvents(filteredEvents);
    // } else if (state.eventsType !== "All" && state.typeOfServices == "All") {
    //   filteredEvents = events?.filter(
    //     (e) => e.node.frontmatter.eventsType === state.eventsType
    //   );
    // } else {
    //   let filterEvents = events?.filter(
    //     (e) => e.node.frontmatter.eventsType === state.eventsType
    //   );
    //   filteredEvents = filterEvents?.filter(
    //     (e) => e.node.frontmatter.typeOfServices === state.typeOfServices
    //   );
    // }
    // setEvents(filteredEvents);
  };

  return (
    <section className="resources-library-content gap-y-half" id="1">
      <Container>
        <h1 className="text-left heading mb-5">Events</h1>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            {/* <div className="bg-grey"> */}
            <div className="form-group">
              <label>Video Type</label>
              <select
                className="form-control"
                onChange={handleChange}
                value={state.eventsType}
                name="eventsType"
              >
                <option value={"All"}>All</option>
                <option value={"Webinar"}>Webinar</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of Services</label>
              <select
                className="form-control"
                onChange={handleChange}
                value={state.typeOfServices}
                name="typeOfServices"
              >
                <option value={"All"}>All</option>
                <option
                  key={"Watson Assistant Service"}
                  value={"Watson Assistant Service"}
                >
                  Watson Assistant Service
                </option>
                <option
                  key={"Watson Discovery Service"}
                  value={"Watson Discovery Service"}
                >
                  Watson Discovery Service
                </option>
              </select>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <div className="bg-grey">
              <Row>
                {events.map((rE) => (
                  <Col xs={12} sm={6} md={6} lg={4} className="mt-16">
                    <ResourcesLibraryCard
                      title={rE.node.frontmatter.title}
                      videoUrl={rE.node.frontmatter.videoUrl}
                      image={rE.node.frontmatter.image}
                      videoType={rE.node.frontmatter.videoType}
                      type="events"
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Events.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EventsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "resources-events" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                templateKey
                videoUrl
                videoType

                image {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Events data={data} />}
  />
);
