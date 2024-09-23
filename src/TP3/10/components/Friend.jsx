import "../friends.css"

const Friend = ({name, profileImg, common}) => {
    return (
        <div className="friend">
            <img className="friend-profile-img" src={profileImg} alt="image friend profile" />
            <p>{name}</p>
            <p>Amigos em comum: {common}</p>
        </div>
    )
}

export default Friend;