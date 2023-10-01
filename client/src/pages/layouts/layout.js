import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"

export default function Layout({children,cartData}) {
    return (
      <>
        <Header cart={cartData}/>
        <Nav/>
        {children}
        <Footer/>
      </>
    )
  }