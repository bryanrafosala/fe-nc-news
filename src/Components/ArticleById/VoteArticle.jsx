import React from "react";

export default function VoteArticle({ votes, hasVoted, upVote }) {
  return (
    <div>
      <div onClick={upVote} className="badge badge-primary">
        👍
      </div>
      <p>Votes: {votes}</p>
    </div>
  );
}
