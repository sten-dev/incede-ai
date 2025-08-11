import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Alert
} from "reactstrap";
import Transition from "../../Transition";
import Layout from "../../components/Layout";
import ServicesSmallCardsList from "../../components/services/ServicesSmallCardsList";
import arrow from "../../img/arrow.svg";
import arrowPrimary from "../../img/arrow-primary.png";
import "../../styles/why-incede.scss";

import MoreDetail from "../../components/Landing/MoreDetail";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ResultsInBusinessTerms from "./why-incede-sub-items/ResultsInBusinessTerms";
import CertifiedExpertise from "./why-incede-sub-items/CertifiedExpertise";
import CustomerSuccess from "./why-incede-sub-items/CustomerSuccess";
import TechnologyPartners from "./why-incede-sub-items/TechnologyPartners";
import LeaderShipTeam from "./why-incede-sub-items/LeaderShipTeam";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import StatsSection from "../../components/Landing/StatsSection";
import TestimonialCarousel from "../../components/Landing/TestimonialsCarousel";
import { Link } from "gatsby";
import ContactModal from "../../components/ContactModal";
import { withToastContext } from "../../components/common/ToastProvider";


const subItems = [
  // {
  //   image: "/img/why-incede/business-terms.png",
  //   inactiveImage: "/img/why-incede/business-terms-inactive.png",
  //   title: "Results in Business Terms"
  // },
  {
    image: "/img/why-incede/certified-expertise.png",
    inactiveImage: "/img/why-incede/certified-expertise-inactive.png",
    title: "Certified Expertise"
  },
  {
    image: "/img/why-incede/customer-successes.png",
    inactiveImage: "/img/why-incede/customer-successes-inactive.png",
    title: "Customer Successes"
  },
  {
    image: "/img/why-incede/incede-technology-partners.png",
    inactiveImage: "/img/why-incede/incede-technology-partners-inactive.png",
    title: "Technology Partners"
  },
  {
    image: "/img/leadership.png",
    inactiveImage: "/img/leadership-inactive.png",
    title: "Leadership Team"
  }
];

export const Menu = (subItems, activeIndex) =>
  subItems.map((x, i) => {
    let data = x;
    return (
      <div className="wwd-list-card api-services-cards mb-0" key={i}>
        <ServicesSmallCardsList
          service={data}
          index={i}
          isActive={activeIndex === i ? true : false}
          onItemClick={() => { }}
        />
      </div>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class WhyIncede extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      clickWhenDrag: false,
      alignCenter: false,
      dragging: true,
      hideArrows: false,
      hideSingleArrow: true,
      itemsCount: subItems.length,
      scrollToSelected: false,
      selected: 0,
      translate: 0,
      transition: 0.3,
      wheel: false,
      menuItems: Menu(subItems.slice(0, subItems.length), 0),
      linkId: "",
      showContactModal: false, // Added for ContactModal
    };
  }

  componentDidMount = () => {
    if (window.location.hash.length > 0) {
      let hash = window.location.hash.split("#")[1];
      let activeIndex = 0;
      switch (hash) {
        // case "business-terms":
        //   activeIndex = 0;
        //   break;
        case "certified-expertise":
          activeIndex = 0;
          break;
        case "customer-success":
          activeIndex = 1;
          break;
        case "technology-partners":
          activeIndex = 2;
          break;
        case "leadership-team":
          activeIndex = 3;
          break;
        default:
          activeIndex = 0;
          hash = "certified-expertise";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "business-terms"
        },
        () => {
          setTimeout(() => {
            document.getElementById("custom-react-link-why-incede").click();
          }, 500);
        }
      );
    }
  };

  onSelect = key => {
    let linkId;
    switch (Number(key)) {
      // case 0:
      //   linkId = "business-terms";
      //   break;
      case 0:
        linkId = "certified-expertise";
        break;
      case 1:
        linkId = "customer-success";
        break;
      case 2:
        linkId = "technology-partners";
        break;
      case 3:
        linkId = "leadership-team";
        break;
      default:
        linkId = "certified-expertise";
        break;
    }
    // linkId = "business-terms";
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "business-terms"
      },
      () => {
        setTimeout(() => {
          window.history.pushState("", "", `/why-incede#${linkId}`);
          document.getElementById("custom-react-link-why-incede").click();
        });
      }
    );
  };

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };

  render() {
    let menu = this.state.menuItems;
    return (
      <React.Fragment>
        <Layout pageTitle="Why Incede | Incede">
          {/* <Transition> */}
          <MoreDetail />
          <ScrollLink
            id="custom-react-link-why-incede"
            to={this.state.linkId}
            className="d-none"
            smooth={true}
          />

          {/* <Container>
              <div className="section-tabs-container watson-api-scroll-container custom-services-img">
                <ScrollMenu
                  alignCenter={this.state.alignCenter}
                  arrowLeft={ArrowLeft}
                  arrowRight={ArrowRight}
                  clickWhenDrag={this.state.clickWhenDrag}
                  data={menu}
                  dragging={this.state.dragging}
                  hideArrows={this.state.hideArrows}
                  hideSingleArrow={this.state.hideSingleArrow}
                  onSelect={this.onSelect}
                  onUpdate={this.onUpdate}
                  ref={el => (this.menu = el)}
                  selected={this.state.selected}
                  transition={this.state.transition}
                  translate={this.state.translate}
                  wheel={this.state.wheel}
                />
              </div>
            </Container> */}
          {/* <Container
               
              style={{ background: "rgba(122, 121, 121, 0.06)" }}
              className="gap-y industry-solution why-incede-container"
            >
              <Row>
                <Col xs={12}>
                  {this.state.activeIndex === 0 && <ResultsInBusinessTerms />}
                  {this.state.activeIndex === 0 && <CertifiedExpertise />}
                  {this.state.activeIndex === 1 && <CustomerSuccess />}
                  {this.state.activeIndex === 2 && <TechnologyPartners />}
                  {this.state.activeIndex === 3 && <LeaderShipTeam />}
                </Col>
              </Row>
            </Container> */}
          <section style={{ background: "rgba(122, 121, 121, 0.06)" }}>
            <Container>
              <Row className="d-flex align-items-center">
                <Col>
                  <article className="flex justify-content-center align-items-center py-4 text-center mt-0 mt-sm-3 mt-lg-4">
                    <h1 className="text-center heading">Proven. Experienced. Built to Scale.</h1>
                    <p className="sub-title mb-0 mb-lg-5 text-center">
                      Led by a team of enterprise transformation experts, Incede.ai brings decades of real-world implementation experience to every engagement. Our leadership has built intelligent systems across healthcare, finance, manufacturing, and technology and now brings that expertise to power the next wave of AI-driven business.
                    </p>
                  </article>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="bg-primary">
            <StatsSection />
            <Container className="text-white pb-5">
              <Row className="text-center">
                <Col>
                  <h3 className="">At a Glance</h3>
                </Col>
              </Row>
                <ul className='d-flex'>
              <Row className="justify-content-center">
                  <Col md={6} sm={12} xs={12} className="">
                    <li><b>Certified IBM</b> partner across watsonx, watsonx orchestrate, Planning Analytics, Cognos Analytics, and Business Automation Workflow (BAW) and RPA.
                    </li>
                    <li>
                      <b>Global delivery</b> with teams across North America and APAC
                    </li>
                  </Col>
                  <Col md={6} sm={12} xs={12} className="">
                    <li>
                      <b>Industry focus:</b> Healthcare, Financial Services, Tech, Manufacturing, Government
                    </li>
                    <li>
                      <b>95%+ customer satisfaction</b> across delivery engagements
                    </li>
                  </Col>
              </Row>
                </ul>
              <Row>
                <Col md={12} sm={12} xs={12} className="text-center">
                  <p className="fst-italic">We’re not just a vendor. We’re a trusted extension of your enterprise team.</p>
                </Col>
              </Row>
            </Container>

          </section>
          <section style={{ background: "rgba(122, 121, 121, 0.06)" }}>
            <Container>
              <Container className=''>
                <Row className="text-center">
                  <Col>
                    <h1 className="heading mt-5">Why Customers and IBMers Trust Incede.ai</h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col md={12} className="text-center">
                    <h3 className="text-center fw-bold">Strategic IBM Alignment</h3>
                    <p className="sub-title mb-0 mb-lg-5 text-center">
                      We’re deeply aligned with IBM’s product teams, partner network, and go-to-market motions. That means faster solutioning, smarter integrations, and more confident execution for both customers and IBM sellers.
                    </p>
                  </Col>
                  <Col md={12} className="text-center">
                    <h3 className="text-center fw-bold">Enterprise-Ready from Day One</h3>
                    <p className="sub-title mb-0 mb-lg-5 text-center">
                      Our implementations are designed with scale, security, and compliance in mind to supporting hybrid cloud, SOC2, HIPAA, and GDPR frameworks. Whether embedded in Slack or integrated with SAP, our solutions are built to perform where work happens.
                    </p>
                  </Col>
                  <Col md={12} className="text-center">
                    <h3 className="text-center fw-bold">Outcome-Driven, Not Just Tech-Driven</h3>
                    <p className="sub-title mb-0 mb-lg-5 text-center">
                      We deliver clear value: faster approvals, reduced cycle times, improved planning agility, and intelligent automation. Every project starts with business outcomes and not buzzwords.
                    </p>
                  </Col>
                  <Col md={12} className="text-center">
                    <h3 className="text-center fw-bold">Trusted by IBM Field Teams</h3>
                    <p className="sub-title mb-0 mb-lg-5 text-center">
                      IBM sellers, Customer Success Managers, and partner leaders turn to Incede.ai to deliver where it matters: enterprise credibility, technical depth, and proven delivery.
                    </p>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col className="text-center">
                  <p className="text-left mt-5 quote">“Incede.ai consistently delivers with excellence. Our teams trust them to represent IBM with credibility and help our customers succeed.”
                  </p>
                  <br />
                  <p className="text-right quote">— IBM Partner Sales Leader</p>
                </Col>
              </Row>
            </Container>
            {/* <Row> */}
            <TestimonialCarousel />
            {/* </Row> */}
            <Container>
              <Row className="justify-content-center">
                <Col lg={3} md={6} xs={12} className="p-2">
                  <Link
                    to="/customers"
                    className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                  >
                    Customers &nbsp;
                    <img
                      src={arrowPrimary}
                      alt="next"
                      style={{ width: "8px" }}
                    />
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="bg-primary">
            <Container className=" text-white text-center py-5">
              <Row>
                <Col>
                  <h2 className="text-white">Explore What We Offer</h2>
                  <p className="lead">Looking for more details on how we help?</p>
                </Col>
              </Row>
              <Row className="justify-content-center mb-4">
                <Col md={6} xs={12} className="d-flex flex-column align-items-center">
                  <Link to="/services/enterprise-ai-agents" className="btn explore-button my-2 w-75">
                    Enterprise AI Agents
                  </Link>
                  <Link to="/services/gen-ai-implementation" className="btn explore-button my-2 w-75">
                    Gen AI Implementation
                  </Link>
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-center">
                  <Link to="/services/ai-powered-business-process-automation" className="btn explore-button my-2 w-75">
                    Business Process Automation
                  </Link>
                  <Link to="/services/planning-budgeting-and-analytics" className="btn explore-button my-2 w-75">
                    Planning, Budgeting & Analytics
                  </Link>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col>
                  <h2 className="text-white">Ready to Activate AI?</h2>
                  <p className="lead">
                    Whether you're an enterprise team scaling AI adoption or an IBM seller looking for a trusted partner to deliver, Incede.ai is ready to help.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                  <Button onClick={this.handleContactClick} className="btn bg-secondary text-white my-2">
                    Let’s talk
                  </Button>
              </Row>
            </Container>
          </section>
          {/* </Transition> */}
        </Layout>
        <ContactModal
          isOpen={this.state.showContactModal}
          onClose={this.handleModalClose}
        />
      </React.Fragment>
    );
  }
}

export default withToastContext(WhyIncede);
