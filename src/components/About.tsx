import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-full text-white">
        <div className="py-7 mt-3">
          <h1 className="text-2xl font-sans font-bold mt-20 lg:mt-10">
            About Me
          </h1>
        </div>
        <div className="space-y-6 lg:flex justify-between mt-8">
          <motion.img
            whileHover={{
              scale: 1,
              //textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            src="https://i.ibb.co/0ZMV2MB/IMG-3331.jpg"
            className="w-full lg:w-80 lg:h-80 rounded-lg border-2 border-[#4e9eff] img-style"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />

          <div
            className="lg:ms-6 w-full h-full"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Tabs>
              <TabList>
                <Tab>Profile</Tab>

                <Tab>Contact</Tab>
              </TabList>
              <TabPanel>
                <p className="py-5 text-xl">
                  I am Ashikuzzaman Moon, a passionate Full-Stack Web Developer
                  specializing in JavaScript, TypeScript, React.js, Next.js,
                  Node.js, Express.js, MongoDB, PostgreSQL, Redux, and Prisma. I
                  excel in building scalable, responsive web applications and
                  solving complex coding challenges. Continuously learning and
                  adapting, I thrive on staying at the forefront of modern web
                  technologies to deliver innovative solutions and enhance user
                  experiences.
                </p>
              </TabPanel>

              <TabPanel>
                <h2 className="text-2xl"> My Contact Information</h2>
                <div className="w-full h-full py-4">
                  <div>
                    <h1 className="flex items-center text-xl">
                      <HiOutlineMail />: ashikuzzamanmoon31@gmail.com{" "}
                    </h1>

                    <h1 className="flex items-center text-xl">
                      <HiOutlinePhone />: +88 01712714334
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-xl mb-4">
                      Address: Sirajganj, Rajshahi, Bangladesh
                    </h1>
                  </div>
                  <div className="flex items-center space-x-5">
                    <a href="https://www.facebook.com/ashik.moon.14/">
                      {" "}
                      <FaFacebook className="w-10 h-8"></FaFacebook>
                    </a>
                    <a href="https://github.com/ashikuzzamanmoon">
                      <FaGithub className="w-10 h-8"></FaGithub>
                    </a>
                    <a href=" https://www.linkedin.com/in/moon14official/">
                      <FaLinkedinIn className="w-10 h-8"></FaLinkedinIn>
                    </a>
                    <a href="https://www.instagram.com/moon14.official/">
                      <FaInstagram className="w-10 h-8"></FaInstagram>
                    </a>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <div className="my-3">
              <Link
                href="https://drive.google.com/file/d/1CHf31Y9-_QYccUeZag_MW2dSZjVnawSB/view?usp=drive_link"
                className="my-btn"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
