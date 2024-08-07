export default function CommentCard ({comment}) {
    return (
        <div className="comment-card">
          <h5>Author: {comment.author}</h5>
          <p>Votes: {comment.votes}</p>
          <p>Date: {new Date(comment.created_at).toLocaleString()}</p>
          <p>Body: {comment.body}</p>
        </div>
      );
    }