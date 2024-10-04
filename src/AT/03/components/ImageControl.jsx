import styles from "./ImageControl.module.css"

const ImageControl = ({ onIncrease, onDecrease, count}) => {
    return (
        <div className={styles.control}>
            <button className={styles.action_button} onClick={() => onIncrease()}>Aumentar</button>
            <button className={styles.action_button} onClick={() => onDecrease()}>Diminuir</button>
            <label>{count}</label>
        </div>
    )
}

export default ImageControl;