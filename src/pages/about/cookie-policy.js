import React, { Component } from "react";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-scroll";

class CookiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Layout pageTitle="Cookie Policy | Incede" page="cookie/policy">
          <Transition>
            <Container className="gap-y-half">
              <Row>
                <Col xs={12}>
                  <div>
                    <h1 className="text-primary">
                      <b>Cookies and similar technology</b>
                    </h1>
                  </div>
                </Col>
                <Col>
                  <div style={{ backgroundColor: "#F2F2F2" }}>
                    <Container fluid>
                      <Row>
                        <Col
                          xs={12}
                          sm={12}
                          md={11}
                          lg={10}
                          className="pb-5 pt-4"
                        >
                          <Container fluid>
                            <Row>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      Below is information about how Locus
                                      Solutions and its affiliates (“we”) use
                                      cookies and other similar technology on
                                      this website.
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    By continuing to use this website you agree
                                    that we can place cookies and other similar
                                    technology on your device, including mobile
                                    device, per your agreement with our cookie
                                    consent manager. By continuing to use your
                                    mobile device to access this website, you
                                    agree that the following information may be
                                    collected: your unique device identifier,
                                    mobile device IP address, information about
                                    your device’s operating system, mobile
                                    carrier and your location information (to
                                    the extent permissible under applicable
                                    law).
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      What are cookies?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    Cookies are text files containing small
                                    amounts of information which are downloaded
                                    to your computer or mobile device when you
                                    visit a site and allow a site to recognize
                                    your device.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      Why do we use cookies and similar
                                      technologies?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    Cookies do a lot of different jobs, such as
                                    letting you navigate between pages
                                    efficiently, remembering your preferences
                                    and generally improving the user experience.
                                    They can also help to ensure that the
                                    advertisements you see online are more
                                    relevant to you and your interests.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      Does Locus Solutions use cookies for
                                      marketing and analytics?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    Yes, we may use information collected from
                                    our cookies to identify user behavior and to
                                    serve content and offers based on your
                                    profile, and for the other purposes
                                    described below, to the extent legally
                                    permissible in certain jurisdictions.
                                  </p>
                                  <br />
                                  <p className="sub-title">
                                    Some of the cookies we use don't collect
                                    information that identifies a visitor. For
                                    example –
                                  </p>
                                  <ul>
                                    <li>Performance cookies (see below)</li>
                                    <li>
                                      Targeting cookies (see below) where you
                                      are not a registered user
                                    </li>
                                  </ul>
                                  <br />
                                  <p className="sub-title">
                                    In other cases we can associate cookie
                                    information (including information from
                                    cookies placed via our advertisements on
                                    third party sites) with an identifiable
                                    individual. For example –
                                  </p>
                                  <ul>
                                    <li>
                                      If we send you a targeted email which
                                      includes web beacons, cookies or similar
                                      technologies we will know whether you
                                      open, read, or delete the message.
                                    </li>
                                    <li>
                                      When you click a link in a marketing
                                      e-mail you receive from Locus Solutions,
                                      we will also use a cookie to log what
                                      pages you view and what content you
                                      download from our websites, even if you
                                      are not registered at or signed into our
                                      site.
                                    </li>
                                    <li>
                                      <b>
                                        Combining and analyzing personal data
                                      </b>{" "}
                                      – As described above, we may combine data
                                      from publicly available sources, and from
                                      our different e-mail, website, and
                                      personal interactions with you (this
                                      includes information collected across our
                                      different websites such as our careers and
                                      corporate sites and information collected
                                      when you sign-up or log on to our sites or
                                      connect to our sites using your social
                                      media credentials (such as LinkedIn and
                                      Xing). We combine this data to better
                                      assess your experience with Locus
                                      Solutions and to perform the other
                                      activities described throughout our
                                      privacy policy.
                                    </li>
                                  </ul>
                                  <br />
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      Do you use any cookies from third party
                                      companies?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    Some cookies we use are from third party
                                    companies, such as Adobe Analytics, Google
                                    Analytics, Hubspot, Marketo Munchkin
                                    Tracking, AS Remarketing, Xing and Linkedin
                                    Analytics to provide us with web analytics
                                    and intelligence about our sites. These
                                    companies use programming code to collect
                                    information about your interaction with our
                                    sites, such as the pages you visit, the
                                    links you click on and how long you are on
                                    our sites. This code is only active while
                                    you are on an Locus Solutions website.
                                  </p>
                                  <br />
                                  <p className="sub-title">
                                    For more information on how these companies
                                    collect and use information on our behalf,
                                    please refer to their privacy policies:
                                  </p>
                                  <ul>
                                    <li>
                                      <a
                                        href="https://www.gatsbyjs.com/privacy-policy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Gatsby Privacy Policy
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.netlify.com/privacy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Netlify Privacy policy
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://reactjs.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        React JS
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://getbootstrap.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Bootstrap
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      Does Locus Solutions use any non-cookie
                                      tracking technologies?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    We may also use web beacons (including
                                    conversion pixels) or other technologies for
                                    similar purposes as above and we may include
                                    these on our sites, in marketing e-mail
                                    messages or our newsletter, affiliated
                                    websites, to determine whether messages have
                                    been opened and links clicked on. Web
                                    beacons do not place information on your
                                    device, but they may work in conjunction
                                    with cookies to monitor website activity.
                                    The information provided below about cookies
                                    also applies to web beacons and similar
                                    technologies. Conversion pixels are small
                                    codes located on a particular web page which
                                    are triggered when someone visits a page
                                    resulting in an increase in the conversion
                                    count.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      What if I don’t want cookies?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    By using our site you agree that we can
                                    place cookies on your device as explained
                                    below. If you want to remove existing
                                    cookies from your device you can do this
                                    using your browser options. If you want to
                                    block future cookies being placed on your
                                    device you can change your browser settings
                                    to do this.For more information on managing
                                    cookies see{" "}
                                    <a
                                      href="https://www.allaboutcookies.org/manage-cookies/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      All About Cookies - Manage Cookies
                                    </a>
                                    . Currently, "Do Not Track" initiatives are
                                    not recognized by our site.
                                  </p>
                                  <br />
                                  <p className="sub-title">
                                    Please bear in mind that deleting and
                                    blocking cookies will have an impact on your
                                    user experience as parts of the site may no
                                    longer work. Unless you have adjusted your
                                    browser settings to block cookies, our
                                    system will issue cookies as soon as you
                                    visit our site or click on a link in a
                                    targeted email that we have sent you, even
                                    if you have previously deleted our cookies.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12}>
                                <div className="cookie-body">
                                  <h5 className="title">
                                    <b className="color-gray">
                                      What types of cookies are there and which
                                      ones does the site use?
                                    </b>
                                  </h5>
                                  <p className="sub-title">
                                    The cookies used on Locus Solutions sites
                                    have been categorized to four types.
                                    However, it is important to note that not
                                    all cookies may be used in all jurisdictions
                                    or websites. A list of all the cookies used
                                    on this site by category is set out below.
                                    Within these four categories below, cookies
                                    are classified as either session or
                                    persistent cookies.
                                  </p>
                                  <br />
                                  <p className="sub-title">
                                    “Session” cookies are temporary and once you
                                    close the browser window, they are deleted
                                    from your device.
                                  </p>
                                  <p className="sub-title">
                                    “Persistent” cookies remain on your device
                                    for a longer period and are used by the
                                    website to recognize your device when you
                                    return. You can find more information about
                                    cookies at:{" "}
                                    <a
                                      href="https://www.allaboutcookies.org/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      All About Cookies
                                    </a>{" "}
                                    and{" "}
                                    <a
                                      href="https://www.youronlinechoices.eu/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Your Online Choices
                                    </a>
                                    .
                                  </p>
                                  <br />
                                  <p className="sub-title">
                                    Locus Solutions uses both session and
                                    persistent cookies
                                  </p>
                                  <br />
                                  <table className="custom-table">
                                    <thead>
                                      <tr>
                                        <th>Category</th>
                                        <th>Examples</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p>
                                            Strictly Necessary cookies - These
                                            cookies are essential in order to
                                            enable you to move around the site
                                            and use its features, such as
                                            accessing secure areas of the site.
                                            Without these cookies, services you
                                            have asked for cannot be provided.
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            We categorize the following as
                                            Strictly Necessary cookies:
                                          </p>
                                          <ul>
                                            <li>
                                              Registered Visitor cookie – A
                                              unique identifier given to each
                                              registered user, used to recognize
                                              them through their visit and when
                                              they return to the site. (See also
                                              Functionality cookies below.)
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            Performance cookies - These cookies
                                            collect information about your visit
                                            and use of this website, for
                                            instance which pages you visit the
                                            most often, and if you get error
                                            messages from web pages. These
                                            cookies don't collect information
                                            that identifies a visitor. All
                                            information these cookies collect is
                                            anonymous and is only used to
                                            improve how this website works.
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            We categorize the following as
                                            Performance cookies:
                                          </p>
                                          <ul>
                                            <li>
                                              <p>
                                                Referrer URL (internal page) –
                                                Used to store the URL of the
                                                previous page visited. Allows us
                                                to track how visitors navigate
                                                throughout our site.
                                              </p>
                                            </li>
                                            <li>
                                              <p>
                                                Referrer URL (external page,
                                                including if you click on links
                                                on Locus Solutions social media
                                                pages) – Used to store the URL
                                                which refers a visitor to our
                                                site so we may understand which
                                                URLs are referring visitors to
                                                our site.
                                              </p>
                                            </li>
                                            <li>
                                              <p>
                                                URL history – Used to store the
                                                pages visited by a user.
                                              </p>
                                            </li>
                                            <li>
                                              <p>
                                                Unregistered Visitor cookie – A
                                                unique identifier given to each
                                                visitor to allow analysis on how
                                                unregistered visitors use our
                                                site.
                                              </p>
                                            </li>
                                            <li>
                                              <p>
                                                Session Management cookies –
                                                These cookies allow us to follow
                                                the actions of a user on our
                                                sites during a browser session.
                                                A browser session starts when a
                                                user opens the browser window,
                                                visits our sites and finishes
                                                when they leave our sites and
                                                close their browser window. Our
                                                Session Management cookies are
                                                created temporarily. Once you
                                                close your browser, our Session
                                                Management cookies are deleted.
                                              </p>
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            Functionality cookies These cookies
                                            allow a site to remember choices you
                                            make (such as your user name,
                                            language or the region you are in)
                                            and provide more enhanced, personal
                                            features. These cookies cannot track
                                            your browsing activity on other
                                            websites. They don’t gather any
                                            information about you that could be
                                            used for advertising or remembering
                                            where you’ve been on the Internet
                                            outside our site.
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            We categorize the following as
                                            Functionality cookies:
                                          </p>
                                          <ul>
                                            <li>
                                              Registered Visitor cookie – A
                                              unique identifier given to each
                                              registered user to our site, used
                                              to serve them content and offers
                                              based on their profiles. Also used
                                              for analysis and marketing
                                              purposes. (See also Strictly
                                              Necessary cookies above.)
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            Targeting cookies - These cookies
                                            are used to (1) deliver
                                            advertisements more relevant to you
                                            and your interests; (2) limit the
                                            number of times you see an
                                            advertisement; (3) help measure the
                                            effectiveness of the advertising
                                            campaign; and (4) understand
                                            people’s behavior after they view an
                                            advertisement. They are usually
                                            placed on behalf of advertising
                                            networks with the site operator’s
                                            permission. They remember that you
                                            have visited a site and quite often
                                            they will be linked to site
                                            functionality provided by the other
                                            organization.
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            Locus Solutions does not use
                                            third-party advertising on our site,
                                            so we do not use these Targeting
                                            cookies for advertising but we use
                                            them for gathering analytics and
                                            intelligence about the site.
                                          </p>
                                          <br />
                                          <p>
                                            We categorize the following as
                                            Targeting Cookies:
                                          </p>
                                          <ul>
                                            <li>
                                              <p>
                                                Gathering analytics and
                                                intelligence cookies
                                              </p>
                                            </li>
                                            <li>
                                              <p>
                                                Third Party cookies. The
                                                Targeting cookies may also be
                                                used on third party websites and
                                                third parties may use them on
                                                our websites as follows:
                                              </p>
                                              <ul>
                                                <li>
                                                  <p>
                                                    Social media sites –
                                                    Third-party social media
                                                    sites may log information
                                                    about you. This may include
                                                    activities such as when you
                                                    click an "Add This" or
                                                    "Like" button for a social
                                                    media site while on our
                                                    site. We do not control such
                                                    sites or their activities.
                                                    You may be able to find
                                                    information about social
                                                    media sites on the sites
                                                    themselves. We recommend you
                                                    read the terms of use and
                                                    privacy policy of such sites
                                                    before using them.
                                                  </p>
                                                </li>
                                                <li>
                                                  <p>
                                                    Locus Solutions
                                                    advertisements on non-Locus
                                                    Solutions sites – Cookies
                                                    may be placed on non-Locus
                                                    Solutions sites so that when
                                                    you click on an Locus
                                                    Solutions advertisement
                                                    located on these sites,
                                                    Locus Solutions is provided
                                                    with this information to
                                                    enable us to measure the
                                                    effectiveness of our
                                                    advertising
                                                  </p>
                                                </li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <br />
                                  <p className="sub-title">
                                    If you have any questions now or during your
                                    visit, please submit your request through
                                    our{" "}
                                    <Link
                                      className="text-primary pointer"
                                      to="contact-us-form"
                                    >
                                      Contact Us
                                    </Link>{" "}
                                    form.
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </Transition>
        </Layout>
      </React.Fragment>
    );
  }
}

export default CookiesPage;
