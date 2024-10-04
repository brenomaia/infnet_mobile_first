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
        <nav className="menu">
            <div className="main-menu">
                <div className="menu-logo">
                    <img className="img-logo" src="../../assets/image-placeholder.png" alt="image placeholder" />
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div className="menu-button" onClick={() => toggleMenuFn()}>
                    <img className="img-logo" src="../../assets/menu-svgrepo-com.svg" alt="image placeholder" />
                </div>
            </div>
            
                {/* <li className="menu-toggle" onClick={() => toggleMenuFn()}>
                    <img className="img-menu" src="../../assets/menu-svgrepo-com.svg" alt="menu icon" />
                </li> */}

            <ul className="menu-items-list">
                <li className="menu-option">Produtos</li>
                <li className="menu-option">Serviços</li>
                <li className="menu-option">Contato</li>
                <li className="menu-option">Sobre nós</li>
                <li className="menu-option">Trabalhe Conosco</li>
                <li className="menu-option">Endereço</li>
                <li className="menu-option">Carreiras</li>
                <li className="menu-option">Projetos Sociais</li>
            </ul>
        </nav>
    )
}

export default Menu;