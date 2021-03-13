import React from "react";


class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fullMessage">
       <p> {this.props.email} </p>
      </div>
    );
  }
}

export default Message;