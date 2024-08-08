export default function CommentCard ({comment}) {
    return (
        <div className="comment-card">
          <h5>{comment.author}</h5>
          <p>Votes: {comment.votes}</p>
          <p>{new Date(comment.created_at).toLocaleString()}</p>
          <p>{comment.body}</p>
        </div>
      );
    }