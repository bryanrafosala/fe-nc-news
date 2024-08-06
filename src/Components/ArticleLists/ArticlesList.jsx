import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticlesCard";
import '../CSS/ArticleCard.css';


export default function ArticlesLists() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then(({ articles }) => {
            setArticles(articles);
        });
    }, []);

    return (
        <div className="articles-lists-div">
            <ul className="article-list">
                {articles.map((article) => {
                    return <ArticleCard key={article.article_id} article={article}/>;
                })}
            </ul>
        </div>
    );
}