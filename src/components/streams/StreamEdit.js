import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValue => {
    this.props.editStream(this.props.match.params.id, formValue);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      if (this.props.userId === this.props.stream.userId) {
        return (
          <div>
            <h3>Edit Stream</h3>
            <StreamForm
              onSubmit={this.onSubmit}
              initialValues={_.pick(this.props.stream, "title", "description")}
            />
          </div>
        );
      } else {
        return (
          <div
            style={{
              width: "100%",
              backgroundColor: "red",
              textAlign: "center",
              fontSize: "1.2em",
              color: "white"
            }}
          >
            Only the author can edit this post!
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);

  return {
    stream: state.streams[ownProps.match.params.id],
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
