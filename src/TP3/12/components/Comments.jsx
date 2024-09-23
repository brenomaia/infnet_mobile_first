const Comments = ({ comments }) => {
    return (
        <div className="comments">
            <h3>Comentários</h3>
            {comments.map((comment) => (
                <div className="comment">
                    <p className="comment-title">{comment.author} - {comment.date}</p>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments;