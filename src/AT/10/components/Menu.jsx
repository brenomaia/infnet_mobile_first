import { useState } from "react";

const Menu = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const setMenu = () => {
        if (optionsVisible) {
            return (
                <div className="options-div">
                    <ul className="options-list">
                        <li>Produtos</li>
                        <li>Natal</li>
                        <li>Zero Açúcar</li>
                        <li>Onde comprar</li>
                    </ul>
                </div>
            )
        }
    }

    const setBarOptions = () => {
        return (
            <div className="options-bar-div">
                <ul className="options-list">
                    <li>Produtos</li>
                    <li>Natal</li>
                    <li>Zero Açúcar</li>
                    <li>Onde comprar</li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <div className="menu">
                <div className="menu-icon"  onClick={() => setOptionsVisible(!optionsVisible)}>
                    <img src="../../assets/menu-svgrepo-com.svg" alt="menu icon" />
                </div>
                <div>
                    <p className="brand-name">Coca Cola</p>
                </div>
                {setBarOptions()}
                <div className="contact-icon">
                    <img src="../../assets/contact.png" alt="profile icon" />
                </div>
            </div>
                {optionsVisible && setMenu()}
        </div>
    )
}

export default Menu;