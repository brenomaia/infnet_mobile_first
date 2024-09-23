import Friend from "./Friend"

const Friends = () => {
    return (
        <div className="friends">
            <h3 className="section-title"> Amigos</h3>
            < Friend name="Charmander" profileImg="../../assets/charmander.jpg" common={10} />
            < Friend name="Pikachu" profileImg="../../assets/how-to-draw-pikachu.jpg" common={5} />
        </div>
    )
}

export default Friends;