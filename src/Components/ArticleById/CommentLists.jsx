import { useEffect, useState } from "react";
import { getComments } from "../../api";
import CommentCard from "./CommentCard";
import "../CSS/CommentCard.css";
import PostCommentForm from "./PostCommentForm";

export default function CommentLists({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("grumpy19");

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((commentData) => {
        setComments(commentData.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return <p>Error loading comments. Please try again later.</p>;
  }

  return (
    <div className="comment-container">
      <PostCommentForm
        article_id={article_id}
        setComments={setComments}
        username={username}
      />
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          setComments={setComments}
        />
      ))}
    </div>
  );
}