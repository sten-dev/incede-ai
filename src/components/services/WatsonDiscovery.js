import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import picture1 from "../../img/services/discovery-picture1.png";
import picture2 from "../../img/services/discovery-picture2.png";
import picture3 from "../../img/services/discovery-picture3.png";
import picture4 from "../../img/services/discovery-picture4.png";

class WatsonDiscovery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="services-content gap-y-half" id="3">
        <Container>
          <Row>
            <Col>
              <div className="content">
                <p>
                  Incede implements enterprise search and AIfor organizations to
                  surface relevant insights from stores ofdata and documents
                  from internal, external and public sources.
                </p>
                <p>
                  <b>Watson Discovery</b> is IBM’s enterprise search and AI
                  search technology that breaks open data silos and retrieves
                  specific answers to your questions while analyzing trends and
                  relationships buried in enterprise data. More powerful than
                  traditional keyword search engines, Watson Discovery uses
                  natural language query to understand the semantics and
                  determine relevancy between the question and results. Adding
                  enrichments and machine learning, it applies training to
                  understand additional content and applies relevancy thresholds
                  to provide only meaningful results.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={picture1} alt="support image" />
              </div>
              <br />
              <div className="image-section">
                <img src={picture2} alt="support image" />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h1 className="text-left heading mb-5">
            Watson Discovery Design Services
          </h1>
          <Row>
            <Col>
              {/* <p className="content-heading mb-3">
              Watson Discovery Design Services
              </p> */}

              <div className="content">
                <p>
                  Designing an enterprise search and AI search solutions begins
                  with an understanding of the targeted workflow stakeholders –
                  what do they need, where do they need it and when do they need
                  it.
                </p>
                <p>
                  Incede develops a phased Enterprise Search and AI Search
                  Design for a solution that meets the information needs,
                  workflow requirements, technical architectures and the
                  strategic imperatives while reducing risk and delivering the
                  necessary business value quickly.
                </p>
                <p>
                  We contrast the decision-making expectations of users and the
                  information they need to improve their decision-making and
                  identify the workflow and knowledge opportunities for the
                  enterprise search and AI search solution.
                </p>
                <p>
                  We confirm the data sources, prioritize the annotation and
                  enrichment methods and plan the integrations to ensure a
                  positive user experience with relevant, trusted answers.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={picture3} alt="support image" />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h1 className="text-left heading mb-5">
            Watson Discovery Development Services
          </h1>
          <Row>
            <Col>
              {/* <p className="content-heading mb-3">
              Watson Discovery Development Services
              </p> */}

              <div className="content">
                <p>
                  Getting users their highly relevant answers requires savvy
                  developers who navigate data complexities and create
                  enterprise search and AI search solutions that are modeled and
                  trained to the semantics of the industry, the organization and
                  the workflow.
                </p>
                <p>
                  From our internal and customer solutions, Incede has developed
                  frameworks, APIs, and plugins for the most common use cases.
                </p>
                <ul>
                  <li>
                    <p>
                      <b>Ingest and Normalize Development Services</b>brings in
                      the structured and unstructured data from internal,
                      external and/or public sources such as Box, salesforce,
                      Microsoft Sharepoint, web crawl and the IBMCloud Object
                      Storage. Unstructured data within documents such as pdf,
                      MS Word, MS PowerPoint, MS Excel, HTML and even scanned
                      images are included.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Enrichment Development Services</b> applies the
                      understanding of what data is being brought into the
                      enterprise search and search AI solution. Enrichments or
                      meta data development includes entity and category
                      identification, semantics and parts of speech parsing,
                      sentimental analysis, emotion identification, keywords,
                      and concept tagging.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Advanced Enrichment Development </b> applies custom or
                      specialized natural language enrichments using IBM Watson
                      Knowledge Studio to identify entities and relationships
                      unique to your business or organization. Advanced
                      enrichment is used for complex content such as images and
                      tables to improve the relevancy of answers.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Pre-Processing Development Services</b> minimizes false
                      negatives and false positives with a pre-processing
                      pipeline to handle common errors with dependency parsing,
                      lemmatization and parts of speech checking.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Smart Document Development Services</b> is the process
                      of teaching the solution, using Smart Document Understand
                      (SDU), how to understand the structure of the documents
                      and collections of documents. Relevancy is assessed and
                      improved through training to ensure the system is
                      ingesting other documents in the collections.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Query Relevancy Development Services</b> ranks
                      relevancy and improves results through relevancy training.
                      Passages and user questions are analyzed for relevancy
                      before and after applying relevancy training.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={picture4} alt="support image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WatsonDiscovery;
