import { motion } from "framer-motion";

const PhotoGallerySection = () => {
    return (
        <section className="py-16 bg-dark-bg bg-center bg-cover flex pl-10 items-center gap-4 lg:flex-col lg:px-5 lg:items-start">
            <div>
                <h4 className="text-white font-cormorant text-xl font-modify">Instagram</h4>
                <h2 className="font-cormorant text-primary-green text-[3rem]">Photo Gallery</h2>
                <img src="assets/green-line.svg" className="w-min" alt="Green Line" />
                <p className="font-open-sans text-[12px] text-primary-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <div><motion.button 
                    className="text-black font-cormorant py-2 text-sm my-4 px-4 bg-primary-green"
                    whileHover={{
                        rotate: 10
                    }}
                    >View More 
                    
                    </motion.button></div>
            </div>
            <div className="flex h-full mr-56 gap-3 lg:grid lg:mr-0 lg:grid-cols-1">
                <img src="assets/gallery-img-1.jpg" className="w-[200px] h-full" alt="Gallery Photo" />
                <img src="assets/gallery-img-2.jpg" className="w-[200px] h-full" alt="Gallery Photo" />
                <img src="assets/gallery-img-3.jpg" className="w-[200px] h-full" alt="Gallery Photo" />
                <img src="assets/gallery-img-4.png" className="w-[200px] h-full" alt="Gallery Photo" />
            </div>
        </section>
    );
}

export default PhotoGallerySection;