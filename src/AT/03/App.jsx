import { useState } from "react"
import ImageControl from "./components/ImageControl"
import Gallery from "./components/Gallery"
import "./main.css"

export default function App() {
    const [imageCount, setImageCount] = useState(1);

    const onIncrease = () => {
        setImageCount(imageCount + 1);
    }

    const onDecrease = () => {
        if (imageCount > 0) {
            setImageCount(imageCount - 1);
        }
    }

    return (
        <>
            <ImageControl onIncrease={onIncrease} onDecrease={onDecrease} count={imageCount}/>
            <Gallery imageCount={imageCount} />
        </>
    )
}