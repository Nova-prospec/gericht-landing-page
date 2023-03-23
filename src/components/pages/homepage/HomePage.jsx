import { useEffect } from "react";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import AwardSection from "./AwardSection";
import ContactUs from "./ContactUs";
import FoodSpecialSection from "./FoodSpecialSection";
import FounderSection from "./FounderSection";
import PhotoGallerySection from "./PhotoGallery";
import VideoSection from "./VideoSection";
import { Link } from "react-router-dom";

                       
const HomePage = () => {
    let hashTagStyle = `text-white font-open-sans w-min text-sm`
    const handleClick = ( ) => {
        console.log(window.innerHeight + 100);
        window.scrollTo(0,window.innerHeight + 100)
    }
    useEffect(()=> {
        document.title = "Gericht | Home"
    }, [])
    return (
        <>
            <section className="bg-black py-36 relative pl-8 lg:px-5 w-full flex gap-10 lg:flex-col lg:justify-center lg:py-24">
                <div className="flex -rotate-[90deg] lg:rotate-0 origin-top-left gap-2">
                    <span className={hashTagStyle}>#Bar</span>
                    <span className={hashTagStyle}>#Gericht</span>
                </div>
                <article>
                    <p className="font-cormorant text-white font-bold">Chase The New Flavour</p>
                    <img src="assets/green-line.svg" alt="" />
                    <h1 className="text-[3rem] font-bold text-primary-green font-cormorant sm:text-[2.5rem]">The Key To Fine Dining</h1>
                    <p className="text-primary-grey max-w-sm text-sm sm:text-[0.75rem]">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <Link to="/pages"><motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: 10
                    }}
                    >Explore Menu 
                    
                    </motion.button></Link>
                </article>
                <div>
                    <img className="max-w-sm md:w-full" src="assets/hero-img.webp" alt="" />
                </div>
                <motion.div className="flex flex-col items-center sm:hidden gap-1 absolute bottom-10 right-8">
                    <img src="assets/dark-green-line.svg" className="w-min" alt="" />
                    <motion.p
                    onClick={handleClick} 
                    className="text-primary-green uppercase font-cormorant text-sm cursor-pointer font-medium"
                    initial={{scale: 1}}
                    animate={{scale: 1.3}}
                    transition={{
                        repeatType: "reverse",
                        duration: 1,
                        repeat: Infinity
                    }}                    
                    >scroll</motion.p>
                </motion.div>
                <p className="text-white absolute bottom-10 right-[46.5%] flex sm:hidden items-center font-cormorant text-sm ">01 <span className="h-[1.5px] w-4 mx-1 mt-1 bg-primary-green"></span> 02 03 04</p>
            </section>
            <AboutSection/>
            <FoodSpecialSection/>
            <FounderSection/>
            <VideoSection/>
            <AwardSection/>
            <PhotoGallerySection/>
            <ContactUs/>
        </>

    );
}

export default HomePage;