import React, { Component } from "react";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS } from "../../constants";
import { exitRoomChats } from "../../../Service";
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
import { Loading } from "../ReuseableComponents";
class ChatMain extends Component {
  socket;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      rooms: [],
      showChatScreen: false,
      selectedRoomId: undefined,
      selectedRoomName: undefined,
      roomJoinedIds: []
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
    this.setState(
      {
        showChatScreen: roomId ? true : false,
        selectedRoomId: roomId,
        selectedRoomName: roomName
      },
      () => this.props.handleRoomChange(this.state.selectedRoomId)
    );
  };

  updateRoomJoinedIds = (roomId, type) => {
    roomId = Number(roomId);
    let roomJoinedIds = this.state.roomJoinedIds;
    if (type === "joined") {
      roomJoinedIds.push(roomId);
      this.setState({ roomJoinedIds: roomJoinedIds });
      //   console.warn('joined', this.state.roomJoinedIds);
    } else {
      roomJoinedIds = roomJoinedIds.filter(d => d !== roomId);
      let rooms = this.state.rooms.filter(d => d.id !== roomId);
      this.setState(
        { roomJoinedIds: roomJoinedIds, rooms: rooms },
        this.openCloseChatScreen
      );
    }
  };

  disconnectChat = async () => {
    let result = await exitRoomChats({
      roomId: this.state.selectedRoomId
    });
    if (result && result.success) {
      let data = {
        comment: "Our agent has disconnected",
        roomName: this.state.selectedRoomName,
        senderType: "agent",
        roomId: this.state.selectedRoomId
      };
      this.socket.emit(SOCKET_PATHS.CONNECT, data);
      this.updateRoomJoinedIds(this.state.selectedRoomId);
      // this.setState({ isCLoading: false });
      //   this.props.navigation.goBack();
    } else {
      // this.props.snackBar.show("Error while exiting room", "error");
      // this.setState({ isCLoading: false });
    }
  };

  render() {
    console.log("roomsJoined", this.state.roomJoinedIds);
    return (
      <React.Fragment>
        <div className="chat-main">
          <Breadcrumb className="custom-breadcrumb">
            {!this.state.showChatScreen ? (
              <BreadcrumbItem>Active Rooms</BreadcrumbItem>
            ) : (
              <>
                <Button
                  onClick={() => this.openCloseChatScreen()}
                  size="sm"
                  outline
                  color="info"
                >
                  Back
                </Button>
                {this.state.roomJoinedIds.find(
                  roomId => roomId === this.state.selectedRoomId
                ) && (
                  <Button
                    color="link"
                    style={{ color: "#ff6347" }}
                    onClick={this.disconnectChat}
                  >
                    DISCONNECT
                  </Button>
                )}
              </>
            )}
          </Breadcrumb>

          {this.state.isLoading && (
            <div className="text-center">
              <Loading />
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
              updateRoomJoinedIds={this.updateRoomJoinedIds}
              roomJoined={
                this.state.roomJoinedIds.find(
                  roomId => roomId === this.state.selectedRoomId
                )
                  ? true
                  : false
              }
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ChatMain;
