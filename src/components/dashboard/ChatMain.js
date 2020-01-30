import React, { Component } from "react";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS } from "../../constants";
import {
  ListGroup,
  ListGroupItem,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap";
import "../../styles/dashboard.scss";
import ChatScreen from "./ChatScreen";
class ChatMain extends Component {
  socket;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      rooms: [],
      showChatScreen: false,
      selectedRoomId: undefined,
      selectedRoomName: undefined
    };
  }
  componentDidMount = () => {
    this.initializeScoketIo();
  };
  initializeScoketIo = () => {
    this.setState({ isLoading: true });
    let scope = this;
    this.socket = socketIO.connect(API_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });

    this.socket.on("connect", function() {
      //   console.warn("connected to server");
    });
    this.socket.emit(SOCKET_PATHS.CONNECT_ROOMS, {});
    this.socket.on(SOCKET_PATHS.GET_ROOMS, response => {
      let rooms = [];
      response.forEach(d => rooms.push({ id: d.id, title: d.title }));
      scope.setState({ rooms: rooms, isLoading: false });
    });
    this.socket.on(SOCKET_PATHS.NEW_ROOMS, response => {
      //   console.log("NEW_ROOMS => ", response);
      let rooms = this.state.rooms;
      let isFound = rooms.find(d => d.id === response.id);
      if (!isFound) scope.setState({ rooms: [response, ...rooms] });
    });
  };

  openCloseChatScreen = (roomId, roomName) => {
    // this.setState({ isLoading: true });
    this.setState({
      showChatScreen: roomId ? true : false,
      selectedRoomId: roomId,
      selectedRoomName: roomName
    });
  };

  render() {
    console.log("rooms", this.state.rooms);
    return (
      <React.Fragment>
        <div className="chat-main">
          <Breadcrumb>
            {!this.state.showChatScreen ? (
              <BreadcrumbItem>Active Rooms</BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <Button
                  onClick={() => this.openCloseChatScreen()}
                  size="sm"
                  outline
                  color="info"
                >
                  Back
                </Button>
              </BreadcrumbItem>
            )}
          </Breadcrumb>

          {this.state.isLoading && (
            <div className="text-center">
              <Spinner size="lg" type="grow" />
            </div>
          )}
          {!this.state.showChatScreen ? (
            <div>
              {!this.state.isLoading && this.state.rooms.length === 0 && (
                <div> No Rooms found </div>
              )}
              <ListGroup>
                {this.state.rooms.map(room => (
                  <ListGroupItem
                    key={room.id}
                    onClick={() =>
                      this.openCloseChatScreen(room.id, room.title)
                    }
                    className="pointer"
                    action
                  >
                    {room.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          ) : (
            <ChatScreen
              roomId={this.state.selectedRoomId}
              roomName={this.state.selectedRoomName}
              socket={this.socket}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ChatMain;
