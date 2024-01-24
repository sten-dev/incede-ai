import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const AiServices = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <h2 className="m-0">AI Services</h2>
            <br />
            <p>
              With the advancements in Artificial Intelligence (AI), its use is
              essential in the management and automated analysis of extensive
              volumes of complex data and information. Leveraging AI technology,
              we enhance our services to help you make more informed decisions.
            </p>
          </Col>
          <Col lg={12} md={12} sm={12} className="pb-3">
            <div className="content-outcomes">
              {/* <h5 className="mb-0">
                <p>
                  On-premise or on the cloud, IBM Cognos Analytics is designed
                  for the individual, workgroup, department, midsize business
                  and large enterprise – to help everyone in your organization
                  make the decisions that achieve better business outcomes.
                </p>
              </h5> */}
              {/* <h5 className="mb-0">
                <p>Incede.ai helps you:</p>
              </h5> */}
              <br/>
              <ul>
                <li>
                  <p>
                    <b>Data Collection:</b> We assist in gathering and
                    organizing data more efficiently, ensuring that stakeholders
                    have access to a comprehensive and accurate dataset.
                    AI-powered data collection enables quick and accurate data
                    consolidation from multiple sources, reducing human error
                    risk and saving time. Machine learning algorithms help
                    automatically categorize and tag data, enabling users to
                    find the information they need.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Data Cleaning and Transformation:</b> Our AI-powered
                    tools clean and standardize data, resulting in higher
                    accuracy and reliability for analysis. This process enables
                    legal teams to gain valuable insights and identify and
                    correct errors in the data using machine learning
                    algorithms, ultimately making the data easier to interpret
                    and analyze.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Predictive Analytics:</b> AI-powered predictive analytics
                    aids stakeholders in understanding complex business
                    opportunities, identify patterns, and uncover insights that
                    may not be immediately apparent through traditional methods.
                    This service enables stakeholders to make informed decisions
                    and real business value based on the interpretation of
                    complex datasets.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Data Visualization:</b> We leverage cutting-edge data
                    visualization tools in conveying results of data analysis
                    and AI in non-technical terms. Visualization simplifies the
                    interpretation of complex data.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Natural Language Processing:</b> Our Natural Language
                    Processing (NLP) capability helps understand large amounts
                    of unstructured text data, such as emails, blogs or
                    documents, and identify relevant information for new
                    business insights.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Cloud-Based Data Services:</b> Our Cloud-based Data
                    Services offer the capability to access vast computing power
                    and storage, which is essential for analyzing large
                    datasets. By utilizing cloud-based data services, you can
                    manage, store, and analyze significant amounts of data
                    without investing in expensive hardware and infrastructure.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default AiServices;
