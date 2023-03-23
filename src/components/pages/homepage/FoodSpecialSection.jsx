import  {motion} from "framer-motion"

const FoodSpecialSection = () => {
    return (
        <section className="bg-primary-black py-20 px-10 lg:px-5">
            <div className="grid place-items-center mb-4">
                <h3 className="text-white font-cormorant capitalize">Menu that fits your palatte</h3>
                <img src="assets/green-line.svg" className="w-min" alt="" />
                <h2 className="text-primary-green font-cormorant text-[3rem] font-medium sm:text-center">Today's Special</h2>
            </div>

            <section className="flex justify-center gap-3 lg:flex-col lg:items-center lg:gap-5">
                <div>
                    <h2 className="text-white font-modify font-cormorant text-3xl">Wine & Beer</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>


                    </div>
                </div>
                <div>
                    <img src="assets/drinks.webp" loading="lazy" alt="Drinks" />
                </div>
                <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>
                        <div className="flex items-center gap-8 md:gap-2">
                            <div>
                                <p className="text-primary-green text-lg font-cormorant">Chapel Hill Shiraz</p>
                                <p className="text-primary-grey font-open-sans text-[0.75rem]">AU <span>|</span> Bottle</p>
                            </div>
                            <div className="h-[1.5px] w-16 bg-faded-white">
                            </div>
                            <div className="text-white font-cormorant font-modify">
                                $56
                            </div>
                        </div>


                    </div>
            </section>

            <div className="w-full flex justify-center mt-2"><motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: 10
                    }}
                    >Know More 
                    
                    </motion.button></div>
        </section>
    );
}

export default FoodSpecialSection;