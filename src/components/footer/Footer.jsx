import NewsLetterSection from "../newsletter/NewsLetterSection";
import { motion } from "framer-motion";
const Footer = () => {

    const handleClick = () => {
        window.scrollTo(0, 0)
        console.log();
    }
    return (
        <footer className="bg-center bg-cover bg-no-repeat bg-dark-bg relative pb-16 flex flex-col justify-center items-center md:px-5">
            <NewsLetterSection />
            <section className="flex items-center mr-[2%] justify-between gap-6 my-8 md:flex-col">
                <div className="text-center">
                    <h2 className="text-white font-cormorant text-2xl">Contact Us</h2>
                    <p className="text-primary-grey text-[12px] font-open-sans">9 W 53rd St, New York, NY 10019, USA</p>
                    <div className="flex flex-col">
                        <a href="tel:+" className="text-primary-grey text-[12px]">+1 212-344-1230</a>
                        <a href="tel:+" className="text-primary-grey text-[12px]">+1 212-555-1230</a>
                    </div>
                </div>
                <div className="text-center translate-y-10 md:mt-6">
                    <h2 className="text-primary-green font-cormorant text-[40px] font-modify uppercase font-semibold">Gerícht</h2>
                    <q className="text-white font-open-sans text-[12px]">The best way to find yourself is to lose yourself in the service of others.</q>
                    <div className="w-full flex my-2 justify-center"><img src="assets/green-line.svg" alt="Green Line" className="w-min text" /></div>
                    <div className="flex justify-center gap-1">
                        <img src="assets/facebook-icon.svg" alt="Facebook Icon" />
                        <img src="assets/twitter-icon.svg" alt="Twitter Icon" />
                        <img src="assets/instagram-icon.svg" alt="Instagram Icon" />
                    </div>
                    <p className="text-primary-grey mt-14 text-open-sans text-[0.76rem] md:translate-y-[10rem] text-center  capitalize">2021 Gerícht. All Rights reserved.</p>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-xl font-cormorant mb-2">Working Hours</h2>
                    <p className="text-primary-grey text-[12px] font-open-sans">Monday - Friday</p>
                    <time className="text-primary-grey text-[12px] font-open-sans">08:00am - 12:00 am</time>
                    <p className="text-primary-grey text-[12px] font-open-sans">Saturday - Sunday</p>
                    <time className="text-primary-grey text-[12px] font-open-sans">07:00am - 11:00 pm</time>
                </div>
            </section>
            <div className="flex flex-col justify-center items-center absolute top-40 right-16 md:right-16 md:top-[27rem]">
                <img src="assets/dark-green-line.svg" className="w-min" alt="Dark Green Line" />
                <motion.p
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.3 }}
                    transition={{
                        repeatType: "reverse",
                        duration: 1,
                        repeat: Infinity
                    }}
                    onClick={handleClick}
                    className="font-cormorant mt-2 cursor-pointer text-primary-green uppercase"
                >Top</motion.p>
            </div>

        </footer>
    );
}

export default Footer;