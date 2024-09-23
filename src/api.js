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

const postCommentApi = (comment, article_id) => {
    return axios.post(
      `https://be-nc-news-lo1x.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
  };

const deleteCommentApi = (comment_id) => {
    return axios.delete(
        `https://be-nc-news-lo1x.onrender.com/api/comments/${comment_id}`
    );
};

const getUserByUsername = (username) => {
    return axios
      .get(`https://be-nc-news-lo1x.onrender.com/api/users/${username}`)
      .then((response) => {
        return response.data.user;
      })
      .catch((error) => {
        throw error
      });
  }


export{
    getArticles,
    getArticlesById,
    getComments,
    voteArticleById,
    postCommentApi,
    deleteCommentApi,
    getUserByUsername
}