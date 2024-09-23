const Video = ({videoPath, title, author, description }) => {
    return (
        <div class="video-container">
        <div class="video">
            <video class="main-video" src={videoPath} controls></video>
        </div>
        <div class="video-info-container">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
        </div>

        <div class="video-actions">
            <button>Curtir</button>
            <button>Compartilhar</button>
            <button>Salvar</button>
            <button>Denunciar</button>
        </div>
    </div>
    )
}

export default Video;