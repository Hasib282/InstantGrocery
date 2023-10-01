import { useState } from "react";
import Layout from "./layouts/layout";
import Title from "./layouts/title";
import Card from "./component/card";
import { useEffect } from "react";


export default function Home() {
    const [cartdata, setCartData] = useState([]);
    const cart = (data) => {
        setCartData(data);
    }
    return (

        <Layout cartData={cartdata}>
            <Title page="Instant Grocery | Fresh and Healthy"></Title>
            <section id="banner">

            </section>

            <Card cartData={cart}/>

        </Layout>

    )
}
