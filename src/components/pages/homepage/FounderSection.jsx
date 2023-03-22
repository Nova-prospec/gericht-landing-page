const FounderSection = () => {
    return (
        <section className="bg-dark-bg bg-center gap-4 mx-auto bg-no-repeat py-28 bg-cover flex px-8 justify-center items-center lg:flex-col-reverse lg:px-5 md:text-center">
            <div>
                <img src="assets/founder-image.jpg" className="w-[80%]" alt="Gericht Founder" />
            </div>
            <article className="text-left lg:text-center">
                <div>
                    <h3 className="text-white font-cormorant text-lg font-modify">Chef's Word</h3>
                    <div className="w-full grid place-items-start lg:place-items-center"><img src="assets/green-line.svg" className="text-center" alt="" /></div>
                </div>
                <h2 className="capitalize  text-primary-green text-3xl font-cormorant font-semibold">What we believe in</h2>
                <p className="text-primary-grey font-open-sans italic text-[0.8rem] mt-8 before:content-quotes sm:text-[0.75rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>


                <p className="text-primary-green font-cormorant mt-8 text-2xl">Kevin Luo</p>
                <span className="text-primary-grey text-[0.75rem] font-open-sans">CEO & Founder</span>

                <p className="text-primary-grey font-bestermind text-[3rem] mt-8">Kevin Luo</p>
            </article>
        </section>
    );
}

export default FounderSection;