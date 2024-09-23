const Score = ({ score }) => {
    const scoreSum = score.reduce((partial, next) => partial + next, 0);

    return (
        <div className="score">
        <h3>Score: {scoreSum}</h3>
    </div>
    )
};

export default Score;