import Link from "next/link";


export default function Hero() {
  return (
    <div className="min-h-screen ">
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>

      <div className="flex flex-wrap w-full  justify-between  py-[2rem] z-50 ">
        <div className="flex mt-10 flex-col  dark:text-white sm:text-center lg:max-w-5xl lg:text-left pl-7  rounded-sm  ">
          <h1 className="hero-title text-[70px] font-bold leading-none ">
            Music for NFT creators.
          </h1>

          <h1 className="hero-title text-6xl font-semibold flex flex-col my-4 ">
            Digital Music for fans.
          </h1>
          <p className="max-w-lg ">
            Music NFTs will continue to revolutionize the way that artists and
            fans create community together as we enter the upcoming year —
            undoubtedly changing the trajectory of countless budding music
            careers.{" "}
          </p>
          <div className="flex  items-center sm:justify-center lg:justify-start ">
            <Link href="/components" passHref>
              <span className=" flex flex-col justify-start ml-5  text-lg font-bold rounded  text-white ">
                Powered By
                <img src="logo-black1.png" />
              </span>
            </Link>
            <Link href="/templates" passHref>
              <span className="px-6 py-3 min-h-[3rem] border-2 ml-10  text-lg font-bold rounded glass transition-colors duration-500 text-white ">
                Discover More {`>`}
              </span>
            </Link>
          </div>
        </div>
        <div className="h-[44rem] relative -top-20">
          <img src="image5.png" className="object-fit h-full" />
        </div>
      </div>
    </div>
  );
}
