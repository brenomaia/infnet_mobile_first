const Comment = ({author, comment}) => {
    return (
        <div className="comment">
            <p>{author}: {comment}</p>
        </div>
    )
}

export default Comment;