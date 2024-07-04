import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="home mt-40 flex md:flex-row flex-col justify-between items-center gap-10 p-0 relative w-full h-[400px]" // Adjust the height as needed
      id="home"
    >
      <Image
        src="https://i.ibb.co/L8B2mz3/Black-Gradient-Minimalistic-github-Banner.png"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="home-content z-10 p-4 text-white absolute bottom-7 right-0 left-[500px]">
        <div className="my-3">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="Resume of Ashikuzzaman Moon.pdf"
            download="Resume"
            className="my-btn"
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
