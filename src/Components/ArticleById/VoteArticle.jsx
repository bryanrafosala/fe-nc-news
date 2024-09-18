import React from "react";
import { IoMdThumbsUp } from "react-icons/io";
import "../CSS/Vote.css"; // Ensure this CSS file exists

export default function VoteArticle({ votes, hasVoted, upVote }) {
  return (
    <div className="vote-wrapper">
      <button
        onClick={upVote}
        className={`vote-button ${hasVoted ? 'voted' : ''}`}
        aria-pressed={hasVoted}
        title={hasVoted ? "You have already voted" : "Upvote this article"}
      >
        <IoMdThumbsUp className="vote-icon" />
      </button>
      <h3 className="vote-count">{votes}</h3>
    </div>
  );
}

