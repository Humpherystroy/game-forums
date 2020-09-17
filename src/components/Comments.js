import React from "react";
import "./Comments.css";
export default function Comment(props) {
  const { name, message } = props.comment;

  return (
    <div className="comments">
      <div className="">
        <h2 className="name">{name}</h2> <h3 className="message">{message}</h3>
        <button
          className="buttons"
          onClick={() =>
            props.handleEditComment(props.comment, props.commentIndex)
          }
        >
          EDIT
        </button>
        <button
          className="buttons"
          onClick={() => props.handleDeleteComment(props.commentIndex)}
        >
          X
        </button>
      </div>
    </div>
  );
}
