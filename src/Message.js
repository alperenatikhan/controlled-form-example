import React from "react";

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
          <span style={{ color: "blue" }}> Name : </span> {this.props.firstname}{" "}
          {this.props.surname}
        </p>
        {this.props.email && (
          <p>
            {" "}
            <span style={{ color: "blue" }}> Email : </span> {this.props.email}{" "}
          </p>
        )}
      </div>
    );
  }
}

export default Message;
