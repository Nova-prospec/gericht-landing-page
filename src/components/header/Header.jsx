import { useState } from "react";
import { Link } from "react-router-dom";
import HiddenNavbar from "../hidden-navbar/HiddenNavbar"
import { HambergerMenu } from "iconsax-react"
const Header = () => {

    const handleSizeChange = (e) => {
        setMatch(e.matches)
    }
    const [hamburger, setHamburger] = useState(false)
    const openHamburger = () => {
        setHamburger(true)
    }
     const linksArray = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/pages",
            name: "Pages"
        },
        {
            path: "/contact-us",
            name: "Contact Us"
        },
        {
            path: "/blog",
            name: "Blog"
        },
        {
            path: "/landing",
            name: "Landing"
        },
        {
            path: "/saved-foods",
            name: "Saved Foods"
        }
    ]
    const [match, setMatch] = useState(window.matchMedia("(max-width: 900px)").matches)

    window.matchMedia("(max-width: 900px)").addEventListener("change", handleSizeChange)

    const linkStyle = `font-open-sans text-white font-medium mx-3 text-[12px] lg:hidden`
    return (
        <>
            <header className="bg-black">
                <nav className="flex justify-between items-center px-8 py-6 lg:px-5">
                    <div>
                        <span className="text-3xl font-cormorant text-white">GERICHT</span>
                    </div>
                    <div>
                        {
                            linksArray.map((link) => {
                                return (
                                    <Link key={link.path} className={linkStyle} to={link.path}>{link.name}</Link>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center gap-1">
                        <Link to="/login" className={linkStyle} >Log In / Registration </Link>
                        <div><img src="assets/radial-line.svg" className="lg:hidden" alt="" /></div>
                        <Link to="/book-table" className={linkStyle}>Book Table</Link>
                    </div>
                    <div className="hidden lg:block">
                        <HambergerMenu onClick={openHamburger} className="block cursor-pointer" size="32" color="#ffffff" />
                    </div>
                </nav>
            </header>
            <HiddenNavbar hamburger={hamburger} setHamburger={setHamburger} />


        </>
    );
}

export default Header;