import "../main.css"

const Menu = () => {
    const toggleMenuFn = () => {
        const menu = document.querySelector(".menu-items-list");
        let isMenuActive = menu.classList.contains("active")
    
        if (isMenuActive) {
            console.log("is active");
            menu.classList.remove("active");
        } else {
            console.log("is not active");
            menu.classList.add("active");
        }
    }

    return (
        <>
            <nav className="menu">
                <ul className="menu-items-list">
                    <li>
                        <img className="img-logo" src="../../assets/image-placeholder.png" alt="iamge placeholder" />
                    </li>
                    <li className="menu-toggle" onClick={toggleMenuFn}>
                        <img className="img-menu" src="../../assets/menu-svgrepo-com.svg" alt="menu icon" />
                    </li>
                    <li className="menu-option">Produtos</li>
                    <li className="menu-option">Serviços</li>
                    <li className="menu-option">Contato</li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;