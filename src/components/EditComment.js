import React from "react";
import "./EditComment.css";

function EditComment({
  handleCloseModal,
  existingComment,
  handleUpdateComment,
}) {
  const [name, setName] = React.useState(
    existingComment ? existingComment.name : ""
  );
  const [message, setMessage] = React.useState(
    existingComment ? existingComment.message : ""
  );
  const [errors, setErrors] = React.useState({
    name: null,
    message: null,
  });
  function handleSubmit(event) {
    event.preventDefault();

    const errors = {
      name: null,
      message: null,
    };
    if (name.length === 0) {
      errors.name = "COMMENT CANNOT BE EMPTY";
    }

    if (errors.name) {
      setErrors(errors);
      return;
    }
    if (message.length === 0) {
      errors.message = "COMMENT CANNOT BE EMPTY";
    }

    if (errors.message) {
      setErrors(errors);
      return;
    }

    if (existingComment) {
      const newComment = {
        name,
        message,
      };
      handleUpdateComment(newComment, existingComment.index);
    }
  }

  return (
    <div className="add-edit-comment-form">
      <h1>Edit Comment</h1>
      <form onSubmit={handleSubmit} classcomment="comment-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "invalid" : ""}
          />
          {errors.name ? <span className="required">{errors.name}</span> : null}
        </label>
        <label>
          Message
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? "invalid" : ""}
          />
          {errors.message ? (
            <span className="required">{errors.message}</span>
          ) : null}
        </label>
        <button>{"Save & Close"}</button>
      </form>
      <button onClick={handleCloseModal}>CLOSE</button>
    </div>
  );
}

export default EditComment;
