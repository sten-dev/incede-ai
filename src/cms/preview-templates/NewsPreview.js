import React from "react";
import PropTypes from "prop-types";
import { NewsTemplate } from "../../templates/news";

const NewsPreview = ({ entry, widgetFor }) => {
  return (
    <React.Fragment>
      <NewsTemplate
        title={entry.getIn(["data", "title"])}
        description={entry.getIn(["data", "description"])}
        date={entry.getIn(["data", "date"])}
        category={entry.getIn(["data", "category"])}
        image={entry.getIn(["data", "image"])}
        content={widgetFor("body")}
      />
    </React.Fragment>
  );
};

NewsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default NewsPreview;