import { motion } from "framer-motion";
const AboutSection = () => {
    return (
        <section className="bg-dark-bg bg-center bg-no-repeat bg-cover relative py-28 ">
            
                <div className="flex justify-center px-40 gap-4 relative z-50 lg:flex-col lg:px-5">
        <p className="text-[400px] text-secondary-grey font-cormorant -z-10 absolute right-[40%] -top-[45%] sm:hidden">G</p>
                <article className="text-right lg:text-left">
                    <div>
                        <h2 className="text-3xl mb-4 text-primary-green font-cormorant">About Us</h2>
                        <div className="w-full grid place-items-end lg:place-items-start"><img className="w-min mb-2" src="assets/left-green-line.svg" alt="" /></div>
                    </div>
                    <p className="font-open-sans text-primary-grey text-sm sm:text-[0.75rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: 10
                    }}
                    >Know More 
                    
                    </motion.button>
                </article>
                <div><img src="assets/knife.webp" className="lg:hidden" alt="Knife Background" /></div>
                <article className="text-left">
                    <h2 className="text-3xl mb-4 text-primary-green font-cormorant">Our History</h2>
                    <img className="w-min mb-2 right-0" src="assets/green-line.svg" alt="" />
                    <p className="font-open-sans text-primary-grey text-sm sm:text-[0.75rem]">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: -10
                    }}
                    >Know More 
                    
                    </motion.button>
                </article>
                </div>
        </section>
    );
}

export default AboutSection;