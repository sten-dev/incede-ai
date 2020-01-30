import React, { Component } from 'react';
import { httpClient } from '../../constants';
import { dashSpec } from './dashSpec';
class DashboardMain extends Component {
    sessionObj = null;
    cognosApi = null;
    expTime = null;
    dashSpec = {};
    constructor(props) {
        super(props);
        this.state = {
            window: undefined
        }
    }
    componentDidMount() {
        this.sessionCode = localStorage.getItem("sessionCode");
        this.expTime = localStorage.getItem("expTime");
        setTimeout(() => {
            this.setState({
                window: window,
            }, () => {
                if (this.sessionCode && Number(this.expTime) > new Date().getTime()) {
                    this.initializeCognosApi();
                } else {
                    this.getDashBoardSession();
                }
            });
        }, 2000);
    }
    initializeCognosApi = () => {
        this.sessionObj = null;
        this.cognosApi = null;
        if (this.state.window && this.state.window.CognosApi) {
            let window = this.state.window;
            this.cognosApi = new window.CognosApi({
                cognosRootURL:
                    "https://us-south.dynamic-dashboard-embedded.cloud.ibm.com/daas/",
                sessionCode: this.sessionCode,
                node: document.getElementById("dash")
            });
            this.cognosApi.initialize().then(() => {
                this.cognosApi.dashboard
                    .openDashboard({ dashboardSpec: dashSpec })
                    .then((dashboardAPI) => {
                        this.cognosApi.dashboardAPI = dashboardAPI;
                    }, () => {
                        this.getDashBoardSession();
                    })
                    .catch((err) => {
                        this.getDashBoardSession();
                        console.log(err);
                    });
            },
                (err) => {
                    this.getDashBoardSession();
                    console.log("Failed to create API. " + err.message);
                }
            );
        }
    }
    getDashBoardSession = async () => {
        let sessionResp = await httpClient("dash-session", "GET", undefined);
        this.sessionObj = sessionResp;
        this.sessionCode = this.sessionObj.sessionCode;
        localStorage.setItem("sessionCode", this.sessionObj.sessionCode);
        var time = new Date().getTime() + 1000 * 60 * 60 * 3;
        localStorage.setItem("expTime", time);
        this.initializeCognosApi();
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center" id="dash">
                    <br />
                    <div>
                        Dashboard Loads here
                    </div>
                    <div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DashboardMain;