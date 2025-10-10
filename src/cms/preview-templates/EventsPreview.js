import React from "react";
import PropTypes from "prop-types";
import { EventsTemplate } from "../../templates/events";

const EventsPreview = ({ entry, widgetFor }) => {
  return (
    <React.Fragment>
      <EventsTemplate
        title={entry.getIn(["data", "title"])}
        description={entry.getIn(["data", "description"])}
        //speakers={entry.getIn(["data", "speakers"])}
        duration={entry.getIn(["data", "duration"])}
        date={entry.getIn(["data", "date"])}
        content={widgetFor("body")}
      />
    </React.Fragment>
  );
};

EventsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EventsPreview;
