import React, { useState } from "react";
import { Container, Row, Col, Button, Input, Nav, NavItem, NavLink } from "reactstrap";
import NewsList from "../../pages/news/NewsList";
import BlogsList from "../../pages/blogs/BlogsList";
import NewsSliderComponent from "./NewsSlider";
import EventsList from "../../pages/events/EventsList";

const NewsAndBlog = () => {
  const [activeTab, setActiveTab] = useState("All");


  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <>
      {/* Full-width section */}
      <section className="bg-primary py-4">
        <Container>
          <Row >
            <Col md="12">
              <h1 className="text-light">News & Blogs</h1>
            </Col>
          </Row>

          {/* New line below heading */}
          <Row className="mb-2">
            <Col md="12">
              <h4 className="text-light">
                Quick company updates and in-depth analysis — switch between short news and long-form blogs using the tabs.
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <NewsSliderComponent />
            </Col>
          </Row>
        </Container>
      </section>


      <Container>
        <Row>
          {/* News Section */}
          <Col md="6">
            <NewsList />
          </Col>

          {/* Blogs Section */}
          <Col md="6" className="mb-4">
            
            <BlogsList />
          </Col>
        </Row>

        <Row className="mb-4">
          <EventsList />
        </Row>
      </Container>
    </>

  );
};

export default NewsAndBlog;