import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const VideoCaseStudyCard = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <React.Fragment>
      <div className="woodside p-4 d-flex mt-5 flex-column flex-sm-row">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={props.imageUrl}
            alt="imageUrl"
            style={{ width: "166px", height: "auto" }}
          />
        </div>
        <div className="flex-grow-1 ml-3">
          <p className="pp-1">{props.title}</p>
          <p className="pp-3">
            <a
              className="case-study pointer"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={toggle}
            >
              Watch Video Case Study
            </a>
          </p>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        size="lg"
        className="m-auto"
      >
        <ModalHeader toggle={toggle} className="custom-modal-header">
          {props.title}
        </ModalHeader>
        <ModalBody>
          <iframe
            title={props.title}
            src={props.embeddedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: "100%", height: "400px" }}
            allowFullScreen
          ></iframe>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default VideoCaseStudyCard;
