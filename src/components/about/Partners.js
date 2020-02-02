import React from 'react';
import { Row, Col } from 'reactstrap';
import ibmImg from "../../img/ibm.png";
import thoughtSpot from "../../img/thought-spot.jpg";
const Partners = (props) => {
    const style = {
        partnerImage: {
            // width: 300,
            height: 150
        }
    }
    return (
        <React.Fragment>
            <section className="gap-x">
                <Row>
                    <Col>
                        <article className="gap-y">
                            <h1 className="title">Our Partners</h1>
                            <p className=" sub-title">We service every aspect of your partners. From functionality, licensing, implementation to training.</p>
                            <br />
                            <p className="lead">
                                Our close relationship with IBM and ThoughtSpot has helped us deliver numerous successful implementations. This success is based upon the fact that they share our vision to deliver the greatest business value for our customers.
                                </p>
                            <br />
                            <p className="lead">
                                Incede account managers and consultants are experts in IBM’s and ThoughtSpot’s technology and utilize our best practice, proven methodology.
                            </p>
                            <br />
                            <br />
                            <div>
                                <img style={style.partnerImage} className="mr-2" src={ibmImg} alt="ibm" />
                                {/* <img style={style.partnerImage} className="mr-2" src={thoughtSpot} alt="thought-spot" /> */}
                            </div>
                        </article>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Partners;