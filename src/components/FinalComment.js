import React, { Component } from "react";
import "./FinalComment.css";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

class FinalComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };

    this.addComment = this.addComment.bind(this);
  }
  componentDidMount() {
    this.setState({ comments: this.props.game.comments });
  }

  addComment(comment) {
    this.props.handleCreateComment(comment);
  }

  render() {
    return (
      <div className="container">
        <header className="review">
          <h1> REVIEWS</h1>
        </header>

        <div className="row">
          <div className="form">
            <h4>Comment about this Game</h4>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="comment-list">
            <CommentList
              comments={this.state.comments}
              handleUpdateComment={this.props.handleUpdateComment}
              handleDeleteComment={this.props.handleDeleteComment}
              handleEditComment={this.props.handleEditComment}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default FinalComment;
