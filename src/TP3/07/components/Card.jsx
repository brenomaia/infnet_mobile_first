import "../main.css"

const Card = ({ imgPath, title, description, footer }) => {
    return (
        <div className="card">
            <img className="card-img" src={imgPath} alt="image" />
            <div className="card-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="footer">{footer}</p>
            </div>
        </div>
    )
}

export default Card;