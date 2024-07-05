"use client";

import React from "react";
import { FaEye } from "react-icons/fa";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { useGetAllBlogsQuery } from "@/redux/api/blogs/blogsApi";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Clients = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});
  return (
    <section id="blogs" className="py-20">
      <h1 className="heading mb-7">
        Read some
        <span className="text-purple"> satisfied blogs</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[30vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mb-5 ">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <div className="">
              <InfiniteMovingCards
                items={blogs?.data}
                direction="right"
                speed="normal"
              />
              <div className="flex justify-center pb-20">
                <Link href="/blogs">
                  <MagicButton
                    title="See More"
                    icon={<FaEye />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
