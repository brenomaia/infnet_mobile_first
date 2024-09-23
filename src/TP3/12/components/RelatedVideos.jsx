const RelatedVideos = ({ videos }) => {
    return (
        <div class="related-videos-container">
            <h3>Vídeos Relacionados</h3>
            {videos.map((video) => (
                <div class="related-videos">
                    <img src={video.imgPath} alt="video-placeholder" />
                    <h4>{video.title}</h4>
                    <h5>{video.author}</h5>
                </div>
            ))}
        </div>
    )
}

export default RelatedVideos;