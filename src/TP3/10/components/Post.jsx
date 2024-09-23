import "../post.css"
import Comment from "./Comment"

const Post = ({ author, postTitle, likes, shares, description, date, comments, authorImg = "../../assets/image-placeholder.png" }) => {
    return (
        <div className="post-container">
            <img className="post-img" src={authorImg}></img>
            <h4 className="postTitle">{postTitle}</h4>
            <h4 className="post-author">{author}</h4>
            <p className="post-description">{description}</p>
            <p>Curtidas: {likes}</p>
            <p>Compartilhamentos: {shares}</p>
            <p>{date}</p>
            {comments.map((comment) => < Comment author={comment.author} comment={comment.comment} />)}
        </div>
    )
}

export default Post;