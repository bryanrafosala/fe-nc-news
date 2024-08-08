import axios from "axios";

const getArticles = () => {
    return axios
    .get(`https://be-nc-news-lo1x.onrender.com/api/articles`)
    .then((response)=>{
        return response.data
    })
}

const getArticlesById = (article_id) =>{
    return axios
    .get(`https://be-nc-news-lo1x.onrender.com/api/articles/${article_id}`)
    .then((response)=>{
        return response.data
    })
} 

const getComments = (article_id) => {
    return axios
    .get(`https://be-nc-news-lo1x.onrender.com/api/articles/${article_id}/comments`)
    .then((response)=>{
        return response.data
    })
}

const voteArticleById = (article_id, vote) => {
    return axios
        .patch(`https://be-nc-news-lo1x.onrender.com/api/articles/${article_id}`, vote)
        .then((response) => {
            return response.data;
        });
};






export{
    getArticles,
    getArticlesById,
    getComments,
    voteArticleById
}