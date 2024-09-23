import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
   return (
      <article className="card">
         <div className="content">
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt={article.title} className="image" />
               <p className="author">Author: {article.author}</p>
               <h2 className="title">{article.title}</h2>
            </Link>
            <div className="footer">
               <p className="votes">Votes: {article.votes}</p>
               <p className="date">{new Date(article.created_at).toLocaleString()}</p>
            </div>
            <p className="category">Category: {article.topic}</p>
         </div>
      </article>
   );
}
