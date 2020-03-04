import React from "react";
const CaseStudyCard = props => {
    return (
        <div className="woodside p-3 d-flex mt-5 flex-column align-items-center">
            <div className="d-flex flex-grow-1 px-4">
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        style={{ width: 120, height: 46 }}
                        src={props.imageUrl}
                        alt="imageUrl"
                    />
                </div>
                <div>
                    <p className="pp-1 pl-3">{props.title}</p>
                </div>
            </div>
            <div className="points-text">{props.children && props.children}</div>
            <div className="flex-grow-1 ml-3">
                <p
                    className={`pp-3 ${
                        props.viewClass ? props.viewClass : ""
                        }`}
                >
                    <a
                        href={props.link}
                        target="_blank"
                        className="case-study bold"
                        rel="noopener noreferrer"
                    >
                        View Case Study
          </a>
                </p>
            </div>
        </div>
    );
};

export default CaseStudyCard;
