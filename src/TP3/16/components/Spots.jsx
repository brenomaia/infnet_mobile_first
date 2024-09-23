
const Spots = ({ spots, onAddVisit }) => {
    return (
        <div className="spots">
            <h2>Pontos turísticos</h2>
            {spots.map((spot, idx) => (
                <div className="spot" key={idx}>
                    <h3>{spot.name}</h3>
                    <img className="spot-img" src={spot.imgPath} alt="" />
                    <p>{spot.info}</p>
                    <p>{spot.howToGet}</p>
                    <p>Preço: {spot.price}</p>
                    <button className="select-button" onClick={() => onAddVisit(spot)}>Selecionar atração</button>
                </div>
            ))}
        </div>
    )
}

export default Spots