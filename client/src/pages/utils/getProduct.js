import { createContext, useContext, useState,useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
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
        <ProductContext.Provider value={{ products, fruits, vegetables, dairys, backerys,teas,meats }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);