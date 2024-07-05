"use client";

import { useState, useEffect } from "react";
import { TBlog } from "@/types";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://portfolio-server-amber.vercel.app/api/v1/blogs",
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setBlogs(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="py-32 bg-[#000319]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen mx-10">
        {blogs.map((item: TBlog) => (
          <div
            key={item._id}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.file}
                    alt="profile"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.authorName}
                  </span>
                  <span className="text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
