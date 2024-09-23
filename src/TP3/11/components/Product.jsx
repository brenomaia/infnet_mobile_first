const Product = ({ imgPath, name, description, price}) => {
    return (
        <div class="product-container">
            <div class="product-img-container">
                <img src={imgPath} alt="macbook pro" />
            </div>
            
            <div class="product-info-container">
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>R$ {price}</h4>
            </div>
        </div>
    )
}

export default Product;