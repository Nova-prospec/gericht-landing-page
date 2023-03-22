import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { CloseSquare } from "iconsax-react"
const HiddenNavbar = ({ hamburger, setHamburger }) => {

    if (hamburger == true) {
        document.querySelector("body").style.overflowY = "hidden"
    }else{
        document.querySelector("body").style.overflowY = "scroll"
    }
    const closeHiddenNavbar = () => {
        setHamburger(false)
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
            path: "/login",
            name: "Login / Registration"
        },
        { 
            path: "/book-table",
            name: "Book Table"
        },
        {
            path: "/saved-foods",
            name: "Saved Foods"
        }
    ]
    const linkStyle = `font-open-sans text-white font-medium my-1 text-[0.8rem]`

     
    return (
        <AnimatePresence>
            {hamburger == true && (
                <motion.nav
                    key="hidden-navbar-modal"
                    className="w-screen h-screen bg-stone-900 fixed flex justify-center items-center top-0 backdrop-filter backdrop-blur-sm bg-opacity-60 z-50"
                    initial={{ right: "-100vw" }}
                    animate={{ right: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    exit={{ right: "-100vw" }}
                >
                    <div className="flex flex-col text-center">
                        {
                            linksArray.map((link)=>{
                                return (
                                    <Link onClick={closeHiddenNavbar} key={link.path} className={linkStyle} to={link.path}>{link.name}</Link>
                                )
                            })
                        }
                    </div>
                    <div className="absolute right-5 top-6 cursor-pointer" onClick={closeHiddenNavbar}>
                    <CloseSquare size="32" color="#ffffff"/>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>


    );
}

export default HiddenNavbar;
