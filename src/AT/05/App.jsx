import styles from "./App.module.css"
import Header from "./components/Header"
import GlobalMenu from "./components/GlobalMenu"
import Ads from "./components/Ads"
import ContextMenu from "./components/ContextMenu"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className={styles.container}>
            < Header />
            < GlobalMenu />
            < Ads />
            < ContextMenu />
            < MainContent />
            < Footer /> 
        </div>
    )
}