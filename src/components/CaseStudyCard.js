import React from 'react';
const CaseStudyCard = (props) => {
    return (
        <div className="woodside p-3 d-flex mt-5 flex-column flex-sm-row">
            <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: 180 }}
                    src={props.imageUrl}
                    alt="imageUrl"
                />
            </div>
            <div className="flex-grow-1 ml-3">
                <p className="pp-1">{props.title}</p>
                {props.children && (
                    props.children
                )}
                <p className={`pp-3 ${props.viewClass ? props.viewClass : ''}`}>
                    <a
                        href={props.link}
                        target="_blank"
                        className="case-study fs-14 bold"
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