import React from 'react'
import PropTypes from 'prop-types'
import { SolutionsPostTemplate } from '../../templates/solutions-post'

const SolutionsPostPreview = ({ entry, widgetFor }) => (
    <SolutionsPostTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        image={entry.getIn(['data', 'image'])}
    />
)

SolutionsPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default SolutionsPostPreview
