import styles from "./Gallery.module.css"

const Image = () => {
    return (
        <div className="image">
            <img src="../../assets/image-placeholder.png" alt="image placeholder"></img>
        </div>
    )
}

const Gallery = ({ imageCount }) => {
    let images = []

    for (let index = 0; index < imageCount; index++) {
        images.push(<Image key={index} />)
    }

    return (
        <div className={styles.image}>
            {images}
        </div>
    )
}

export default Gallery;