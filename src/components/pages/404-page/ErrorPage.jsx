import {motion } from "framer-motion"
import { Link } from "react-router-dom";
import { useEffect } from "react";
const ErrorPage = () => {
    
    useEffect(()=> {

        document.title = "Gericht | Error"
    }, [])
    
    return ( 
        <section className="bg-primary-black px-5 py-10 h-[60vh] text-center">
            <h1 className="font-cormorant text-primary-green font-bold text-[6rem] ">404</h1>
            <p className="text-white font-open-sans italic text-base">Sodiq. Why you dey click wrong link?</p>
            <Link to="/" >
            <motion.button 
                    className="text-black font-cormorant py-2 font-bold text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        scale: 1.1
                    }}
                    >Go to Home
                    
                    </motion.button>
            </Link>
        </section>
     );
}
 
export default ErrorPage;