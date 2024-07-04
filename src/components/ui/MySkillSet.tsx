"use client";
import SkillCard from "@/components/ui/SkillCard";
import Skills from "../../data/data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const MySkillSet = () => {
  return (
    <section className="h-[100%]">
      <h5 className="font-bold text-2xl mt-14 mb-8">Technical Proficiency</h5>
      <div className="w-full h-auto">
        <Marquee>
          <div className=" space-x-4">
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 ml-4 py-3 hover:bg-gray-500">
              HTML5
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              CSS3
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Bootstrap
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Tailwind
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              JavaScript
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              TypeScript
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              React JS
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Next JS
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Node JS
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Express JS
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              MongoDB
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Mongoose
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              My SQL
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Prisma
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Redux
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Material UI
            </motion.button>
            <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
              Ant Design
            </motion.button>
          </div>
        </Marquee>

        <div
          className="px-6 py-4 text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="space-y-3">
            <div>
              <h1 className="text-xl font-sans font-bold">Expertise :</h1>
              <div className="space-x-4 space-y-3 text-start">
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  React.Js
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Next.Js
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Redux
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  JavaScript
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  TypeScript
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Tailwind
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Bootstrap
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Daisy UI
                </motion.button>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-sans font-bold">Comfortable : </h1>
              <div className="space-x-4 text-start space-y-3">
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Node JS
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Express JS
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  MongoDB
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Mongoose
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Prisma
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Firebase
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Rest API
                </motion.button>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-sans font-bold">Familiar with : </h1>
              <div className="space-x-4 text-start space-y-3">
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,

                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  JWT (Json Web Token)
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  My SQL
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Material UI
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Cloudinary
                </motion.button>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-sans font-bold">Tools :</h1>
              <div className="space-x-4 text-start space-y-3">
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Visual Studio
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Chrome dev Tool
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Netlify
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Figma
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Vercel
                </motion.button>
                <motion.button
                  className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  GitHub
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkillSet;
