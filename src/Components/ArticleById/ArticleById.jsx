import { getArticlesById } from "../../api";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../CSS/ArticleById.css";
import CommentLists from "./CommentLists";

export default function ArticleById() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id).then((ArticleData) => {
      setArticle(ArticleData.article);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="articleById-div-container">
      <article>
        <div className="articlebyid-container">
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
          <p className="article-votes-comments">Votes : {article.votes}</p>
          <p>{article.body}</p>
          <CommentLists article_id={article_id} />

        </div>
      </article>
      <div className="comment-container">
        {/* <CommentLists article_id={article_id} /> */}
      </div>
    </div>
  );
}
