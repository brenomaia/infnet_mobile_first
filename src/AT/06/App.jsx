import { useState } from "react"
import Cart from "./components/Cart"
import "./main.css"

export default function App() {

    // line items
    const defaultLineItems = [
        {
            name: "Coca cola",
            price: 10.00,
            quantity: 0
        },
        {
            name: "Arroz",
            price: 5.00,
            quantity: 2
        },
        {
            name: "Amaciante",
            price: 25.00,
            quantity: 1
        }
    ]

    const [lineItems, setLineItems] = useState(defaultLineItems);

    // calculate total
    const totalFunction = (updated) => {
        return updated.map((lineItem) => (lineItem.price * lineItem.quantity)).reduce((prev, acc) => prev + acc, 0)
    }

    const [total, setTotal] = useState(totalFunction(lineItems))

    // pass on functions
    const onDecrease = (idx) => {
        let updated = [...lineItems]

        if (updated[idx].quantity > 0) {
            updated[idx].quantity -= 1
            setTotal(totalFunction(updated));
            setLineItems(updated);
        }
    }

    const onIncrease = (idx) => {
        let updated = [...lineItems]

        updated[idx].quantity += 1

        setTotal(totalFunction(updated));
        setLineItems(updated);
    }

    return (
        <div className="container">
            <h2>Lista de Compras</h2>
            <Cart lineItems={lineItems} onDecrease={onDecrease} onIncrease={onIncrease} total={total}/>
        </div>
    )
}