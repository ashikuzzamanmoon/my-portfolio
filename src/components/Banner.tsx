import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="home mt-40 flex md:flex-row flex-col justify-between items-center gap-10 p-0 relative w-full h-[330px] md:h-[400px]" // Adjust the height as needed
      id="home"
    >
      <div className="relative w-full h-[240px] md:h-[500px]">
        <Image
          src="https://i.ibb.co/L8B2mz3/Black-Gradient-Minimalistic-github-Banner.png"
          alt="Banner Image"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire area
          quality={100} // Ensures high-quality rendering
          priority // Optimizes loading for above-the-fold images
        />
      </div>
      <div className="home-content z-10 p-4 text-white absolute top-36 md:top-72 left-5 right-5 flex justify-center">
        <div className="flex justify-center my-3">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="Resume of Ashikuzzaman Moon.pdf"
            download="Resume"
            className="my-btn flex items-center gap-2 px-4 py-2 rounded text-sm md:text-base shadow-md"
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
