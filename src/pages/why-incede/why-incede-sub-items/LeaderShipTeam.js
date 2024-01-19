import React from "react";
import { Row, Col, Container } from "reactstrap";
import leadershipImg from "../../../img/why-incede/leadership.png";

const LeaderShipTeam = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            className="d-flex align-items-center"
          >
            <div>
              <h1 className="text-left heading">Trusted Leadership</h1>
              <h4 className="my-4">
                A team of experienced thought leaders who inspire innovation and
                commitment to customer success
              </h4>
              <p className="sub-title">
                Incede.ai (Formerly Locus Solutions, Inc.) specializes in IBM
                watsonx generative AI technology stack, as well as domain and
                industry experience that can help accelerate customer’s business
                transformations.
              </p>
              <br />
              <p className="sub-title">
                With decades of management experience, innovation and business
                value are core to the leadership team’s ideals. They are trusted
                to think big and solve the most challenging business problems
                and do so by delivering value quickly and economically. Our
                management team has a shared passion for inspiring and
                empowering our team members to deliver success for and with our
                customers. Our team members are proven and experienced with a
                unique blend of business and technical expertise across a broad
                range of solution areas.
              </p>
              <br />
              <p className="sub-title">
                Our organization's essence is encapsulated by our dedicated
                team, whose commitment consistently surpasses client
                expectations. We are not just industry experts and problem
                solvers, but also partners deeply invested in your success. Our
                holistic solutions are crafted from extensive industry
                knowledge, guiding clients from identifying problems to
                delivering projects, adaptable to any scale of involvement. We
                pride ourselves on being trusted advisors to a diverse client
                base, achieving the highest satisfaction through outstanding
                service and tailored solutions. Our firm's strength lies in our
                continuous pursuit of knowledge, understanding global industry
                trends, which, combined with our consultants' diverse skills,
                defines our identity as a professional services provider.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            className="mt-4 mt-lg-0 d-flex align-items-center"
          >
            <div className="image-section">
              <img src={leadershipImg} alt="leadership team" />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default LeaderShipTeam;
