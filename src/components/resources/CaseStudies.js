import React from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import CaseStudyCard from "../../components/case-study/CaseStudyCard";
import Select from "react-select"
class ResourcesCaseStudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technology: { label: "All", value: "all" },
      industry: { label: "All", value: "all" },
      filteredCaseStudies: this.props.data.allMarkdownRemark.edges,
      totalCaseStudies: this.props.data.allMarkdownRemark.edges,
    };
  }
  handleIndustryChange = (event) => {
    let eve = { ...event };
    this.setState(
      (prevState) => ({
        ...prevState,
        industry: event,
      }),
      this.filterCaseStudies
    );
  };
  handleTechnologyChange = (event) => {
    let eve = { ...event };
    this.setState(
      (prevState) => ({
        ...prevState,
        technology: event,
      }),
      this.filterCaseStudies
    );
  };
  filterCaseStudies = () => {
    let allCaseStudies = this.state.totalCaseStudies;
    let filteredCaseStudies = allCaseStudies.filter((item) => {
      let caseStudy = item.node.frontmatter;
      let isFiltered = false;
      if (this.state.industry && this.state.industry.value == "all" && this.state.technology && this.state.technology.value == "all") {
        isFiltered = true;
      } else {
        if (this.state.industry && this.state.industry.value != "all") {
          if (
            caseStudy.industry &&
            caseStudy.industry.length > 0 &&
            caseStudy.industry.indexOf(this.state.industry.value) > -1
          ) {
            isFiltered = true;
          }
        }
        if (this.state.technology && this.state.technology.value != "all") {
          if (
            caseStudy.technology &&
            caseStudy.technology.length > 0 &&
            caseStudy.technology.indexOf(this.state.technology.value) > -1
          ) {
            isFiltered = true;
            if (
              caseStudy.industry &&
              caseStudy.industry.length > 0 && this.state.industry &&
              caseStudy.industry.indexOf(this.state.industry.value) ==-1 && this.state.industry.value != "all"
            ) {
              isFiltered = false;
            }
          } else if (isFiltered) {
            isFiltered = false;
          }
        }
      }
      return isFiltered;
    });
    this.setState(
      (prevState) => ({
        ...prevState,
        filteredCaseStudies: filteredCaseStudies,
      }),
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    console.log("case studies", this.props);
    const { edges: caseStudies } = this.props.data.allMarkdownRemark;
    console.log("case-studies", this.state.filteredCaseStudies);
    const technologyOptions = [
      { label: "All", value: "all" },
      { label: "Watson Assistant", value: "watson-assistant" },
      { label: "Watson Discovery", value: "watson-discovery" },
      { label: "Watson Text to Speech", value: "text-to-speech" },
      { label: "Watson Speech to Text", value: "speech-to-text" },
      { label: "Watson Knowledge Studio", value: "knowledge-studio" },
      { label: "Watson Personality Insights", value: "personality-insights" },
      { label: "Watson Natural Language Classifier (NLC)", value: "nlc" },
      { label: "Watson Natural Language Understanding (NLU)", value: "nlu" },
      { label: "Watson Tone Analyzer", value: "tone-analyzer" },
      { label: "Watson Visual Recognition", value: "visual-recognition" },
    ];
    const industryOptions = [
      { label: "All", value: "all" },
      { label: "Finance", value: "finance" },
      { label: "Insurance", value: "insurance" },
      { label: "Services", value: "services" },
      { label: "Real Estate", value: "real-estate" },
      { label: "Manufacturing", value: "manufacturing" },
      { label: "Transportation", value: "transportation" },
      { label: "Communications", value: "communications" },
      { label: "Public Administration", value: "public-administration" },
      { label: "Retail Trade", value: "retail-trade" },
      { label: "Education", value: "education" },
    ];

    return (
      <section className="resources-library-content gap-y-half" id="1">
        <Container>
          <h1 className="text-left heading mb-5">Case Studies</h1>
          <Row className="mb-4">
            <Col xs="12" sm="6" md="6" lg="6" className="mt-16 ">
            <label>Industry</label>
              {/* <div className="form-group">
                <label>Industry</label>
                <select
                  className="form-control"
                  onChange={this.handleIndustryChange}
                  value={this.state.industry}
                  name="industry"
                >
                  <option value={"all"}>All</option>
                  {industryOptions.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div> */}
              <Select
                isClearable={false}
                placeholder="Industry"
                closeMenuOnSelect={true}
                isMulti={false}
                options={industryOptions}
                onChange={this.handleIndustryChange}
                value={this.state.industry}
              />
            </Col>
            <Col xs="12" sm="6" md="6" lg="6" className="mt-16 ">
              {/* <div className="form-group">
                <label>Technology</label>
                <select
                  className="form-control"
                  onChange={this.handleTechnologyChange}
                  value={this.state.technology}
                  name="technology"
                >
                  <option value={"all"}>All</option>
                  {technologyOptions.map((technology) => (
                    <option key={technology.value} value={technology.value}>
                      {technology.label}
                    </option>
                  ))}
                </select>
              </div> */}
              <label>Technology</label>
              <Select
                isClearable={false}
                placeholder="Technology"
                closeMenuOnSelect={true}
                isMulti={false}
                options={technologyOptions}
                onChange={this.handleTechnologyChange}
                value={this.state.technology}
              />
            </Col>
          </Row>
          <div className="bg-grey">
            {this.state.filteredCaseStudies.length > 0 ? (
              <Row>
                {this.state.filteredCaseStudies.map((caseStudy) => (
                  <Col xs="12" sm="6" md="6" lg="4" className="mt-16 ">
                    <CaseStudyCard
                      title={caseStudy.node.frontmatter.title}
                      description={caseStudy.node.frontmatter.subTitle}
                      image={caseStudy.node.frontmatter.image}
                      slug={caseStudy.node.fields.slug}
                      type={true}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                <Col xs={12}>
                  <h2 className="text-center">No data found</h2>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
    );
  }
}

ResourcesCaseStudies.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ResourcesCaseStudiesQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "resources-case-studies" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                subTitle
                technology
                industry
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <ResourcesCaseStudies data={data} />}
  />
);
