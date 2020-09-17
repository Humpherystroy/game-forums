import React, { Component } from "react";
import "./CommentForm.css";
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",

      comment: {
        name: "",
        message: "",
      },
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleFieldChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  };

  onSubmit(e) {
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    this.setState({ error: "" });

    let { comment } = this.state;
    this.props.addComment(comment);
  }

  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              placeholder=" Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              placeholder=" Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div>
            <button className="button">Comment</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
