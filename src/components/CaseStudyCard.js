import React from 'react';
const CaseStudyCard = (props) => {
    return (
        <div className="woodside p-4 d-flex mt-5 flex-column flex-sm-row">
            <div className="d-flex justify-content-center align-items-center">
                <img
                    src={props.imageUrl}
                    alt="imageUrl"
                />
            </div>
            <div className="flex-grow-1 ml-3">
                <p className="pp-1">{props.title}</p>
                <p className="pp-3">
                    <a
                        href={props.link}
                        target="_blank"
                        className="case-study"
                        rel="noopener noreferrer"
                    >
                        View Case Study
                    </a>
                </p>
            </div>
        </div>
    );
}

export default CaseStudyCard;