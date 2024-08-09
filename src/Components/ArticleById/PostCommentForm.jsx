import { useState } from "react";
import { useParams } from "react-router";
import { postCommentApi } from "../../api";

export default function PostCommentForm({ setComments, username }) {
  const [isValidForm, setIsValidForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [isError, setIsError] = useState(false);

  const { article_id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIsError(false);

    if (!commentInput) {
      setIsValidForm(false);
      return;
    }

    const commentInfo = {
      username: username,
      body: commentInput,
    };

    setIsLoading(true);

    postCommentApi(commentInfo, article_id)
      .then(({ data }) => {
        setIsLoading(false);
        setCommentInput("");
        setComments((existingComments) => [
          data.comment,
          ...existingComments,
        ]);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }

  function handleChange(event) {
    setIsValidForm(true);
    setCommentInput(event.target.value);
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>{isLoading ? "Posting your comment..." : "Add comment"}</h3>
      <textarea
        className="comment-input"
        placeholder="Type here..."
        autoComplete="off"
        disabled={isLoading}
        value={commentInput}
        onChange={handleChange}
      ></textarea>
      <button
        id="post-button"
        className="comment-button"
        disabled={isLoading || !commentInput}
      >
        {isLoading ? "Posting..." : "Post"}
      </button>
      {!isValidForm && (
        <p className="comment-error" id="write-something">
          Please write something before posting.
        </p>
      )}
      {isError && (
        <p className="comment-error">
          Comment failed to post. Please try again.
        </p>
      )}
    </form>
  );
}