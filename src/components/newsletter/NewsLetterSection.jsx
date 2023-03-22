const NewsLetterSection = () => {
    return ( 
        <section className="bg-primary-black border flex flex-col justify-center items-center py-8 px-5 sm:px-3 w-4/6 border-primary-green border-opacity-20 shadow-xl md:w-[90%]">
            <h4 className="text-white font-cormorant">NewsLetter</h4>
            <img src="assets/green-line.svg" className="w-min" alt="Grren Line" />
            <h2 className="font-cormorant text-primary-green text-[2.8rem] sm:text-[1.7rem] sm:text-center capitalize">Subscribe to our newsletter</h2>
            <div className="flex items-center w-full justify-center gap-8 sm:flex-col sm:gap-0">
                <input type="text" placeholder="Email Address" className="placeholder:text-primary-grey text-white font-open-sans placeholder:text-sm placeholder:font-cormorant p-3 w-[70%] sm:w-[80%] bg-transparent border border-[#F5EFDB] border-solid" />
                <div>
                <button className="text-black font-cormorant py-2 text-sm my-6 px-6 font-semibold bg-primary-green justify-self-center">Subscribe</button>
                </div>
            </div>
        </section>
     );
}
 
export default NewsLetterSection;