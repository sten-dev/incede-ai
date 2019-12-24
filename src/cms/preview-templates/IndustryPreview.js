import React from 'react'
import PropTypes from 'prop-types'
import { IndustriesTemplate } from '../../templates/industries'

const IndustriesPreview = ({ entry, widgetFor }) => (
    <IndustriesTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        image={entry.getIn(['data', 'image'])}
    />
)

IndustriesPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default IndustriesPreview
