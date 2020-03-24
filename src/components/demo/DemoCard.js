import * as React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";


const DemoCard = (props) => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-0"> {props.data.NAME} </CardTitle>
                    <p className="m-0 text-black-50">{props.data.DESCRIPTION}</p>
                    <br />
                    <div>
                        <a
                            className="btn btn-outline-secondary text-decoration-none custom-anchor-button"
                            href={`/demos/custom-demo?demoId=${props.data.ID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Launch Demo
                        </a>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default DemoCard;
