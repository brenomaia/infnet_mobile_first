const SpotsSummary = ({ spots }) => {
    const prices = spots.map((spot) => spot.price)
    const finalPrice = prices.reduce((price, acc) => price + acc, 0);
    // const scoreSum = score.reduce((partial, next) => partial + next, 0);

    return (
        <div className="summary">
            <h3>Resumo dos pedidos</h3>
            <ul className="line-items">
                {spots.map((spot, idx) => (
                    <li key={idx}>
                        {spot.name} - {spot.price}
                    </li>
                ))}
            </ul>
            <h3>Preço final: {finalPrice}</h3>
        </div>
    )
}

export default SpotsSummary