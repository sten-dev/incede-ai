import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, widgetFor }) => (
    <CaseStudyTemplate
        title={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        image={entry.getIn(['data', 'image'])}
    />
)

CaseStudyPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CaseStudyPreview
