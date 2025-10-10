import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import { Container } from "reactstrap"
import { Card, CardBody, Button } from "reactstrap"
import React from "react"
export const EventsTemplate = ({ title, description, speakers, date, duration, helmet, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const COLORS = {
    primary: "#0f62fe",
    primaryDark: "#0d2a5b",
    textMuted: "#6b7280",
    border: "rgba(13, 98, 254, 0.15)",
    statusBg: "rgba(13, 98, 254, 0.08)",
    statusText: "#0f62fe",
    cardShadow: "0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.1)",
  }

  const eventDate = new Date(date)
  const now = new Date()
  const isUpcoming = eventDate > now

  return (
    <section>
      {helmet || ""}
      <Container style={{ maxWidth: 800, paddingTop: 40, paddingBottom: 40 }}>
        <Card
          style={{
            borderRadius: 12,
            border: `1px solid ${COLORS.border}`,
            boxShadow: COLORS.cardShadow,
            position: "relative",
          }}
        >
          {isUpcoming && (
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: COLORS.statusBg,
                color: COLORS.statusText,
                padding: "6px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Upcoming
            </div>
          )}

          <CardBody style={{ padding: 20 }}>
            {/* Title */}
            <h3
              style={{
                margin: 0,
                marginBottom: 6,
                color: COLORS.primaryDark,
                fontWeight: 800,
                fontSize: 22,
                lineHeight: 1.3,
              }}
            >
              {title}
            </h3>

            {/* Date/Time */}
            <div
              style={{
                color: COLORS.textMuted,
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              {formatDateTime(date)}
            </div>

            {/* Duration */}
            {duration && (
              <div
                style={{
                  color: COLORS.textMuted,
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                <span>Duration: {duration}</span>
              </div>
            )}

            {/* Description */}
            {description && (
              <p
                style={{
                  margin: 0,
                  marginBottom: 12,
                  color: "#0f172a",
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            )}

            {/* Speakers */}
            {/* {speakers && (
              <div
                style={{
                  marginBottom: 12,
                }}
              >
                <span style={{ fontWeight: 400 }}>Speakers: </span>
                <span>{speakers}</span>
              </div>
            )} */}

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: 10,
              }}
            >
              <Button
                style={{
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.primary,
                  color: "#ffffff",
                  borderRadius: 8,
                  padding: "10px 16px",
                  fontWeight: 700,
                }}
              >
                Register
              </Button>
              <Button
                outline
                style={{
                  backgroundColor: "transparent",
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                  borderRadius: 8,
                  padding: "10px 16px",
                  fontWeight: 700,
                }}
              >
                Add to Calendar
              </Button>
            </div>

            {/* Footer links */}
            <div style={{ display: "flex", gap: 16, color: COLORS.textMuted, fontSize: 14 }}>
              <a href="#" style={{ color: COLORS.textMuted, textDecoration: "none" }}>
                Share
              </a>
              <a href="#" style={{ color: COLORS.textMuted, textDecoration: "none" }}>
                Save
              </a>
            </div>
          </CardBody>
        </Card>

        {content && (
          <div style={{ marginTop: 40 }}>
            <PageContent content={content} />
          </div>
        )}
      </Container>
    </section>
  )
}

EventsTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  speakers: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Events = ({ data }) => {
  const { markdownRemark: event } = data

  return (
    <Layout pageTitle="Events | Incede">
      <EventsTemplate
        helmet={
          <Helmet titleTemplate="%s | Events">
            <title>{`${event.frontmatter.title}`}</title>
            <meta name="description" content={`${event.frontmatter.description}`} />
          </Helmet>
        }
        title={event.frontmatter.title}
        description={event.frontmatter.description}
        speakers={event.frontmatter.speakers}
        date={event.frontmatter.date}
        duration={event.frontmatter.duration}
        content={event.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

Events.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Events

export const pageQuery = graphql`
  query EventsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`
