const Cart = ({ lineItems, onDecrease, onIncrease, total }) => {
    return (
        <div className="cart">
            {lineItems.map((lineItem, idx) => (
                <div className="line-item" key={idx}>
                    <h3>{lineItem.name}</h3>
                    <p>Preço Unitário: {lineItem.price},00</p>
                    <p>Quantidade: {lineItem.quantity}</p>
                    <p>Subtotal: R$ {lineItem.price * lineItem.quantity},00</p>
                    <div className="line-item-actions">
                        <button onClick={() => onIncrease(idx)}>Aumentar</button>
                        <button onClick={() => onDecrease(idx)}>Diminuir</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <h3>Total: R$ {total},00</h3>
            </div>
        </div>
    )
}

export default Cart;