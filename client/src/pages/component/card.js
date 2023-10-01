import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Card() {
    const [products, setProducts] = useState(null);
    const [fruits, setFruits] = useState(null);
    const [vegetables, setVegetables] = useState(null);
    const [dairys, setDairys] = useState(null);
    const [backerys, setBackerys] = useState(null);
    const [teas, setTeas] = useState(null);
    const [meats, setMeats] = useState(null);


    useEffect(() => {
        getProduct();
    }, []);


    async function getProduct() {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}`);
            const products = response.data;
            const fruitsArray = [];
            const vegetablesArray = [];
            const dairysArray = [];
            const backerysArray = [];
            const teasArray = [];
            const meatsArray = [];

            products.map((product) => {
                switch (product.category) {
                    case 'fruits':
                        fruitsArray.push(product);
                        break;
                    case 'vegetables':
                        vegetablesArray.push(product);
                        break;
                    case 'dairy':
                        dairysArray.push(product);
                        break;
                    case 'backery':
                        backerysArray.push(product);
                        break;
                    case 'tea':
                        teasArray.push(product);
                        break;
                    case 'meat':
                        meatsArray.push(product);
                        break;
                    default:
                        break;
                }
            });

            // Set state variables once all products are categorized
            setFruits(fruitsArray);
            setVegetables(vegetablesArray);
            setDairys(dairysArray);
            setBackerys(backerysArray);
            setTeas(teasArray);
            setMeats(meatsArray);
            setProducts(products);

            console.log(products);

        } catch (error) {
            console.error(error);
        }
    }






    return (
        <>
            {fruits != null && fruits.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<fruits part start here
                <section id="fruits">
                    <span className="heading">Fruits</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {fruits.map(fruit=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+fruit.image} alt={fruit.name}/>
                                </div>
                                <div className="pname">
                                    <p>{fruit.name}</p>
                                </div>
                                {fruit.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(fruit.price - (fruit.price * (fruit.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{fruit.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {fruit.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
                //fruits part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}



            {vegetables != null && vegetables.length > 0 &&(
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<vegetables part start here
            <section id="vegetables">
                <span className="heading">Vegetables</span>
                <div className="container flex-align">
                <div className="parent flex-align">
                            {vegetables.map(vegetable=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+vegetable.image} alt={vegetable.name}/>
                                </div>
                                <div className="pname">
                                    <p>{vegetable.name}</p>
                                </div>
                                {vegetable.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(vegetable.price - (vegetable.price * (vegetable.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{vegetable.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {vegetable.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </section>
            //vegetables part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}
            {dairys != null && dairys.length > 0 &&(
            <section id="dairy">
                <span className="heading">Dairy</span>
                <div className="container flex-align">
                <div className="parent flex-align">
                            {dairys.map(dairy=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+dairy.image} alt={dairy.name}/>
                                </div>
                                <div className="pname">
                                    <p>{dairy.name}</p>
                                </div>
                                {dairy.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(dairy.price - (dairy.price * (dairy.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{dairy.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {dairy.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </section>
            )}
            {backerys != null && backerys.length > 0 &&(
            <section id="bakery">
                <span className="heading">Backery</span>
                <div className="container flex-align">
                <div className="parent flex-align">
                            {backerys.map(backery=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+backery.image} alt={backery.name}/>
                                </div>
                                <div className="pname">
                                    <p>{backery.name}</p>
                                </div>
                                {backery.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(backery.price - (backery.price * (backery.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{backery.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {backery.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </section>
            )}
            {teas != null && teas.length > 0 &&(
            <section id="tea">
                <span className="heading">Tea</span>
                <div className="container flex-align">
                <div className="parent flex-align">
                            {teas.map(tea=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+tea.image} alt={tea.name}/>
                                </div>
                                <div className="pname">
                                    <p>{tea.name}</p>
                                </div>
                                {tea.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(tea.price - (tea.price * (tea.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{tea.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {tea.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </section>
            )}
            {meats != null && meats.length > 0 &&(
            <section id="meat">
                <span className="heading">Meat</span>
                <div className="container flex-align">
                <div className="parent flex-align">
                            {meats.map(meat=>
                                
                            <div className="child" >
                                <div className="image">
                                    <img src={`http://localhost:8000/product/image/`+meat.image} alt={meat.name}/>
                                </div>
                                <div className="pname">
                                    <p>{meat.name}</p>
                                </div>
                                {meat.discount !== 0 ?
                                <div className="price flex-align">
                                    <span className="discountPrize"><span className="tag">Price:</span> &#2547; {Math.ceil(meat.price - (meat.price * (meat.discount / 100)))}</span>
                                    <span className="discount"><small><del>&#2547;{meat.price}</del></small></span>
                                </div>
                                : <div><p><span className="tag">Price:</span> &#2547; {meat.price}</p></div>}
                                <div className="add-to-cart center" id="cart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </section>
            )}
        </>
    )
}