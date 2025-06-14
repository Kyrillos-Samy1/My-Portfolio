"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid/BentoGrid";

export function Grid() {
  return (
    <>
      <section>
        <BentoGrid className="mx-auto md:auto-rows-[20rem] ">
          {gridItems.map((item, index) => (
            <BentoGridItem
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              spareImg={item.spareImg}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
            />
          ))}
        </BentoGrid>
      </section>
    </>
  );
}

interface GridItemProps {
  className: string;
  title: string;
  description: string;
  id?: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}

const gridItems: GridItemProps[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication!",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2 m-2 p-0",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "p-4 bg-black/50 text-white w-[105%] -ml-2",
    img: "/b1.svg",
    spareImg: ""
    // header: <Skeleton />,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications!",
    description: "",
    className:
      "lg:col-span-1 md:col-span-1 md:row-span-1 m-2 xs:text-center sm:text-start md:text-start lg:text-start xl:text-start",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start z-10",
    img: "",
    spareImg: ""
    // header: <Skeleton />,
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1 m-2",
    imgClassName: "",
    titleClassName: "justify-center z-10",
    img: "",
    spareImg: ""
    // header: <Skeleton />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  },
  {
    id: 4,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1 m-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center z-10",
    img: "",
    spareImg: ""
    // header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },

  {
    id: 5,
    title: "Tech enthusiast with a passion for development!",
    description: "",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1 m-2",
    imgClassName:
      "xs:mt-11 md:mt-16 lg:mt-20 sm:object-contain md:object-cover lg:object-contain xs:ml-32 sm:ml-44 md:ml-16",
    titleClassName:
      "justify-center md:justify-start lg:justify-center z-10 xs:w-60 lg:w-full ",
    img: "/b4.svg",
    spareImg: "/grid.svg"
    // header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },
  {
    id: 6,
    title: "Currently building a JS Animation library!",
    description: "The Inside Scoop",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1 m-2 tracking-wider",
    imgClassName:
      "md:mt-16 lg:mt-32 sm:object-cover xs:ml-32 sm:ml-44 md:ml-16",
    titleClassName:
      "justify-center md:justify-start lg:justify-center z-10 xs:w-60 lg:w-full ",
    img: "/b5.svg",
    spareImg: "/grid.svg"
    // header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  }
];
