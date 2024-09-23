import Friend from "./Friend"

const FriendsSuggestions = () => {
    return (
        <div className="friends">
            <h3 className="section-title">Sugestões de amizades</h3>
            < Friend name="Squirtle" profileImg="../../assets/squirtle.jpg" common="pikachu" />
            < Friend name="Pikachu" profileImg="../../assets/bulbasaur.png" common="charmander" />
        </div>
    )
}

export default FriendsSuggestions;