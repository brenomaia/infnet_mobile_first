const Menu = ({ }) => {
    return (
        <div className="menu">
            <div>
                <img className="menu-logo" src="../../assets/image-placeholder.png"></img>
            </div>
            <div className="menu-items">
                <div className="menu-item">
                    Projetos
                </div>
                <div className="menu-item">
                    Produtos
                </div>
                <div className="menu-item">
                    Contato
                </div>
            </div>
            <div>
                <img className="menu-interaction" src="../../assets/menu-svgrepo-com.svg"></img>
            </div>
        </div>
    );
}

export default Menu;