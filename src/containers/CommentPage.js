import React from "react";
import EditModal from "../components/EditModal";
import EditComment from "../components/EditComment";
import "./CommentPage.css";
import { updateGame, getGame } from "../GameService";
import FinalComment from "../components/FinalComment";

function CommentPage(props) {
  const gameId = props.match.params.gameId;
  const [game, setGame] = React.useState(null);
  React.useEffect(() => {
    getGame(gameId)
      .then((response) => {
        const game = response.data;
        setGame(game);
      })
      .catch((error) => {
        alert(`No Game '${gameId}}' exists!`);
        props.history.push("/");
      });
  }, [gameId]);

  const [
    isShowingEditCommentModal,
    setIsShowingEditCommentModal,
  ] = React.useState(false);

  const [currentComment, setCurrentComment] = React.useState(null);

  function handleCloseModal() {
    setIsShowingEditCommentModal(false);
  }

  function handleCreateComment(comment) {
    const comments = game.comments ? game.comments : [];
    comments.push(comment);
    const payload = {
      title: game.title,
      imageUrl: game.imageUrl,
      comments,
    };
    updateGame(game._id, payload)
      .then((response) => {
        getGame(gameId)
          .then((response) => {
            const game = response.data;
            setGame(game);
          })
          .catch((error) => {
            alert(`No Game '${gameId}}' exists!`);
            props.history.push("/");
          });
        alert("SUCCESFULLY Posted comment");
      })
      .catch((error) => {
        alert(error);
      });
  }
  function handleEditComment(comment, commentIndex) {
    const editComment = {
      ...comment,
      index: commentIndex,
    };

    setCurrentComment(editComment);
    setIsShowingEditCommentModal(true);
  }

  function handleUpdateComment(comment, commentIndex) {
    const comments = game.comments ? game.comments : [];
    comments[commentIndex] = comment;
    const payload = {
      title: game.title,
      imageUrl: game.imageUrl,
      comments,
    };

    updateGame(game._id, payload)
      .then((response) => {
        setIsShowingEditCommentModal(false);
        getGame(gameId)
          .then((response) => {
            const game = response.data;
            setGame(game);
          })
          .catch((error) => {
            alert(`No Game '${gameId}}' exists!`);
            props.history.push("/");
          });
        alert("SUCCESSFULLY UPDATED COMMENT");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleDeleteComment(commentIndex) {
    const comments = game.comments ? game.comments : [];
    comments.splice(commentIndex, 1);
    const payload = {
      title: game.title,
      imageUrl: game.imageUrl,
      comments: comments,
    };
    updateGame(game._id, payload)
      .then((response) => {
        getGame(gameId)
          .then((response) => {
            const game = response.data;
            setGame(game);
          })
          .catch((error) => {
            alert(`No Game '${gameId}}' exists!`);
            props.history.push("/");
          });
        alert("SUCCESSFULLY DELETED COMMENT");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="comment-page">
      {game ? (
        <>
          <h1 className="game">{game.name}</h1>
          <img
            className="img"
            src={`/thumbnails/${game.imageUrl}`}
            alt={game.name}
            onError={(e) => (e.target.src = "/no-image.jpg")}
          />
          <FinalComment
            game={game}
            handleCreateComment={handleCreateComment}
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
            handleEditComment={handleEditComment}
          />
        </>
      ) : null}
      {isShowingEditCommentModal ? (
        <EditModal>
          <EditComment
            existingComment={currentComment}
            handleCloseModal={handleCloseModal}
            handleUpdateComment={handleUpdateComment}
          />
        </EditModal>
      ) : null}
    </div>
  );
}

export default CommentPage;
