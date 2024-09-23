const RelatedProducts = ({ products }) => {
    return (
        <div id="related" class="related-products-container">
            <h3>Produtos Relacionados</h3>
            <div class="related-products-list-container">
            {products.map((product) => (
                <div class="related-product-container">
                    <div class="related-product-img-container">
                        <img src={product.imgPath} alt="product image" />
                    </div>
                <h4>{product.name}</h4>
                <p>R$ {product.price}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default RelatedProducts;