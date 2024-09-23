const Reviews = ({ reviews }) => {
    return (
        <div id="reviews" class="reviews-container">
            <h3>Comentários</h3>
            {reviews.map((review) => (
                <div class="review-container">
                    <p>{review.author}</p>
                    <p>{review.date}</p>
                    <p>{review.comment}</p>    
                </div>
            ))}
        </div>
    )
}

export default Reviews;