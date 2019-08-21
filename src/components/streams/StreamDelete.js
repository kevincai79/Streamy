import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button primary">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete:  ${this.props.stream.title}?`;
  }

  render() {
    // const actions = (
    //   <React.Fragment>
    //     <button
    //       onClick={() => this.props.deleteStream(this.props.match.params.id)}
    //       className="ui button negative"
    //     >
    //       Delete
    //     </button>
    //     <button onClick={() => history.push("/")} className="ui button primary">
    //       Cancel
    //     </button>
    //   </React.Fragment>
    // );

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (st, own) => {
  return { stream: st.streams[own.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
