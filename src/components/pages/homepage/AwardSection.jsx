import { motion } from "framer-motion";

const AwardSection = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat relative flex justify-center items-center lg:flex-col gap-8 bg-dark-bg py-16 px-5">
      <motion.img
        src="/assets/company-icon.svg"
        initial={{rotate: 0}}
        animate={{ rotate: 360 }}
        transition={{
          repeatType: "loop",
          duration: 3,
          delay: 0,
          repeat: Infinity,
          repeatDelay: 0, 
        }}
        className="absolute top-10 w-[5rem] lg:w-[3rem] lg:top-6 left-8"
        alt="Gerichst Icon"
      />
      <section className="w-max lg:mt-6">
        <h4 className="text-white font-cormorant font-modify text-lg">
          Awards & Recognition
        </h4>
        <img src="assets/green-line.svg" alt="" />
        <h2 className="text-primary-green font-cormorant text-[2.8rem] lg:mb-4 sm:text-[2.1rem]">
          Our Laurels
        </h2>
        <article className="flex-row-reverse gap-3 flex mb-6 lg:flex-col lg:gap-6">
          <div className="flex gap-2">
            <img
              src="assets/award-1.svg"
              className="sm:w-[2.8rem]"
              alt="Award Number"
            />
            <div>
              <p className="text-primary-green font-cormorant">Rising Star</p>
              <span className="text-primary-grey text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              src="assets/award-2.svg"
              className="sm:w-[2.8rem]"
              alt="Award Number"
            />
            <div>
              <p className="text-primary-green font-cormorant">Rising Star</p>
              <span className="text-primary-grey text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </div>
          </div>
        </article>
        <article className="flex-row-reverse flex gap-3 lg:flex-col lg:gap-6">
          <div className="flex gap-2">
            <img
              src="assets/award-3.svg"
              className="sm:w-[2.8rem]"
              alt="Award Number"
            />
            <div>
              <p className="text-primary-green font-cormorant">
                Outstanding Chef
              </p>
              <span className="text-primary-grey text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              src="assets/award-5.svg"
              className="sm:w-[2.8rem]"
              alt="Award Number"
            />
            <div>
              <p className="text-primary-green font-cormorant">
                AA Hospitality
              </p>
              <span className="text-primary-grey text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
            </div>
          </div>
        </article>
      </section>
      <div className="relative w-max sm:w-auto sm:justify-center sm:items-center sm:flex">
        <p className="text-almost-white opacity-80 font-cormorant text-[500px] lg:hidden absolute left-[-80px] bottom-[-230px]">
          G
        </p>
        <img
          src="assets/award-image.jpg"
          className="w-full sm:w-[90%]"
          alt="Award IMage"
        />
      </div>
    </section>
  );
};

export default AwardSection;
