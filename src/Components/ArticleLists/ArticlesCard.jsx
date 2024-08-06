
export default function ArticleCard ({article}) {

   return (
<article className="article-card">
    <div className="article-container">
        <img src={article.article_img_url} alt={article.title} className="article-img"/>
        <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-author">Author: {article.author}</p>
            <p className="article-category">Category: {article.topic}</p>
            <p className="article-votes-comments">Votes: {article.votes} | Comments: {article.comment_count}</p>
            <p className="article-date">{new Date(article.created_at).toLocaleString()}</p>
        </div>
    </div>
</article>
   )
}