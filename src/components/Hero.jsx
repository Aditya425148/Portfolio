import { motion } from "framer-motion";
import { styles } from "../styles";
import { heroVideo } from "../assets/index";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications <br className='sm:block hidden' />
            explore AI/ML concepts and <br className='sm:block hidden' />
            build innovative tech solutions.
          </p>
        </div>
      </div>
      {/* Video Right Side */}
      <div className="absolute right-0 -bottom-40 w-[55%] h-[100%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
