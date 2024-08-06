import axios from "axios";

const getArticles = () => {
    return axios
    .get(`https://be-nc-news-lo1x.onrender.com/api/articles`)
    .then((response)=>{
        return response.data
    })
}

export{
    getArticles
}