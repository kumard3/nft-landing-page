/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

interface herocard {
  title: string;
  description: string;
}
const HeroCardData = [
  {
    title: "Easy to use UI elements based on Tailwind CSS " as string,
    description:
      "dev.UI is a toolkit for developers and designers to make creating interfaces easier. Everything is modular and customizable to fit your brand.",
  },
  {
    title: "Get the essentials in one place    ",
    description:
      "We know it's frustrating to find an UI kit with all the right components and then find out that each element costs money, so we're offering 100+ building blocks for free. And there are many more on the way!    ",
  },
  {
    title: "Stop wasting time with CSS",
    description:
      "You don't have to be a professional designer or developer to create something beautiful.Just copy-paste the code from dev.UI into your project, add your own content and hit publish.  ",
  },
];

const HeroCard = ({ title, description }: herocard) => {
  return (
    <div className=" glass m-2  h-[15rem]  max-w-[400px] p-5 rounded-lg">
      <h1 className="font-bold text-2lg">{title}</h1>

      <p className="text-lg py-3 text-gray-200">{description}</p>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="min-h-screen ">
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>

      <div className="flex flex-wrap w-full  justify-between  py-[2rem] z-50 ">
        <div className="flex mt-10 flex-col dark:text-white sm:text-center lg:max-w-5xl lg:text-left p-6  rounded-sm  ">
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
              <span className=" flex flex-col justify-start   text-lg font-bold rounded  text-white ">
                Powered By 
                <img src="logo-black1.png" />
              </span>
            </Link>
            <Link href="/templates" passHref>
              <span className="px-6 py-3 min-h-[3rem] border-2 ml-4  text-lg font-bold rounded glass transition-colors duration-500 text-white ">
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
