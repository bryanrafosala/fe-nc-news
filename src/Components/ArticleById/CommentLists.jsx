import { useEffect, useState } from "react";
import { getComments } from "../../api";
import CommentCard from "./CommentCard";
import "../CSS/CommentCard.css";

export default function CommentLists({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((commentData) => {
      setComments(commentData.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="comment-container">
        {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} setComments={setComments}/>
        ))}
    </div>
  );
}

