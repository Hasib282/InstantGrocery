import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GiFruitBowl, GiMilkCarton, GiSlicedBread, GiCoffeeCup, GiMeat, GiPotato } from "react-icons/gi";
export default function Header() {

    return (

        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <Link href="index.html">
                            <picture>
                                <source media="(max-width: 580px)" srcSet="../images/logo.png" />
                                <source media="(max-width: 768px)" srcSet="../images/mobilelogo.png" />

                                <img src="../images/logo.png" alt="logo.png" />
                            </picture>
                        </Link>
                    </div>
                    <div className="search-btn w-5/12">
                        <form className="search">
                            <input type="text" placeholder="Search" className="input input-bordered w-auto" name="search" />
                        </form>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <label className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <span className="icon"><label htmlFor="cart-modal"><BsCart4 /></label></span>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <button className="login-button">
                                    <label htmlFor="login-modal">Login</label>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* toggle part start here  */}
                    <div id="toggle">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <div className="icon">
                                    <label htmlFor="my-drawer" >
                                        <FiMenu />
                                    </label>
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <ul className="menu w-70 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li className="side-search">
                                        <form className="search">
                                            <input type="text" placeholder="Search" className="input input-bordered w-auto" name="search" />
                                        </form>
                                    </li>
                                    <li className="something">
                                        <button className="login-button">
                                            <label htmlFor="login-modal">Login</label>
                                        </button>
                                        <label className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <span className="icon"><label htmlFor="cart-modal"><BsCart4 /></label></span>
                                                <span className="badge badge-sm indicator-item">8</span>
                                            </div>
                                        </label>
                                    </li>
                                    <li><a href="#fruits"><GiFruitBowl />Fruits</a></li>
                                    <li><a href="#vegitables"><GiPotato />Vegitables</a></li>
                                    <li><a href="#dairy"><GiMilkCarton />Dairy</a></li>
                                    <li><a href="#bakery"><GiSlicedBread />Bakery</a></li>
                                    <li><a href="#tea"><GiCoffeeCup />Tea & Coffee</a></li>
                                    <li><a href="#meat"><GiMeat />Meat</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* toggle part end here  */}
                </div>
            </header>

            {/* cart modal part starts */}
            <div className="cart-modal">
                <input type="checkbox" id="cart-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-center text-3xl mb-5">Cart</h3>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <label className="modal-backdrop" htmlFor="cart-modal">Close</label>
                </div>
            </div>
            {/* cart modal part ends */}


            {/* login modal part starts */}
            <div className="login-modal">
                <input type="checkbox" id="login-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-center text-3xl mb-5">Login or Signup</h3>

                    </div>
                    <label className="modal-backdrop" htmlFor="login-modal">Close</label>
                </div>
            </div>
            {/* login modal part ends */}
        </>
    )
}