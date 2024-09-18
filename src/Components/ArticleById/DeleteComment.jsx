import { deleteCommentApi } from "../../api";
import { useState } from "react";

export default function DeleteComment({
  comment_id,
  setComments,
  username,
  authors,
}) {
  const [isError, setIsError] = useState(false);

  function handleDeleteComment() {
    deleteCommentApi(comment_id)
      .then(() => {
        setComments((current) => {
          const updatedComments = current.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
          return updatedComments;
        });
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  const isAuthor = authors.includes(username);

  if (isAuthor) {
    return (
      <div>
        <button id="delete-button" onClick={handleDeleteComment}>
          Delete
        </button>
        {isError && <p>Sorry, there was a problem deleting the comment.</p>}
      </div>
    );
  } else {
    return null;
  }
}
