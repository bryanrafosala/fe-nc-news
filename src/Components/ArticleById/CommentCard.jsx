import DeleteComment from "./DeleteComment";  

export default function CommentCard({ comment, setComments, username }) {
    const authors = [comment.author]; 

    return (
        <div className="comment-card">
          <h5>{comment.author}</h5>
          <p>Votes: {comment.votes}</p>
          <p>{new Date(comment.created_at).toLocaleString()}</p>
          <p>{comment.body}</p>
          
          <DeleteComment
            comment_id={comment.comment_id}
            setComment={setComments}
            username={username}
            authors={authors} 
          />
        </div>
    );
}