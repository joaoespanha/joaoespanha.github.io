import { link } from "fs";
import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (

        <div className="relative overflow-hidden flex flex-col justify-between rounded-lg shadow-lg border border-[#2A0E61]">
            <a href={link} className="">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={600}
                    className="w-full  object-contain"
                />
            </a >

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div >
    );
};

export default ProjectCard;