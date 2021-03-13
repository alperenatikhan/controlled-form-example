import React from "react";
import "./message.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fullMessage">
        <h2>Your Request</h2>
        <p>
          {" "}
          <span> Name : </span> {this.props.firstname}{" "}
          {this.props.surname}
        </p>
        {this.props.email && (
          <p>
            {" "}
            <span> Email : </span> {this.props.email}{" "}
          </p>
        )}
      </div>
    );
  }
}

export default Message;
