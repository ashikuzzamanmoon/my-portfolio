"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useGetAllProjectsQuery } from "@/redux/api/projects/projectsApi";
import { TProject } from "@/types";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery({});

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Explore my some <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects?.data?.map((item: TProject) => (
          <div
            className="w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[36vw] h-[450px] bg-[#13162D] rounded-lg overflow-hidden shadow-lg"
            key={item._id}
          >
            <div className="w-full h-[200px] relative">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[250px]">
              <div>
                <h1 className="font-bold text-xl line-clamp-1">{item.title}</h1>
                <p className="text-gray-400 mt-2 line-clamp-2">{item.des}</p>
              </div>
              <div className="flex flex-col">
                <Link href={`/project-details/${item._id}`}>
                  <button className="btn btn-primary btn-outline btn-sm mt-2">
                    See Details
                  </button>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon"
                          width={40}
                          height={40}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                  <Link href={item.link}>
                    <div className="flex justify-center items-center">
                      <p className="flex text-xl text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ml-3" color="#CBACF9" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
