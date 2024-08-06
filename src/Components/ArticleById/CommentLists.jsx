import { useEffect } from "react"


export default function CommentLists ({}){
    const [comments, setComments] = useState([])

    useEffect(article_id).then((CommentData)=>{
        setComments(CommentData.comments)
        console.log(comments)
    })


}