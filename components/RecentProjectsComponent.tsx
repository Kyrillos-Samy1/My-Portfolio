import { projects } from "@/data/index";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

export default function RecentProjectsComponent() {
  return (
    <>
      <div className="grid xl:grid-cols-2 lg:grid-col-1 h-full ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="h-full xs:h-[33.5rem] sm:h-[35rem] md:h-[40rem] lg:h-[42rem] 2xl:h-[42rem] flex items-center justify-center xs:w-[100vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[40vw]"
            key={id}>
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center xs:w-[300px] sm:w-[475px] md:w-[570px] lg:w-[600px] xl:w-[460px] 2xl:w-[580px]  overflow-hidden xs:h-[40vh] md:h-[35vh] lg:h-[50vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute -bottom-10 rotate-3 w-fit object-contain h-[100%] rounded-xl"
                />
              </div>

              <h2 className="font-bold lg:text-2xl md:text-xl xxs:text-base line-clamp-1">
                {title}
              </h2>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sx">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 mt-[4px]" color="#38bdf8" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
}
