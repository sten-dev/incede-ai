import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import TextToSpeech from "./wa-api-services/TextToSpeech";
import SpeechToText from "./wa-api-services/SpeechToText";
import NaturalLanguageClassifier from "./wa-api-services/NaturalLanguageClassifier";
import PersonalityInsights from "./wa-api-services/PersonalityInsights";
import ToneAnalyzer from "./wa-api-services/ToneAnalyzer";
import VisualRecognition from "./wa-api-services/VisualRecognition";
import LanguageTranslator from "./wa-api-services/LanguageTranslator";
class WatsonApi extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  handleChange = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const apiSubItems = [
      {
        image: "/img/watson-api/text-to-speech.png",
        inactiveImage: "/img/watson-api/text-to-speech-inactive.png",
        title: "Text to speech"
      },
      {
        image: "/img/watson-api/text-to-speech.png",
        inactiveImage: "/img/watson-api/text-to-speech-inactive.png",
        title: "Speech to Text"
      },
      {
        image: "/img/watson-api/speech-to-text.png",
        inactiveImage: "/img/watson-api/speech-to-text-inactive.png",
        title: "Language Translator"
      },
      {
        image: "/img/watson-api/natural-language-classifier.png",
        inactiveImage:
          "/img/watson-api/natural-language-classifier-inactive.png",
        title: "Natural Language Classifier"
      },
      {
        image: "/img/watson-api/personality-insights.png",
        inactiveImage: "/img/watson-api/personality-insights-inactive.png",
        title: "Personality Insights"
      },
      {
        image: "/img/watson-api/tone-analyzer.png",
        inactiveImage: "/img/watson-api/tone-analyzer-inactive.png",
        title: "Tone Analyzer"
      },
      {
        image: "/img/watson-api/visual-recognition.png",
        inactiveImage: "/img/watson-api/visual-recognition-inactive.png",
        title: "Visual Recognition"
      }
    ];
    return (
      <section className="services-content gap-y-half pb-0" id="3">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title text-primary text-uppercase">
                  <b>Watson API</b>
                </h1>
                <p>
                  <b className="text-grey">
                    When competitive advantage requires custom AI applications,
                    Incede has the expertise.
                  </b>
                </p>
                <p>
                  Incede infuses Watson AI capabilities into applications for a
                  deeper user experience and richer insights for
                  decision-makers. For example, Incede solutions could integrate
                  a conversational AI solution where a user provides a question
                  in any number of natural languages, including speech, and
                  shares a photo that is then evaluated and answered with the
                  context of the user’s order history, sentiment, inquiry and
                  specifics about their photo – in their preferred language,
                  including voice.
                </p>
              </div>
            </Col>
          </Row>
          <div className="wwd-list custom-services-img d-flex flex-nowrap">
            {apiSubItems.map((x, i) => {
              let data = x;
              return (
                <div
                  key={i}
                  className="wwd-list-card api-services-cards mb-0"
                >
                  <ServicesSmallCardsList
                    service={data}
                    index={i}
                    isActive={this.state.activeIndex === i ? true : false}
                    onItemClick={index => this.handleChange(index)}
                  />
                  {/* <SolutionView solution={solution} path={path} /> */}
                </div>
              );
            })}
          </div>
        </Container>
        <Container
          fluid
          style={{ background: "rgba(122, 121, 121, 0.06)" }}
          className="gap-y"
        >
          <Row>
            <Col xs={12}>
              {this.state.activeIndex === 0 && <TextToSpeech />}
              {this.state.activeIndex === 1 && <SpeechToText />}
              {this.state.activeIndex === 2 && <LanguageTranslator />}
              {this.state.activeIndex === 3 && <NaturalLanguageClassifier />}
              {this.state.activeIndex === 4 && <PersonalityInsights />}
              {this.state.activeIndex === 5 && <ToneAnalyzer />}
              {this.state.activeIndex === 6 && <VisualRecognition />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WatsonApi;
