import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // Below approach uses Router and extract the history object
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  //   Below approach use BrowserRouter
  //   onSubmit = formValues => {
  //     this.props.createStream(formValues, () => {
  //       this.props.history.push("/");
  //     });
  //   };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
