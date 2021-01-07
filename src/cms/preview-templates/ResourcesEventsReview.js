import React from "react";
import PropTypes from "prop-types";
import { ResourcesEventsTemplate } from "../../templates/resources-events";

const ResourcesEventsReview = ({ entry }) => {
  return (
    <React.Fragment>
      <ResourcesEventsTemplate
        title={entry.getIn(["data", "title"])}
        videoUrl={entry.getIn(["data", "videoUrl"])}
        videoType={entry.getIn(["data", "videoType"])}
        typeOfServices={entry.getIn(["data", "typeOfServices"])}
        image={entry.getIn(["data", "image"])}
      />
    </React.Fragment>
  );
};

ResourcesEventsReview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  //   widgetFor: PropTypes.func,
};

export default ResourcesEventsReview;
