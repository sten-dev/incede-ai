import React from "react";

class Home extends React.Component {
  state = {};
  render() {
    const { home } = this.props;
    return (
      <div className="d-flex justify-content-center row">
        <div className="col-2"></div>
        <div className="col-5 d-flex flex-column justify-content-center">
          <div>
            <h1
              className=" p-2 primary-text "
              style={{
                lineHeight: "1.3"
              }}
            >
              {home.title}
            </h1>
            <h3
              className=" p-2 "
              style={{
                color: "##00000085",
                lineHeight: "1",
                fontWeight: 400
              }}
            >
              {home.subTitle}
            </h3>
            <div className="p-2">
              <button
                type="button"
                className=" btn btn-secondary btn-lg"
                // style={{ color: "#fff", backgroundColor: "" }}
              >
                {home.button} <i className="fas fa chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-5" style={{ height: "500px" }}></div>
      </div>
    );
  }
}

export default Home;
