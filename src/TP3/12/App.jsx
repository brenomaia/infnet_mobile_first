import Menu from "./components/Menu"
import Video from "./components/Video"
import Ads from "./components/Ads"
import RelatedVideos from "./components/RelatedVideos"
import Comments from "./components/Comments"

export default function App() {
    const ads = [
        {imgPath: "../../assets/airpods.png"},
        {imgPath: "../../assets/iphone.png"}
    ]

    const relatedVideos = [
        {
            imgPath: "../../assets/video-placeholder.png",
            title: "Video 1",
            author: "Autor 1"
        },
        {
            imgPath: "../../assets/video-placeholder.png",
            title: "Video 2",
            author: "Autor 2"
        },
        {
            imgPath: "../../assets/video-placeholder.png",
            title: "Video 3",
            author: "Autor 3"
        }
    ]

    const comments = [
        {
            author: "Breno",
            date: "2024-01-01",
            text: "Legal o vídeo"
        },
        {
            author: "Hugo",
            date: "2024-01-01",
            text: "Péssimo vídeo"
        },
        {
            author: "Marina",
            date: "2024-01-01",
            text: "Achei ok"
        }
    ]

    return (
        <>
            < Menu />

            < Video 
            videoPath="../../assets/codando.mp4" 
            title="Video codando" 
            author="Autor" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt reprehenderit dolores blanditiis labore doloremque natus culpa unde maiores! Nulla voluptates incidunt suscipit ipsa magni laboriosam a quasi eligendi iure distinctio?"
            />

            < Ads ads={ads}/>

            < RelatedVideos videos={relatedVideos}/>

            < Comments comments={comments} />
        </>
    )
}