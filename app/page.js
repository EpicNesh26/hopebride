'use client'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Username from "./[username]/page";
// import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY == undefined){
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function Home() {
  const amount = 9.99;
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 text-white h-[44vh]">
        <div className=" text-5xl font-bold flex justify-center items-center gap-3">Buy Me a Coffee <span><img src="/cup.gif" className="invert" width={44} alt="" /></span> </div>
        <p className="text-lg font-medium">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-25">
        
      </div>

      {/* Section 1 */}
      <div className="text-white flex flex-col py-10">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-3 py-5">
          Your Fans Can Buy You a Coffee
        </h1>
        <div className="flex gap-24">
          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/suit.gif" alt="Coffee Support" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">
                Fund Yourself
              </p>
              <p className="text-gray-400 text-base font-medium">
                Turn your passion into progress with direct support from your fans and followers.
              </p>
            </div>
          </div>

          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/community.gif" alt="Community Engagement" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">Build a Loyal Community</p>
              <p className="text-gray-400 text-base font-medium">
                Engage with your audience through exclusive updates and behind-the-scenes content, creating lasting connections with your supporters.
              </p>
            </div>
          </div>

          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/world.gif" alt="Global Reach" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">Reach the World</p>
              <p className="text-gray-400 text-base font-medium">
                Expand your creative impact with tools designed to help you share your projects and attract a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="text-white flex flex-col py-20">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-3 py-5">
          Learn more about us.
        </h1>
        <div className="flex gap-24">
          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/empower.gif" alt="Coffee Support" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">
                Empowering Creators
              </p>
              <p className="text-gray-400 text-base font-medium">
                We believe in empowering creators to bring their ideas to life with the support of their most loyal fans.
              </p>
            </div>
          </div>

          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/communitybuild.gif" alt="Community Engagement" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">Building Meaningful Connections</p>
              <p className="text-gray-400 text-base font-medium">
                Our platform connects you with your audience in a meaningful way, helping you build a loyal community that believes in your vision.
              </p>
            </div>
          </div>

          <div className="item flex flex-col justify-center items-center gap-2 rounded-full mx-auto w-1/3">
            <div className="bg-[#191c1c] p-5 rounded-full">
              <img className="invert" src="/expand.gif" alt="Global Reach" width={100} />
            </div>
            <div className="texts flex flex-col justify-center items-center gap-2 px-8">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text">Expanding Your Reach</p>
              <p className="text-gray-400 text-base font-medium">
                Whether you're just starting out or already have a following, our platform helps you reach a global audience, giving your projects the visibility they deserve.
              </p>
            </div>
          </div>
        </div>
      </div >

      <div className="bg-white h-1 opacity-25">
        
      </div>

      {/* Section 3 */}
      <div className="text-white flex  justify-center item py-10">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/o1L1EYiobi4?si=zYG0Qnu5bkXN4LtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div >
    </>
  );
}
