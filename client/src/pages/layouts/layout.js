import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"

export default function Home({children}) {
    return (
      <>
        <Header/>
        <Nav/>
        {children}
        <Footer/>
      </>
    )
  }