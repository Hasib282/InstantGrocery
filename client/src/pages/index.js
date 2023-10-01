import { useState } from "react";
import Layout from "./layouts/layout";
import Title from "./layouts/title";
import Card from "./component/card";

export default function Home() {
    return (

        <Layout>
            <Title page="Instant Grocery | Fresh and Healthy"></Title>
            <section id="banner">
                
            </section>

            <Card/>

        </Layout>

    )
}
