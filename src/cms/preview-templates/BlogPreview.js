import React from "react";
import PropTypes from "prop-types";
import { BlogTemplate } from "../../templates/blog";

const BlogPreview = ({ entry, widgetFor }) => {
  return (
    <React.Fragment>
      <BlogTemplate
        title={entry.getIn(["data", "title"])}
        description={entry.getIn(["data", "description"])}
        author={entry.getIn(["data", "author"])}
        date={entry.getIn(["data", "date"])}
        readingTime={entry.getIn(["data", "readingTime"])}
        image={entry.getIn(["data", "image"])}
        format={entry.getIn(["data", "format"])}
        speakers={entry.getIn(["data", "speakers"])}
        category={entry.getIn(["data", "category"])}
        content={widgetFor("body")}
      />
    </React.Fragment>
  );
};

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPreview;