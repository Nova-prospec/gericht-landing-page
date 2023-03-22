import { motion } from "framer-motion";
const ContactUs = () => {
    return ( 
        <section className="bg-center bg-no-repeat bg-cover bg-dark-bg flex justify-center items-center gap-6 py-16 pl-10 lg:px-5 lg:flex-col">
            <div>
                <h4 className="text-white font-cormorant text-lg ">Contact</h4>
                <img src="assets/green-line.svg" alt="Green Line" />
                <h2 className="text-primary-green text-[3rem] sm:text-[2.3rem] font-cormorant">Find Us</h2>
                <p className="text-[12px] text-primary-grey font-open-sans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                <h3 className="text-primary-green font-cormorant text-xl mb-2">Opening Hours</h3>
                <p className="text-[12px] font-open-sans text-primary-grey my-1">Mon - Fri: <time>10:00am - 2:00am</time></p>
                <p className="text-[12px] font-open-sans text-primary-grey my-1">Sat - Sun: <time>10:00am - 3:00am</time></p>
                <div><motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: 10
                    }}
                    >Visit Us
                    
                    </motion.button></div>
            </div>
            <img src="assets/contact-us.jpg" className="w-[35%] sm:w-[90%]"  alt="Contact Gericht" />
        </section>
     );
}
 
export default ContactUs;