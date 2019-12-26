import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  return (
    <div>
      <AboutPageTemplate
        data={data || {}}
      />
    </div>
  )
}

export default AboutPagePreview
