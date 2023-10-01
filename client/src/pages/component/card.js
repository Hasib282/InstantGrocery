import { useProduct } from "../utils/getProduct";
import Product from "./product";

export default function Card({ cartData }) {
    const { fruits, vegetables, dairys, backerys, teas, meats } = useProduct();

    const handleAddToCart = async (product) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = storedCartItems.findIndex(item => item._id === product._id);
        if (index !== -1) {
            storedCartItems[index].quantity = storedCartItems[index].quantity + 1;
            localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
            console.log(storedCartItems);
            cartData(storedCartItems);
        }
        else {
            product.quantity = 1;
            const updatedCart = [...storedCartItems, product];
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            cartData(updatedCart);
        }
    };


    


    




    return (
        <>
            {fruits != null && fruits.length > 0 && (

                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<fruits part start here
                <section id="fruits">
                    <span className="heading">Fruits</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {fruits.map(fruit =>
                                <Product key={fruit._id} product={fruit} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //fruits part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}




            {vegetables != null && vegetables.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<vegetables part start here
                <section id="vegetables">
                    <span className="heading">Vegetables</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {vegetables.map(vegetable =>
                                <Product key={vegetable._id} product={vegetable} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //vegetables part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}



            {dairys != null && dairys.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<dairy part start here
                <section id="dairy">
                    <span className="heading">Dairy</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {dairys.map(dairy =>
                                <Product key={dairy._id} product={dairy} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //dairys part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}



            {backerys != null && backerys.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<backery part start here
                <section id="bakery">
                    <span className="heading">Backery</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {backerys.map(backery =>
                                <Product key={backery._id} product={backery} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //backerys part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}




            {teas != null && teas.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<teas part start here
                <section id="tea">
                    <span className="heading">Tea</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {teas.map(tea =>
                                <Product key={tea._id} product={tea} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //backerys part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}






            {meats != null && meats.length > 0 && (
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<meats part start here
                <section id="meat">
                    <span className="heading">Meat</span>
                    <div className="container flex-align">
                        <div className="parent flex-align">
                            {meats.map(meat =>
                                <Product key={meat._id} product={meat} onAddToCart={handleAddToCart} />
                            )}
                        </div>
                    </div>
                </section>
                //meats part end here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            )}
        </>
    )
}

export const cartData = () => { }