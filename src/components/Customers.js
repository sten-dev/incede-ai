import React from "react";
import { Container, Col, Row } from "reactstrap";
import d2lLogo from "../img/customers/d2l-logo.png";
import daptivHdrLogo from "../img/customers/daptiv_hdr_logo.png";
import crcHealth from "../img/customers/crc-health.png";
import experian from "../img/customers/experian.png";
import pbLogo from "../img/customers/pb-logo.png";
import NorthlandControls from "../img/customers/NorthlandControls.png";
import costplus from "../img/customers/costplus.png";
import couponsLogo from "../img/customers/coupons_logo.png";
import empowermm from "../img/customers/empowermm.png";
import zynga from "../img/customers/zynga.png";
import DH from "../img/customers/DH.png";
import Guidewire from "../img/customers/Guidewire.png";
import LG_logo from "../img/customers/LG_logo.png";
import trimbleMeridianWinestimatorLogo from "../img/customers/trimble-meridian-winestimator-logo.png";
import misioneroLogo from "../img/customers/misionero-logo.png";
import Alaska from "../img/customers/Alaska.png";
import affymetrix from "../img/customers/affymetrix.png";
import Actelion from "../img/customers/Actelion.png";
import vansd from "../img/customers/vansd.png";
import wfLogo from "../img/customers/wf-logo.png";
import sym_logo_nb from "../img/customers/sym_logo_nb.png";
import WestEd from "../img/customers/WestEd.png";
import ticketmaster_Logo from "../img/customers/ticketmaster_Logo.png";
import marketmetrix2 from "../img/customers/marketmetrix2.png";
import irwinFinancial2 from "../img/customers/irwin-financial2.png";
import shutterFly from "../img/customers/shutterFly.png";
import yakimaValleyLogoHeader2 from "../img/customers/yakimaValleyLogoHeader2.png";
import avenueainc_logo from "../img/customers/avenueainc_logo.png";
import asm_logo from "../img/customers/asm_logo.png";
import aig2 from "../img/customers/aig2.png";
import visa_logo from "../img/customers/visa_logo.png";
import revionics2 from "../img/customers/revionics2.png";
import AngioScore2 from "../img/customers/AngioScore2.png";
import boeing2 from "../img/customers/boeing2.png";
import ChurchBrothers from "../img/customers/ChurchBrothers.png";
import clearwire2 from "../img/customers/clearwire2.png";
import CNS2 from "../img/customers/CNS2.png";
import concur2 from "../img/customers/concur2.png";
import directv from "../img/customers/directv.png";
import ernex_logo from "../img/customers/ernex_logo.png";
import legalzoom_logo from "../img/customers/legalzoom_logo.png";
import trinet from "../img/customers/trinet.png";
import SamaritanHealthServices2 from "../img/customers/SamaritanHealthServices2.png";
import TommyBahama2 from "../img/customers/TommyBahama2.png";
import pfizer_logo from "../img/customers/pfizer_logo.png";
import ssi2 from "../img/customers/ssi2.png";
import opp_logo from "../img/customers/opp_logo.png";
import Sharp2 from "../img/customers/Sharp2.png";
import rh_logo from "../img/customers/rh_logo.png";
import tplLogo from "../img/customers/tpl-logo.png";
import GCI from "../img/customers/GCI.png";


import "../styles/customers.scss";

const Customers = () => {
  let customersList = [
    d2lLogo,
     daptivHdrLogo,
     crcHealth,
     experian,
     pbLogo,
     NorthlandControls,
     costplus,
     couponsLogo,
     empowermm,
     zynga,
     DH,
     Guidewire,
     LG_logo,
     trimbleMeridianWinestimatorLogo,
     misioneroLogo,
     Alaska,
     affymetrix,
     Actelion,
     vansd,
     wfLogo,
     sym_logo_nb,
     WestEd,
     ticketmaster_Logo,
     marketmetrix2,
     irwinFinancial2,
     shutterFly,
     yakimaValleyLogoHeader2,
     avenueainc_logo,
     asm_logo,
     aig2,
     visa_logo,
     revionics2,
     AngioScore2,
     boeing2,
     ChurchBrothers,
     clearwire2,
     CNS2,
     concur2,
     directv,
     ernex_logo,
     legalzoom_logo,
     trinet,
     SamaritanHealthServices2,
     TommyBahama2,
     pfizer_logo,
     ssi2,
     opp_logo,
     Sharp2,
     rh_logo,
     tplLogo,
     GCI,

  ];
  return (
    <>
      <section className="customers-page">
        <section className="more-detail">
          <Container>
            <Row>
              <Col lg={8} md={7} sm={12} xs={12}>
                <article className="gap-y-half text-left mt-0 mt-sm-3 mt-lg-4">
                  <h1 className="title">Our Customers-First Culture</h1>
                  <h5 className="text-white sub-title">
                    Our culture has a single focus – ensuring our customers are
                    successful. We believe in building a value-based partnership
                    with each of our customers. We understand our customer’s
                    project goals, culture, and implementation experience. Based
                    on that we provide our customer with a unique consulting
                    experience that is focused on providing solutions that are
                    built for their specific needs – ranging from designing the
                    application to training the their team to own their
                    applications. This core value has gained us tremendous
                    customer satisfaction ratings and references.
                  </h5>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <Row className="gap-y-half">
            {customersList.map((img, imgIndex) => (
              <Col xs={12} sm={6} md={4} lg={3} key={imgIndex} className="d-flex justify-content-center">
                <div className="image-container">
                    <img src={img} alt={`customer_${imgIndex}`} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Customers;
