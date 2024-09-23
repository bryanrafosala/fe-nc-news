import { getArticlesById, voteArticleById } from "../../api";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../CSS/ArticleById.css";
import CommentLists from "./CommentLists";
import VoteArticle from "./VoteArticle";

export default function ArticleById() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id).then((ArticleData) => {
      setArticle(ArticleData.article);
      setVotes(ArticleData.article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const upVote = () => {
    if (hasVoted) return;

    setHasVoted(true);
    const newVotes = votes + 1;
    setVotes(newVotes);

    const vote = { inc_votes: 1 };
    voteArticleById(article_id, vote)
      .then()
      .catch((err) => {
        setVotes(votes);
        setHasVoted(false);
      });
  };

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="articleById-div-container">
      <article>
        <div className="articleById-container">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-date">
            {new Date(article.created_at).toLocaleString()}
          </p>
          <p className="article-author">Author: {article.author}</p>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="article-img"
          />
          <p className="article-votes-comments">Category: {article.topic}</p>
          <p className="article-body">{article.body}</p>
          <VoteArticle votes={votes} hasVoted={hasVoted} upVote={upVote} />

          <div className="comment-container">
            <CommentLists article_id={article_id} />
          </div>
        </div>
      </article>
    </div>
  );
}
