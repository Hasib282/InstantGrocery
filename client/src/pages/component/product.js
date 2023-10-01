import React from 'react';

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< creating component for each product
function Product({ product, onAddToCart }) {
    const showDetails = (product)=>{
        
    }
    return (
        <>
            <div className="child" >
                <div className="image">
                    <img src={`http://localhost:8000/product/image/` + product.image} alt={product.name} />
                </div>
                <div className="pname">
                    <p>{product.name}</p>
                </div>
                {product.discount !== 0 ?
                    <div className="price flex-align">
                        <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(product.price - (product.price * (product.discount / 100)))}</span>
                        <span className="discount"><small><del>&#2547;{product.price}</del></small></span>
                    </div>
                    : <div><p><span className="tag">Price:</span> &#2547; {product.price}</p></div>}
                <div className="add-to-cart center" id="cart">
                    <button onClick={() => onAddToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </>

    );
}
export default Product;