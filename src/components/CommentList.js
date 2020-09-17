import React from "react";
import Comments from "../components/Comments";
import "./CommentList.css";
export default function CommentList(props) {
  return (
    <div className="commentlist">
      {props.comments && props.comments.length > 0 ? (
        <div>
          <h5 className="post">
            <span className="comment">{props.comments.length}</span> Comment
            {props.comments.length > 0 ? "s" : ""}
          </h5>

          {props.comments.length === 0 ? <div></div> : null}

          {props.comments.map((comment, index) => (
            <Comments
              key={index}
              comment={comment}
              handleUpdateComment={props.handleUpdateComment}
              handleDeleteComment={props.handleDeleteComment}
              commentIndex={index}
              handleEditComment={props.handleEditComment}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
