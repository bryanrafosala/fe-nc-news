import DeleteComment from "./DeleteComment";  

export default function CommentCard({ comment, setComments, username }) {
    const authors = [comment.author]; 

    return (
        <div className="comment-card">
          <h5>{comment.author}</h5>
          <p className="timestamp">{new Date(comment.created_at).toLocaleString()}</p>
          <p>{comment.body}</p>
          <p className="votes">Votes: {comment.votes}</p>

          
          <DeleteComment
            comment_id={comment.comment_id}
            setComments={setComments}
            username={username}
            authors={authors} 
          />
        </div>
    );
}
