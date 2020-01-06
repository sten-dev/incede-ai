import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import location from "../img/location.png"
const ChatLocation = () => {
    return (
        <div className="chat-location">

            <a href={`https://www.google.com/maps/search/?api=1&query=17.369265,78.539638`} target="_blank">
                <Card>
                    <CardImg top width="100%" src={location} alt="Card image cap" />
                    <CardBody>
                        <h6 className="m-0">
                            <strong>ContentErra</strong>
                        </h6>
                        <p>
                            Prabhat Nagar, Laxmi Nagar Colony, Kothapet, Hyderabad, Telangana 500035
                    </p>
                    </CardBody>
                </Card>
            </a>
        </div>
    );
}

export default ChatLocation;